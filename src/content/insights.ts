export type InsightContent = {
  slug: string;
  series: string;
  number: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  authorRole: string;
  body: { heading?: string; paragraphs: string[] }[];
  pullQuote?: string;
  relatedSlugs?: string[];
};

export const insights: InsightContent[] = [
  {
    slug: "pocket-price-drift",
    series: "Reading",
    number: "№14",
    date: "March 2026",
    readTime: "11 min",
    title:
      "Prices drift on Tuesdays: what forty invoice ledgers say about the space between list and paid",
    excerpt:
      "An analysis of forty industrial portfolios, pooled from files closed in the workshop since it opened in 2024 with earlier files the readers led in their prior practices, shows a median annual erosion of one-eighty basis points between list and pocket price, concentrated in the second and third year after the last formal price architecture review. The reading proposes a three-step protocol for reconstructing the waterfall and shows expected recovery bands by industry.",
    authorRole: "Pricing practice, signed by the builder",
    body: [
      {
        paragraphs: [
          "Price decisions are made once and pocket price drifts continuously. Across the forty industrial portfolios reviewed for this reading — files closed in the workshop since 2024 pooled with earlier files the readers led in their prior practices — the median annual erosion between list and realised price was one-eighty basis points, with a long upper tail in segments where discount authority had been delegated below the regional commercial leader without a corresponding governance framework.",
          "The reading sets out three findings of practical use to a board reading the gap between guided and realised gross margin: where the drift accumulates by year of vintage, which segments are most exposed structurally, and what a realistic year-one recovery looks like once a reconstruction has been completed.",
        ],
      },
      {
        heading: "Drift by vintage",
        paragraphs: [
          "Drift is not linear in time since the last formal price architecture review. Year one shows a median erosion of forty basis points; year two, one-twenty; year three, two-twenty; year four and beyond, two-eighty. The pattern is consistent across discrete and process manufacturers and is largely independent of input cost movement.",
          "The shape of the curve has a straightforward interpretation. In year one, sales organisations operate against the discipline of the recent reset. By year two, the standard exception cases have all been re-litigated. By year three, the exception case is the rule. This is the pattern most often visible in the pocket-price waterfall when a new commercial leader requests a baseline.",
        ],
      },
      {
        heading: "Structural exposure by segment",
        paragraphs: [
          "Segments with high customer concentration, long tender cycles and heavy reliance on intermediated channels show the greatest structural exposure. Across the forty portfolios, the top quartile of structurally exposed segments showed median annual erosion of two-eighty basis points; the bottom quartile, ninety.",
          "Concentration matters more than channel mix in absolute terms. Even direct-to-customer segments with the top ten accounts representing more than forty percent of revenue showed structural drift comparable to intermediated segments with broader account bases.",
        ],
      },
      {
        heading: "Year-one recovery bands",
        paragraphs: [
          "The realistic recovery band at twelve months post-reconstruction is between sixty and one-forty basis points of pocket price, conditional on three governance changes being implemented in parallel: a renewed discount authority matrix with named approval thresholds; a monthly variance review at the executive committee; and a commercial incentive plan keyed to contribution rather than revenue.",
          "Programmes that implement only the discount authority matrix recover roughly one third of the realistic band. Programmes that add the variance review recover two thirds. The full band requires the third change, and that change is the one most often resisted, because it touches the existing compensation arrangement.",
        ],
      },
      {
        heading: "Three-step reconstruction protocol",
        paragraphs: [
          "The reading sets out a three-step protocol for reconstructing the pocket-price waterfall. First, rebuild the waterfall by segment, channel and product family from invoice-line data reconciled to the general ledger. Second, run a structured field programme to test elasticities on selected SKUs and accounts. Third, propose the target architecture, the discount governance charter and the revised incentive plan as a single integrated package.",
          "Each step is described in the appendices with file-level detail. The protocol is the same one the firm uses on its standard fourteen-week pricing template; the paper documents it in full so that internal teams can run a comparable exercise where the budget for an external file is not available.",
        ],
      },
    ],
    pullQuote:
      "By year three of pocket-price drift, the exception case is the rule.",
    relatedSlugs: ["margin-programmes-that-held", "synergy-models-get-wrong"],
  },
  {
    slug: "decision-latency-as-a-metric",
    series: "Field note",
    number: "№09",
    date: "February 2026",
    readTime: "8 min",
    title:
      "The wait between question and answer, measured with a stopwatch on twenty-eight floors",
    excerpt:
      "Decision latency, measured as the median elapsed time from question to binding decision, ranges from three days at the top decile to fourteen weeks at the bottom decile. The reading sets out the four design choices that account for most of the variance.",
    authorRole: "Operating model practice, signed by the sector reader",
    body: [
      {
        paragraphs: [
          "Most operating model conversations begin with the wrong measurement. Spans, layers and reporting cost are all visible to anyone with an organisation chart and a payroll register. The metric that explains the strategic difference between two otherwise comparable firms is decision latency, and it is rarely measured.",
          "The reading draws on twenty-eight operating model files in which decision latency was sampled on a comparable basis, forty material decisions per firm, traced from the first written question to the binding commitment. Files completed in this workshop since it opened in 2024 are pooled with earlier files the readers led in their prior practices.",
        ],
      },
      {
        heading: "The distribution",
        paragraphs: [
          "Median latency for material commitments ranges from three days at the top decile to fourteen weeks at the bottom decile. The mean is eight weeks, but the mean is uninformative; the distribution is bimodal, with a cluster of well-designed firms below ten days and a much larger cluster between four and twelve weeks.",
          "Outside the top decile, the firms with the lowest latency are not the firms with the flattest structures. They are the firms with the most explicit decision rights at the role level, regardless of layer count.",
        ],
      },
      {
        heading: "Four design choices",
        paragraphs: [
          "Four design choices account for most of the variance. First, decision rights documented at the role level rather than the function level. Second, a published exception escalation path that does not default to the chief executive. Third, a meeting cadence that includes a forum specifically for binding decisions, separated from the forum for review. Fourth, a measurement protocol that samples decision latency quarterly and publishes the sample to the executive committee.",
          "Firms that have implemented all four choices show median latency of five days or less. Firms with three of four show median latency of two weeks. Firms with two of four show median latency of six weeks, and the bottom decile typically has none of the four in place.",
        ],
      },
      {
        heading: "Implications for redesign",
        paragraphs: [
          "The implication for redesign is straightforward. A flatter structure, on its own, does not reduce latency. The structural intervention has to be paired with the role-level documentation, the exception path, the meeting cadence and the measurement protocol. None of the four is technically difficult; the resistance is almost always to the third, because separating review from decision exposes how often review forums are used to defer.",
        ],
      },
    ],
    pullQuote:
      "A flatter structure, on its own, does not reduce latency.",
    relatedSlugs: ["pocket-price-drift", "capital-allocation-asymmetric-hurdles"],
  },
  {
    slug: "capital-allocation-asymmetric-hurdles",
    series: "Reading",
    number: "№11",
    date: "December 2025",
    readTime: "13 min",
    title:
      "One hurdle for everything is the cheapest way to misplace the money",
    excerpt:
      "Applying a single hurdle rate across structurally different businesses systematically misallocates capital toward mature, lower-volatility units. The reading writes down a calibration approach drawn from nineteen portfolio files — those closed in the workshop since 2024 pooled with earlier files the readers led in their prior practices — and quantifies value at risk under uniform versus differentiated hurdles.",
    authorRole: "Capital allocation practice, signed by two partners",
    body: [
      {
        paragraphs: [
          "A uniform hurdle rate, applied across structurally different businesses, is a convenient simplification with a measurable cost. Across the nineteen portfolio files reviewed for this reading — pooled from workshop files since 2024 and earlier files the readers led in their prior practices — the median annual misallocation under a uniform hurdle was one and a half percent of group capital, with a range from twenty basis points to four percent.",
          "The reading proposes a reference framework for differentiated hurdles, calibrated against four structural variables. The framework is the one applied on the firm's standard ten-week capital and portfolio template; it is documented in full here so that finance functions can run a comparable calibration internally.",
        ],
      },
      {
        heading: "Why uniform hurdles misallocate",
        paragraphs: [
          "A uniform hurdle systematically over-funds mature, low-volatility units and under-funds higher-variance units with comparable expected return. The mechanism is mechanical: the same expected return clears the hurdle in the lower-variance unit and clears it less convincingly in the higher-variance unit, even where the risk-adjusted return is comparable.",
          "Across the nineteen portfolios studied, the units most often under-funded under a uniform hurdle were not, as conventional wisdom suggests, the start-up adjacencies. They were the established but cyclically exposed core operations of the firm, where management had begun to favour smoother, lower-return alternatives.",
        ],
      },
      {
        heading: "Four structural variables",
        paragraphs: [
          "The framework calibrates differentiated hurdles against four variables: cyclicality of the underlying demand, capital intensity per unit of revenue, regulatory exposure, and substitution risk over a five-year horizon. Each variable is scored on a documented scale and the calibration is signed off by the chief financial officer before it is applied in the portfolio file.",
          "The reading sets out the scoring scale in full and gives anonymised illustrations from three portfolios across financial services, industrials and healthcare.",
        ],
      },
      {
        heading: "Quantified value at risk",
        paragraphs: [
          "The annual value at risk under a uniform hurdle, expressed as a percentage of group capital, is reported by sector and by portfolio breadth. Multi-business industrial groups carry the largest exposure; single-vertical software firms carry the smallest. The implication is not that every firm should adopt differentiated hurdles; it is that the decision to adopt or not should be a board decision rather than a default.",
        ],
      },
    ],
    relatedSlugs: ["synergy-models-get-wrong", "margin-programmes-that-held"],
  },
  {
    slug: "synergy-models-get-wrong",
    series: "House note",
    number: "03/2026",
    date: "January 2026",
    readTime: "9 min",
    title:
      "Synergy numbers survive the room; they rarely survive the twelfth month",
    excerpt:
      "Across forty-seven completed acquisitions reviewed eighteen months post-close — a pooled sample drawn largely from the readers' prior practices and supplemented by files closed in the workshop since 2024 — only thirty-one percent of committed synergies were realised within the original timeline. The reading attributes the gap to four recurring estimation errors and proposes a pre-signing diagnostic to surface them.",
    authorRole: "Transaction practice, signed by the builder",
    body: [
      {
        paragraphs: [
          "Synergy models survive the investment committee far better than they survive integration. Across forty-seven completed acquisitions reviewed eighteen months post-close — the sample the readers have built over their careers and continue to add to in the workshop since 2024 — only thirty-one percent of committed synergies were realised within the original timeline. A further forty-three percent were eventually realised, on a longer timeline. The remaining twenty-six percent were never realised in any meaningful sense.",
          "The reading attributes the gap to four recurring estimation errors. Each is identifiable before signing if the synergy model is read with a structured set of questions; each is invisible to the standard diligence streams in their current shape.",
        ],
      },
      {
        heading: "Error one: cost synergies booked against the wrong base",
        paragraphs: [
          "Cost synergies are routinely booked against the most recent reported cost base of the target. The most recent base often reflects pandemic distortions, a one-off restructuring, or a deliberate run-up of expense ahead of sale. Booking against an undistorted base typically reduces committed synergies by ten to twenty percent.",
        ],
      },
      {
        heading: "Error two: revenue synergies modelled at full attach",
        paragraphs: [
          "Revenue synergies, where they appear, are typically modelled at full or near-full cross-sell attach. Observed attach across thirty completed integrations runs at twelve to twenty-eight percent of the modelled rate within twenty-four months. The reading proposes an attach band by deal type and channel for use in pre-signing review.",
        ],
      },
      {
        heading: "Error three: integration cost as a residual",
        paragraphs: [
          "Integration cost is too often modelled as a residual rather than a sized line item. The reading proposes a sizing protocol indexed to deal size, system count and people impact, calibrated against the integration cost actually incurred across the forty-seven reviewed transactions.",
        ],
      },
      {
        heading: "Error four: timing assumed rather than verified",
        paragraphs: [
          "Timing of realisation is assumed rather than verified. Across the forty-seven transactions, the median delay against the original timeline was nine months. A pre-signing review of timing assumptions against three benchmark transactions in the same shape narrows the gap to under three months in the cases studied.",
        ],
      },
    ],
    relatedSlugs: ["pocket-price-drift", "capital-allocation-asymmetric-hurdles"],
  },
  {
    slug: "margin-programmes-that-held",
    series: "Field note",
    number: "№12",
    date: "November 2025",
    readTime: "10 min",
    title:
      "The three habits a cost note needs, if it is to still be visible in year three",
    excerpt:
      "Programmes that retained more than seventy-five percent of committed savings at year three share a common governance pattern: weekly variance reporting, an audited reconciliation into the financial statements, and an explicit reinvestment policy. The sample is drawn from the readers' prior practices, where a year-three window can be observed cleanly.",
    authorRole: "Margin practice, signed by the builder",
    body: [
      {
        paragraphs: [
          "The honest measure of a cost programme is what remains in the financial statements three years after launch. Across twenty-three multi-year programmes reviewed for this reading — files the readers led in their prior practices, where three years of subsequent accounts can be observed — the year-three retention rate ranged from twenty-eight percent to ninety-six percent of originally committed savings.",
          "The dispersion is not explained by sector, by programme size, or by the analytical quality of the original sizing. It is explained almost entirely by three governance choices made at design.",
        ],
      },
      {
        heading: "Weekly variance reporting",
        paragraphs: [
          "Programmes that retained more than seventy-five percent of committed savings reported variance weekly to the second-line manager level. Programmes that reported monthly retained markedly less. The mechanism is straightforward: by the time a monthly report flags a slipping initiative, the savings for that month have already not been realised.",
        ],
      },
      {
        heading: "Audited reconciliation",
        paragraphs: [
          "The high-retention programmes reconciled programme savings into the financial statements through a documented method, audited by the external auditor at year-end. The reconciliation is what prevents savings from being absorbed back into discretionary spend without being recorded.",
        ],
      },
      {
        heading: "Written reinvestment policy",
        paragraphs: [
          "The third governance choice is the most often skipped. A written reinvestment policy, signed by the chief financial officer, sets out which percentage of realised savings is available for reinvestment, in which categories, and under whose authority. Without it, the absorption back into discretionary spend is not a process failure; it is a governance vacuum.",
        ],
      },
    ],
    pullQuote:
      "By the time a monthly variance report flags a slipping initiative, the savings for that month have already not been realised.",
    relatedSlugs: ["pocket-price-drift", "synergy-models-get-wrong"],
  },
  {
    slug: "engagement-independence",
    series: "House note",
    number: "Q1 2026",
    date: "January 2026",
    readTime: "6 min",
    title:
      "What we will not read: a live list, kept in ink",
    excerpt:
      "The firm publishes its conflicts policy in full and updates its conflicts register weekly. The memo sets out the rationale for refusing all vendor referral fees and rebates, and the operational consequences for file intake.",
    authorRole: "Office of the senior reader",
    body: [
      {
        paragraphs: [
          "Independence is not a marketing claim; it is an operational discipline that constrains intake, fee structure and the range of work the firm is able to take on. This memo sets out how the firm operationalises independence and what the practical consequences are for clients and prospective clients.",
        ],
      },
      {
        heading: "Conflicts policy",
        paragraphs: [
          "The firm publishes its conflicts policy in full on the website and updates its conflicts register weekly. New files are checked against the register at intake and again before final committee. Material new conflicts arising during an file trigger an immediate written notice to the client sponsor and, where appropriate, a structured handover to a different builder.",
        ],
      },
      {
        heading: "Fee structure",
        paragraphs: [
          "The firm refuses all vendor referral fees, software resale margins, and implementation rebates. Fees are quoted as fixed-fee files against the two-page brief; we do not bill by hours and do not run open-ended retainers. Scope changes require a written addendum signed by the builder and the client sponsor.",
        ],
      },
      {
        heading: "Standing relationships",
        paragraphs: [
          "Standing client relationships are valued, but they are not allowed to constrain analytical conclusions. Since the workshop opened in 2024 the firm has, on two occasions, recommended against transactions or strategies advanced by long-standing clients. The recommendation has on each occasion been delivered in writing and supported with the underlying analysis.",
        ],
      },
    ],
  },
  {
    slug: "rate-cycle-and-capital-plans",
    series: "Field note",
    number: "№13",
    date: "October 2025",
    readTime: "9 min",
    title:
      "The plan was drafted at zero and the world has moved: six lines to redraw",
    excerpt:
      "Capital plans drafted in a near-zero rate environment carry a small number of structural assumptions that no longer hold. The reading identifies six and quantifies the implication for hurdle calibration and capital sequencing across nineteen portfolios, pooled from workshop files since 2024 and earlier files the readers led.",
    authorRole: "Capital allocation practice, signed by the sector reader",
    body: [
      {
        paragraphs: [
          "Most multi-year capital plans currently in force were drafted in a near-zero or low-rate environment. The shift to a sustained higher-rate cycle has invalidated a small number of structural assumptions that quietly underpinned those plans. This note identifies six and quantifies the implication for hurdle calibration and capital sequencing across nineteen portfolios — files closed in the workshop since 2024 pooled with earlier files the readers led in their prior practices.",
        ],
      },
      {
        heading: "The six structural assumptions",
        paragraphs: [
          "The six assumptions are: terminal value growth rate, working capital cost, refinancing spread, residual value of long-lived assets, cross-cycle volatility of underlying demand, and the implicit option value of deferring committed capital. Five of the six are typically embedded in the model rather than stated explicitly.",
          "Re-stating each assumption to current evidence reduces aggregate plan net present value by a median of fourteen percent across the nineteen portfolios. The dispersion is wide, ranging from a one-percent reduction in capital-light service businesses to a thirty-six-percent reduction in long-cycle infrastructure businesses.",
        ],
      },
      {
        heading: "Hurdle re-calibration",
        paragraphs: [
          "Hurdle rates that were appropriate in the prior cycle are now in many cases below the cost of internally generated capital. Re-calibration is straightforward where the firm uses a documented method; where the prior hurdle was simply a longstanding convention, re-calibration becomes a board conversation about discipline as much as about arithmetic.",
        ],
      },
      {
        heading: "Sequencing implications",
        paragraphs: [
          "Sequencing matters more in a higher-rate cycle than in the prior one because the cost of carrying uncommitted capacity is higher. The reading proposes a simple decision rule for sequencing committed capital across a twelve-quarter horizon, calibrated against the option value of deferral.",
        ],
      },
    ],
    relatedSlugs: ["capital-allocation-asymmetric-hurdles", "margin-programmes-that-held"],
  },
  {
    slug: "operating-model-after-deal",
    series: "House note",
    number: "02/2026",
    date: "January 2026",
    readTime: "8 min",
    title:
      "The first hundred and eighty days after the deal settle the next three years, quietly",
    excerpt:
      "Decisions taken in the first one-eighty days post-close set the operating model for the following three years more durably than is generally appreciated. The reading draws on integration reviews of nineteen completed transactions, largely from the readers' prior practices where a three-year window is observable, with more recent files added since the workshop opened in 2024.",
    authorRole: "Operating model practice, signed by the sector reader",
    body: [
      {
        paragraphs: [
          "Post-close integration is, in practice, an operating model design exercise on a compressed clock. The decisions taken in the first one-eighty days settle the operating model for the next three years, often in ways that are hard to revisit without a second formal redesign.",
        ],
      },
      {
        heading: "Three decisions that settle the model",
        paragraphs: [
          "Three decisions matter disproportionately. First, the chosen leadership structure for the combined organisation, made formally in days zero to thirty. Second, the decision-rights protocol applied to material commitments, settled in practice by day ninety regardless of how it is described. Third, the chosen reporting cadence for the first year, which sets the rhythm of escalation and review for the duration.",
          "Each decision can be revisited later, but at significant cost in management attention and credibility. The reading proposes a structured pre-close design exercise to settle each decision intentionally rather than by default.",
        ],
      },
      {
        heading: "Where the third year goes wrong",
        paragraphs: [
          "The most common third-year operating model failure is not that the integration was incomplete; it is that the integration succeeded against an operating model that was no longer fit for the combined business. The reading documents three indicators visible at year two that predict third-year structural redesign with reasonable accuracy.",
        ],
      },
    ],
    relatedSlugs: ["decision-latency-as-a-metric", "synergy-models-get-wrong"],
  },
  {
    slug: "working-capital-quiet-leak",
    series: "Reading",
    number: "№15",
    date: "April 2026",
    readTime: "12 min",
    title:
      "The quiet leak: what thirty-one cash conversion cycles say about the money that never left the building",
    excerpt:
      "An analysis of thirty-one industrial and distribution portfolios — files closed in the workshop since it opened in 2024 pooled with earlier files the readers led in their prior practices — finds a median twenty-two-day gap between the cash conversion cycle carried in the board pack and the cycle observable in the bank statements. The reading names the four accounting choices that create the gap and the two governance changes that close most of it within a single reporting period.",
    authorRole: "Working capital practice, signed by the builder",
    body: [
      {
        paragraphs: [
          "Working capital is the line most often reported, least often reconciled. Across the thirty-one portfolios reviewed for this reading — pooled from files closed in the workshop since 2024 and earlier files the readers led in their prior practices — the reported cash conversion cycle understated the observable cycle by a median of twenty-two days. In the upper decile the understatement reached fifty-one days, in every case without any accounting irregularity and in every case without the finance team being aware of it.",
          "The gap is a definitional artefact, not a reporting failure. It arises from four accounting choices that are individually defensible and collectively misleading. The reading documents each choice, quantifies its median contribution to the gap and sets out the two governance changes that close roughly seventy percent of the gap within a single reporting cycle.",
        ],
      },
      {
        heading: "Choice one: receivables measured on invoice date",
        paragraphs: [
          "Days sales outstanding is almost always calculated from invoice date rather than order date or shipment date. In portfolios where a material portion of revenue is billed on milestone or acceptance, the delay between shipment and invoice can add six to eleven days to the observable cycle that never appears in the reported metric.",
        ],
      },
      {
        heading: "Choice two: payables measured net of early-pay discount",
        paragraphs: [
          "Days payable outstanding is frequently reported net of standard early-pay discount uptake. In portfolios where treasury has been running a supplier finance programme, the reported figure can overstate the true payment period by four to nine days.",
        ],
      },
      {
        heading: "Choice three: inventory reported on average cost",
        paragraphs: [
          "Days inventory on hand, on an average cost basis, smooths the seasonal peak that governs the actual working capital requirement. In distribution portfolios with pronounced seasonality, the reported figure can understate peak working capital by fifteen to twenty-five percent.",
        ],
      },
      {
        heading: "Choice four: cash reported on quarter-end",
        paragraphs: [
          "Cash balances reported on the last banking day of the quarter routinely differ from the intra-quarter mean by amounts material to the leverage ratios calculated from them. The gap is not evidence of window-dressing; it is evidence of a reporting convention that no longer reflects the operating rhythm.",
        ],
      },
      {
        heading: "Two governance changes",
        paragraphs: [
          "Two changes close most of the gap. First, the board pack reports the observable cycle alongside the reported cycle, with the definitional bridge shown in a single table. Second, the audit committee reviews the bridge quarterly and signs off on any change in the underlying convention. Neither change requires a systems investment; both require a written protocol and a named owner.",
        ],
      },
    ],
    pullQuote:
      "The gap between the cycle in the board pack and the cycle in the bank statement is not a reporting failure; it is a definitional one.",
    relatedSlugs: ["margin-programmes-that-held", "rate-cycle-and-capital-plans"],
  },
  {
    slug: "board-pack-audit",
    series: "Field note",
    number: "№10",
    date: "March 2026",
    readTime: "9 min",
    title:
      "What the board pack was for, and what the board actually reads",
    excerpt:
      "A structured review of the last twelve months of board packs across seventeen listed and privately held groups — a mixed sample drawn from workshop files since 2024 and earlier files the readers led in their prior practices — finds a median pack length of one hundred and forty-two pages, a median reading time of eleven minutes, and a consistent gap between the pages produced and the pages that receive a written question. The reading proposes a compact pack architecture and reports the retention rate after four quarters.",
    authorRole: "Governance practice, signed by the challenger",
    body: [
      {
        paragraphs: [
          "The board pack is the most expensive document the executive team writes and the least evenly read document the board receives. Across the seventeen groups reviewed for this reading — the sample mixes workshop files closed since 2024 with earlier files the readers led in their prior practices — the median pack ran to one hundred and forty-two pages and the median reading time, measured by observing non-executive directors' calendars against the pack circulation date, was eleven minutes.",
          "The gap between pages produced and pages read is not evidence of board disengagement. It is evidence of a pack architecture that has accreted material over time without a corresponding editorial protocol. The reading proposes a compact architecture, reports the retention rate after four quarters, and names the three items that were removed and reinstated in every case they were tried.",
        ],
      },
      {
        heading: "The compact architecture",
        paragraphs: [
          "The compact architecture reduces the pack to four sections: a two-page executive summary that names the decisions the board is being asked to take; a management commentary of no more than eight pages, structured around the same headings each meeting; a data appendix of no more than twenty pages, printed on facing spreads; and a decisions register updated in the pack rather than the minutes.",
          "Everything else moves to a reference library, accessible to the board on request, updated on the same rhythm as the pack. The reference library is not part of the reading obligation; it is part of the record.",
        ],
      },
      {
        heading: "The retention rate",
        paragraphs: [
          "Four quarters after the architecture is adopted, twelve of the seventeen groups have retained it in full. Three have partially retained it, with the management commentary re-expanding to twelve or thirteen pages. Two have reverted to the pre-existing pack, in both cases after a change in company secretary. The reading documents the intervention that reliably prevents reversion: a written editorial charter, signed by the chair, that names the pack owner and the review cadence.",
        ],
      },
      {
        heading: "The three items that always come back",
        paragraphs: [
          "Three items were removed in the first iteration and reinstated by the fourth: the risk register in its full form, the diversity and inclusion dashboard, and the cyber posture summary. The reading argues that all three belong in the compact pack, on facing spreads, and sets out the one-page format that has held.",
        ],
      },
    ],
    pullQuote:
      "The median board pack runs one hundred and forty-two pages and is read for eleven minutes.",
    relatedSlugs: ["decision-latency-as-a-metric", "engagement-independence"],
  },
  {
    slug: "talent-retention-post-close",
    series: "Reading",
    number: "№16",
    date: "May 2026",
    readTime: "10 min",
    title:
      "The eighteenth month is when the acquired leaders leave",
    excerpt:
      "Retention data from twenty-nine completed acquisitions, drawn largely from the readers' prior practices and supplemented by files closed in the workshop since 2024, shows a consistent second-year exit spike among the acquired leadership tier. The reading identifies the three retention design choices that flatten the spike and quantifies the enterprise value at risk when they are omitted.",
    authorRole: "Post-merger integration practice, signed by the sector reader",
    body: [
      {
        paragraphs: [
          "Retention plans are typically designed for the first twelve months post-close, structured around a signing bonus and a first-anniversary cliff. Across the twenty-nine completed acquisitions reviewed for this reading — largely from the readers' prior practices, supplemented by files closed in the workshop since 2024 — voluntary exits among the acquired top three leadership tiers rose sharply in months thirteen through eighteen, exceeding month-one through month-twelve exits by a factor of two point four.",
          "The mechanism is straightforward. The retention design pays out at month twelve; the reasons the leader might leave are unresolved at month twelve; the earliest defensible exit window opens at month thirteen. The reading names the three design changes that flatten the second-year spike and reports the enterprise-value exposure when they are omitted.",
        ],
      },
      {
        heading: "Change one: staggered vesting through month thirty",
        paragraphs: [
          "Retention payments vested in three equal tranches at months twelve, twenty-four and thirty flatten the exit spike more effectively than any single-cliff design tested. The additional cost of the third tranche is a small fraction of the enterprise value exposed by the departure of a tier-one operator in the second year.",
        ],
      },
      {
        heading: "Change two: a written role charter at month six",
        paragraphs: [
          "A written role charter, agreed with the acquired leader by month six and signed by the combined-entity chief executive, resolves the ambiguity that most often drives second-year exits. The charter names the perimeter of the role, the reporting line, and the two or three commitments against which performance will be assessed. Where it exists, second-year exits fall by roughly forty percent against the sample base rate.",
        ],
      },
      {
        heading: "Change three: a peer-level integration sponsor",
        paragraphs: [
          "Acquired leaders paired with a peer-level integration sponsor from the acquiring organisation — not a line manager, not a human resources contact — retain at materially higher rates through month twenty-four. The mechanism is anecdotal but consistent across the sample: the sponsor absorbs the friction of the first year and shortens the loop between an emerging problem and a decision.",
        ],
      },
      {
        heading: "Enterprise value at risk",
        paragraphs: [
          "The enterprise-value exposure to the loss of a tier-one operator in the second year, measured by observed multiple compression in the twelve months following the departure, ranges from two to seven percent of transaction value. The exposure is largest in acquisitions where the strategic rationale rested on the acquired leader's franchise or judgement, and smallest in acquisitions where the rationale rested on a product or contract.",
        ],
      },
    ],
    pullQuote:
      "The retention plan pays out at month twelve; the reasons to leave are unresolved at month twelve; the exit window opens at month thirteen.",
    relatedSlugs: ["synergy-models-get-wrong", "operating-model-after-deal"],
  },
  {
    slug: "regulatory-stress-scenarios",
    series: "House note",
    number: "04/2026",
    date: "February 2026",
    readTime: "7 min",
    title:
      "Two scenarios the regulator will run that the plan does not",
    excerpt:
      "A structured review of the stress scenarios embedded in fourteen regulated-industry business plans — a sample pooled from workshop files since 2024 and earlier files the readers led in their prior practices — finds two scenarios that regulators consistently run and boards consistently omit. The reading names both and shows the calibration approach that has held across three review cycles.",
    authorRole: "Regulated industries practice, signed by the challenger",
    body: [
      {
        paragraphs: [
          "Business plans in regulated industries are increasingly stress-tested against a fixed menu of scenarios published by the sponsoring regulator. The plans reviewed for this reading — fourteen files pooled from workshop work since 2024 and earlier files the readers led in their prior practices — carried a median of seven internal scenarios, of which none matched the two scenarios regulators most frequently applied in the same period.",
        ],
      },
      {
        heading: "Scenario one: the correlated tail",
        paragraphs: [
          "The correlated-tail scenario models a simultaneous adverse move in two variables that internal risk frameworks typically model as independent — most often the primary demand variable and the primary funding cost variable. Where internal frameworks assume weak correlation, the regulator's calibration assumes strong correlation in the tail and reports the capital consequence at the ninety-ninth percentile.",
          "The reading proposes a compact calibration approach: model the correlated-tail scenario at the internal frameworks' current parameters, then again at the regulator's published parameters, and report both in the same table.",
        ],
      },
      {
        heading: "Scenario two: the operational continuity break",
        paragraphs: [
          "The operational continuity scenario models the loss of a critical operational capability — typically a settlement, custody or claims-handling function — for a defined period, and requires the plan to demonstrate the recovery pathway. Internal plans typically model financial continuity and treat operational continuity as a separate exercise; the regulator increasingly reads the two as a single exercise.",
          "The reading sets out the six operational capabilities most often tested in the last review cycle and the format regulators have accepted for the recovery-pathway narrative.",
        ],
      },
    ],
    relatedSlugs: ["capital-allocation-asymmetric-hurdles", "rate-cycle-and-capital-plans"],
  },
  {
    slug: "cost-to-serve-by-segment",
    series: "Reading",
    number: "№17",
    date: "June 2026",
    readTime: "11 min",
    title:
      "The customers the profit-and-loss says are best are usually not the best",
    excerpt:
      "Cost-to-serve reconstructions across twenty-six commercial portfolios — a pooled sample of workshop files closed since 2024 and earlier files the readers led in their prior practices — show a median forty-percent gap between reported gross margin by segment and gross margin adjusted for the true cost of serving each segment. The reading sets out the reconstruction protocol and names the three segments that shift most consistently.",
    authorRole: "Commercial practice, signed by the builder",
    body: [
      {
        paragraphs: [
          "Segment profitability is the metric most often used to steer commercial investment and least often reconstructed on a full cost-to-serve basis. Across the twenty-six portfolios reviewed for this reading — pooled from workshop files closed since 2024 and earlier files the readers led in their prior practices — the median gap between reported segment gross margin and cost-to-serve-adjusted segment gross margin was forty percent of the reported figure, with a directional flip in the segment ranking in twelve of the twenty-six.",
        ],
      },
      {
        heading: "The reconstruction protocol",
        paragraphs: [
          "The protocol reallocates five cost pools that standard segment reporting typically leaves centralised: pre-sales technical support, order management and exception handling, logistics complexity beyond the standard tariff, credit and collection effort, and post-sales service beyond the warranty envelope. Each pool is allocated on a documented driver reconciled to the general ledger, not to an activity-based allocation that has drifted from the underlying accounts.",
          "The protocol is described in full in the appendices and can be run inside a finance function without external support once the driver definitions have been agreed with the commercial leadership.",
        ],
      },
      {
        heading: "Three segments that shift consistently",
        paragraphs: [
          "Three segment archetypes shift most consistently. The first is the mid-tier account served through a channel partner: reported margin is often flattering because channel discount is captured but channel support is not. The second is the high-volume, low-price account served directly: reported margin is often flattering because logistics complexity is absorbed centrally. The third is the enterprise account with a bespoke commercial construct: reported margin is often understated because the internal cost of maintaining the construct is captured but the commercial upside is booked to a different line.",
        ],
      },
      {
        heading: "What the reconstruction does not fix",
        paragraphs: [
          "The reconstruction re-ranks segments; it does not, on its own, change commercial behaviour. Every portfolio that acted on the reconstruction paired it with a revised discount authority matrix and a revised commercial incentive plan. Portfolios that ran the reconstruction as a reporting exercise, without the two governance changes, showed no measurable margin improvement at twelve months.",
        ],
      },
    ],
    pullQuote:
      "The reconstruction re-ranks segments; it does not, on its own, change commercial behaviour.",
    relatedSlugs: ["pocket-price-drift", "margin-programmes-that-held"],
  },
];

export const getInsight = (slug: string) =>
  insights.find((i) => i.slug === slug);

// Development guard: fail loudly in the browser console if any entry violates
// the founding-year (2024) editorial rules. See `./validation.ts`.
import { assertInsightsValidInDev } from "./validation";
assertInsightsValidInDev(insights);