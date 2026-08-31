export type IndustryContent = {
  slug: string;
  name: string;
  tag: string;
  shortBlurb: string;
  marketStructure: string;
  workingThemes: { title: string; description: string }[];
  indicators: { label: string; value: string; note: string }[];
  recentMandates: string[];
  capacityNote: string;
};

export const industries: IndustryContent[] = [
  {
    slug: "financial-services",
    name: "Money that answers to somebody",
    tag: "Practice since 2024",
    shortBlurb:
      "Retail and commercial banks, insurers and asset managers. Active files currently include capital plan reviews, target operating model work for two universal banks, and a pricing diagnostic for a European life insurer.",
    marketStructure:
      "Financial services revenue across the firm's coverage universe has grown at a compound rate of three to four percent over the last decade, with most of the dispersion driven by net interest margin and fee compression rather than volume. The structural questions that arrive at the board are increasingly about capital intensity per unit of return rather than top-line growth: how to deploy regulatory capital across business lines, how to price for risk in segments where competitors have repriced first, and how to redesign the operating model to reduce cost-to-income without impairing the franchise.",
    workingThemes: [
      {
        title: "Capital deployment under Basel transition",
        description:
          "Re-allocation of regulatory capital across business lines as final Basel rules take effect. Most reviews concentrate on the differential cost of capital between trading and banking book activities and on the implications for retained earnings policy.",
      },
      {
        title: "Operating model after a universal bank merger",
        description:
          "Post-deal redesign of the combined operating model, from spans and layers through to decision rights at division level. The workshop has run three files of this shape since it opened in 2024.",
      },
      {
        title: "Pricing in life and pensions",
        description:
          "Pocket-price reconstruction in life insurance and corporate pensions, where pricing complexity and intermediary discount have eroded realised margin against published lists.",
      },
      {
        title: "Independent review of internal capital adequacy",
        description:
          "Second-opinion reviews of internal capital adequacy assessment process submissions, commissioned by audit committees ahead of supervisory dialogue.",
      },
    ],
    indicators: [
      { label: "Active files", value: "4", note: "As of the most recent quarterly review" },
      { label: "Median file length", value: "13 wks", note: "Across files closed since the workshop opened in 2024" },
      { label: "Repeat client share", value: "40%", note: "Mandates from clients with at least one prior file" },
      { label: "Sector readers", value: "2", note: "Each with at least twelve years of operating or supervisory experience before the workshop opened" },
    ],
    recentMandates: [
      "Capital plan review for a top-ten European bank, eight weeks, signed June 2025",
      "Target operating model design for a universal bank merger, sixteen weeks, signed October 2025",
      "Pocket-price reconstruction for a European life insurer, fourteen weeks, signed February 2026",
      "Independent ICAAP review for a mid-cap commercial bank, six weeks, signed November 2025",
    ],
    capacityNote:
      "The financial services practice maintains a published capacity ceiling of six concurrent files. New intake is reviewed monthly by the sector reader and approved by the senior reader.",
  },
  {
    slug: "industrial-and-manufacturing",
    name: "Plants, networks and things that arrive on lorries",
    tag: "Practice since 2024",
    shortBlurb:
      "Discrete and process manufacturers with footprint complexity above twenty plants. Since opening in 2024 the workshop has advised on four footprint and capacity programmes, with a median committed saving of one-eighty basis points of cost of goods.",
    marketStructure:
      "Industrial portfolios are being reshaped by three converging pressures: the long unwind of pandemic-era inventory and pricing distortions, structural shifts in trade routes between Europe, the United States and East Asia, and the slower but increasingly visible transition of energy-intensive operations. The questions that reach the board are typically about footprint, capital intensity and the order in which to sequence sites for closure, automation or reshoring. Pricing architecture and procurement governance feature heavily where input volatility has outrun the existing pass-through mechanism.",
    workingThemes: [
      {
        title: "Footprint reshape under trade reconfiguration",
        description:
          "Sequenced footprint reviews where tariff regimes, customer concentration and energy cost combine to make the existing plant network sub-optimal. Engagements typically size and rank twelve to forty sites.",
      },
      {
        title: "Margin programmes in process industries",
        description:
          "Multi-year programmes spanning procurement, yield, energy and organisation. Designed to retain savings into year three through the governance pattern the readers have documented across earlier programmes, in this firm and before it.",
      },
      {
        title: "Pricing pass-through under input volatility",
        description:
          "Reconstruction of pricing waterfalls where input cost movement has outrun list pricing cadence. Includes design of contractual indexation where customer contracts allow.",
      },
      {
        title: "Operating model after a portfolio carve-out",
        description:
          "Redesign of the residual operating model after a divestiture, with explicit attention to stranded cost and shared service unwind.",
      },
    ],
    indicators: [
      { label: "Active files", value: "5", note: "Concentrated in Europe and North America" },
      { label: "Median saving committed", value: "180 bps", note: "Cost of goods, across margin programmes since 2024" },
      { label: "Footprint files", value: "4", note: "Completed since 2024" },
      { label: "Sector readers", value: "2", note: "Including a former head of operations" },
    ],
    recentMandates: [
      "Footprint review for a multinational components manufacturer, twelve weeks, signed September 2025",
      "Margin programme design for a process chemicals group, twenty weeks, signed January 2026",
      "Pricing pass-through architecture for a building products firm, ten weeks, signed March 2026",
      "Carve-out operating model for an industrial conglomerate, sixteen weeks, signed November 2025",
    ],
    capacityNote:
      "The industrial practice operates on a six-file concurrent capacity ceiling. Footprint and margin files are staffed from a standing roster of plant operators retained on advisor contracts.",
  },
  {
    slug: "technology-and-software",
    name: "Software that outgrew its file",
    tag: "Practice since 2024",
    shortBlurb:
      "Vertical SaaS, infrastructure software and platform businesses between two hundred and fifteen hundred employees. Engagements concentrate on ARR architecture, gross margin programmes and product portfolio rationalisation ahead of growth equity rounds.",
    marketStructure:
      "The shift from growth-at-any-cost to durable margin in software has changed the questions that reach the board. Net retention is again being decomposed against gross retention rather than reported as a single number. Gross margin is being scrutinised for hosting cost discipline. Product portfolios assembled through five years of acquisitive growth are being rationalised on the same basis as industrial portfolios, with grow, harvest, fix or exit dispositions assigned at the SKU level. The firm's technology practice was set up to bring this analytical discipline to companies that scaled before they could afford it.",
    workingThemes: [
      {
        title: "ARR architecture and net retention decomposition",
        description:
          "Reconstruction of ARR by cohort, product and segment, with net retention decomposed into gross retention, expansion and downsell. Used by audit committees and by growth equity sponsors as a baseline.",
      },
      {
        title: "Gross margin programmes",
        description:
          "Multi-quarter programmes targeting hosting cost, professional services margin and customer success cost-to-serve. Often the precursor to a refinancing or growth round.",
      },
      {
        title: "Product portfolio rationalisation",
        description:
          "Application of the portfolio file template to software portfolios assembled through acquisition. Grow, harvest, fix or exit dispositions at the SKU level.",
      },
      {
        title: "Pre-investment commercial diligence",
        description:
          "Independent commercial diligence ahead of growth equity, run on the same disclosure standards as the firm's pre-transaction template.",
      },
    ],
    indicators: [
      { label: "Active files", value: "3", note: "Median customer ARR between $30m and $250m" },
      { label: "Median gross margin lift", value: "320 bps", note: "Across three completed gross margin programmes" },
      { label: "Pre-investment diligences", value: "6", note: "Completed for growth equity sponsors since 2024" },
      { label: "Sector readers", value: "2", note: "Both former operators in vertical SaaS" },
    ],
    recentMandates: [
      "ARR decomposition for a vertical SaaS platform, eight weeks, signed July 2025",
      "Gross margin programme for an infrastructure software firm, sixteen weeks, signed October 2025",
      "Product portfolio rationalisation for a multi-product CRM, twelve weeks, signed January 2026",
      "Commercial diligence for a growth equity sponsor on a horizontal SaaS target, six weeks, signed February 2026",
    ],
    capacityNote:
      "The technology practice operates a smaller concurrent ceiling of four files, given the relative density of pre-investment diligence work, which is non-deferrable once started.",
  },
  {
    slug: "healthcare-and-life-sciences",
    name: "Care, at the price the ledger allows",
    tag: "Practice since 2024",
    shortBlurb:
      "Integrated health systems, payors and mid-cap medical device manufacturers. Recent work covers commercial operating model design for a specialty pharma launch and a five-year capital plan review for a regional health system.",
    marketStructure:
      "Healthcare and life sciences files concentrate where capital intensity meets regulatory complexity: integrated delivery systems planning capital expenditure across a fifteen-year horizon, payors restructuring provider contracts under outcome-based mechanisms, and mid-cap device and specialty pharma firms designing commercial operating models for a smaller number of high-value launches. The firm does not work in pricing of branded pharmaceuticals or in payor-provider rate negotiations as a primary file, both on conflicts grounds and on the firm's longstanding policy of not advising on third-party reimbursement.",
    workingThemes: [
      {
        title: "Capital planning for integrated delivery systems",
        description:
          "Five to ten year capital plans for regional and academic health systems, balancing service line strategy, ambulatory build-out and digital infrastructure on a single envelope.",
      },
      {
        title: "Commercial operating model for specialty launch",
        description:
          "Design of the field force, market access and key account model for specialty pharmaceutical and device launches in concentrated specialist markets.",
      },
      {
        title: "Payor portfolio review under value-based shift",
        description:
          "Review of payor product and contract portfolios as outcome-based mechanisms increase in share. Focus on the operating model required to administer them at scale.",
      },
      {
        title: "Independent strategic review for medical device firms",
        description:
          "Strategy reviews on the firm's standard eight-week template, applied to mid-cap medical device companies considering portfolio reshape.",
      },
    ],
    indicators: [
      { label: "Active files", value: "3", note: "Across health systems, payors and device firms" },
      { label: "Median file length", value: "14 wks", note: "Health systems files run longer than the firm average" },
      { label: "Repeat client share", value: "35%", note: "Across files closed since 2024" },
      { label: "Sector readers", value: "2", note: "Including a former chief strategy officer of an integrated system" },
    ],
    recentMandates: [
      "Five-year capital plan review for a regional health system, twelve weeks, signed August 2025",
      "Commercial operating model for a specialty pharma launch, sixteen weeks, signed November 2025",
      "Payor portfolio review for a mid-Atlantic plan, ten weeks, signed January 2026",
      "Strategy review for a mid-cap medical device firm, eight weeks, signed March 2026",
    ],
    capacityNote:
      "The healthcare practice operates on a four-file concurrent capacity ceiling. Health system files are reviewed by an external clinical advisor before issue.",
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);