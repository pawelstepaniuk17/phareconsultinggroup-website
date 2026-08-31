import type { InsightContent } from "./insights";

/**
 * Validation rules for editorial content.
 *
 * The firm was founded in 2024. Every published note, article and blurb must
 * be consistent with that founding year. These rules run at module load in
 * development and throw on the first violation, so an editor introducing an
 * inconsistent date or an unattributed multi-year claim sees the failure
 * immediately in the browser console rather than in production.
 */

export const FOUNDING_YEAR = 2024;

/** Attribution phrases that legitimise a multi-year or pre-2024 reference. */
const ATTRIBUTION_PHRASES = [
  "prior practices",
  "prior practice",
  "earlier files the readers led",
  "over their careers",
  "the readers have built",
  "the readers have followed over their careers",
  "the readers led in their prior practices",
  "in this workshop and before it",
  "before it",
];

/**
 * Firm-history wording that requires attribution when used.
 *
 * Deliberately narrow: analytical horizons that describe the phenomenon under
 * study (e.g. "year three of pocket-price drift", "twenty-four months post
 * integration") are legitimate longitudinal descriptors of a file or deal
 * vintage and are NOT firm-history claims. We only flag phrases that imply
 * the firm itself has been operating for many years.
 */
const MULTI_YEAR_TRIGGERS = [
  /\b(over|across|in|during) the (last|past) (decade|century|\w+ years?)\b/i,
  /\bfor (decades|many years|years now)\b/i,
  /\b(we|the firm|the practice) (have|has) been\b.*\b(for|since)\b/i,
  /\ba (decade|generation) of\b/i,
  /\blong[- ]standing (practice|track record|history) of\b/i,
];

/** Bare "since YYYY" or "in YYYY" references we scan for. */
const YEAR_REFERENCE = /\b(since|in|from|by|before|after)\s+((?:19|20)\d{2})\b/gi;

/** ISO-style date parsing for the entry `date` field (e.g. "March 2026"). */
const MONTHS = [
  "january","february","march","april","may","june",
  "july","august","september","october","november","december",
];

function parseEntryDate(raw: string): { year: number; month: number } | null {
  // Handles "March 2026", "Q1 2026", "03/2026", "January 2026".
  const trimmed = raw.trim().toLowerCase();
  const yearMatch = trimmed.match(/(20\d{2})/);
  if (!yearMatch) return null;
  const year = parseInt(yearMatch[1], 10);
  const monthWord = MONTHS.findIndex((m) => trimmed.startsWith(m));
  const quarter = trimmed.match(/^q([1-4])/);
  const numeric = trimmed.match(/^(\d{1,2})\//);
  let month = 1;
  if (monthWord >= 0) month = monthWord + 1;
  else if (quarter) month = (parseInt(quarter[1], 10) - 1) * 3 + 1;
  else if (numeric) month = parseInt(numeric[1], 10);
  return { year, month };
}

function hasAttribution(text: string): boolean {
  const lower = text.toLowerCase();
  return ATTRIBUTION_PHRASES.some((p) => lower.includes(p.toLowerCase()));
}

function collectText(entry: InsightContent): { field: string; text: string }[] {
  const chunks: { field: string; text: string }[] = [
    { field: "title", text: entry.title },
    { field: "excerpt", text: entry.excerpt },
    { field: "authorRole", text: entry.authorRole },
  ];
  if (entry.pullQuote) chunks.push({ field: "pullQuote", text: entry.pullQuote });
  entry.body.forEach((section, i) => {
    if (section.heading)
      chunks.push({ field: `body[${i}].heading`, text: section.heading });
    section.paragraphs.forEach((p, pi) =>
      chunks.push({ field: `body[${i}].paragraphs[${pi}]`, text: p })
    );
  });
  return chunks;
}

export type ValidationIssue = {
  slug: string;
  field: string;
  rule: string;
  detail: string;
};

export function validateInsight(entry: InsightContent): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // Rule 1: publication date must not precede the founding year.
  const parsed = parseEntryDate(entry.date);
  if (!parsed) {
    issues.push({
      slug: entry.slug,
      field: "date",
      rule: "date-parseable",
      detail: `Could not parse publication date "${entry.date}".`,
    });
  } else if (parsed.year < FOUNDING_YEAR) {
    issues.push({
      slug: entry.slug,
      field: "date",
      rule: "date-after-founding",
      detail: `Publication date ${entry.date} predates founding year ${FOUNDING_YEAR}.`,
    });
  }

  for (const { field, text } of collectText(entry)) {
    // Rule 2: any explicit year mentioned must be >= 2024, unless the surrounding
    // sentence carries an attribution to the readers' prior practices.
    const matches = [...text.matchAll(YEAR_REFERENCE)];
    for (const m of matches) {
      const year = parseInt(m[2], 10);
      if (year >= FOUNDING_YEAR) continue;
      // Look at the containing sentence for attribution.
      const sentence = extractSentence(text, m.index ?? 0);
      if (!hasAttribution(sentence)) {
        issues.push({
          slug: entry.slug,
          field,
          rule: "pre-founding-year-needs-attribution",
          detail: `"${m[0]}" appears without attribution to the readers' prior practices in: "${sentence.trim()}"`,
        });
      }
    }

    // Rule 3: multi-year / longitudinal wording requires attribution.
    for (const trigger of MULTI_YEAR_TRIGGERS) {
      const match = text.match(trigger);
      if (!match) continue;
      const sentence = extractSentence(text, match.index ?? 0);
      // Exempt trigger-only sentences that describe the future or the file itself
      // (e.g. "reviewed eighteen months post-close" if attribution exists nearby).
      if (hasAttribution(sentence) || hasAttribution(text)) continue;
      issues.push({
        slug: entry.slug,
        field,
        rule: "multi-year-needs-attribution",
        detail: `Longitudinal phrase "${match[0]}" lacks attribution in: "${sentence.trim()}"`,
      });
    }
  }

  return issues;
}

function extractSentence(text: string, index: number): string {
  const start = Math.max(
    text.lastIndexOf(".", index - 1),
    text.lastIndexOf("?", index - 1),
    text.lastIndexOf("!", index - 1)
  );
  const rest = text.slice(index);
  const endRel = rest.search(/[.?!]/);
  const end = endRel === -1 ? text.length : index + endRel + 1;
  return text.slice(start + 1, end);
}

export function validateAllInsights(entries: InsightContent[]): ValidationIssue[] {
  return entries.flatMap(validateInsight);
}

/**
 * Development-only guard. Call this once at module load; in production builds
 * it is a no-op so shipping does not depend on validator uptime.
 */
export function assertInsightsValidInDev(entries: InsightContent[]): void {
  if (typeof import.meta === "undefined" || !import.meta.env?.DEV) return;
  const issues = validateAllInsights(entries);
  if (issues.length === 0) return;
  const grouped = issues.reduce<Record<string, ValidationIssue[]>>((acc, i) => {
    (acc[i.slug] ||= []).push(i);
    return acc;
  }, {});
  // eslint-disable-next-line no-console
  console.group(`[insights] ${issues.length} editorial validation issue(s)`);
  for (const [slug, list] of Object.entries(grouped)) {
    // eslint-disable-next-line no-console
    console.group(slug);
    list.forEach((i) =>
      // eslint-disable-next-line no-console
      console.warn(`${i.rule} @ ${i.field}\n  ${i.detail}`)
    );
    // eslint-disable-next-line no-console
    console.groupEnd();
  }
  // eslint-disable-next-line no-console
  console.groupEnd();
}