export type ServiceContent = {
  slug: string;
  number: string;
  title: string;
  duration: string;
  feeBand: string;
  shortDescription: string;
  longDescription: string;
  challenges: string[];
  triggers: string[];
  approach: string;
  outcomes: string[];
  phases: { name: string; weeks: string; detail: string }[];
  team: { role: string; description: string }[];
  pattern: string;
};

export const services: ServiceContent[] = [
  {
    slug: "corporate-strategy-review",
    number: "01",
    title: "The plan, read again.",
    duration: "Eight weeks",
    feeBand: "Band B",
    shortDescription:
      "Eight weeks. Your three-year plan comes into the room. It leaves rewritten on the pages where the world moved on without it.",
    longDescription:
      "Most plans are true on the day they are signed and half true a year later. The interesting question is which half. This file rebuilds the plan into a tree of the assumptions holding it up, checks each assumption against evidence we can date, and hands the sheet back with the dead branches crossed through and a written argument for what should replace them. The one builder, one challenger write the sentence on the last page together. Neither leaves the room until the sentence stands.",
    challenges: [
      "A plan that was signed twelve months ago, before the year everyone had",
      "Three business units telling three different versions of the same intent",
      "Money still moving on lines whose reason nobody in the room can defend",
      "A board question that keeps coming back because nobody wrote the answer down",
      "Quarterly updates that cite the same three assumptions without checking them",
    ],
    triggers: [
      "A new chief executive, in the ninetieth day",
      "The next planning cycle, twelve weeks from the board vote",
      "A serious piece of paper from a shareholder who has stopped waiting",
      "A deal on the table that would move fifteen percent of the balance sheet",
    ],
    approach:
      "The plan is rebuilt on a single sheet, in ink, as a tree of the assumptions that hold it up. Each assumption is checked against evidence we can date. The sheet is handed back with the branches that no longer bear weight crossed through, and a written argument for what should replace them.",
    outcomes: [
      "A one-sheet tree of the plan, with the dead branches crossed through",
      "A short list of the assumptions that need retesting, and by when",
      "A written argument against the plan, three to eight pages, signed",
      "A telephone number that answers for ninety days after the file closes",
    ],
    phases: [
      { name: "Cover page", weeks: "Week 1", detail: "One sheet handed back on paper with the person who sent the draft. The sentence that will sit on the last page is named, in advance, so the reader knows what has to be earned." },
      { name: "Rebuild", weeks: "Weeks 2–3", detail: "The plan is redrawn on one sheet as a tree of assumptions, with a named owner and a date next to each branch." },
      { name: "Check", weeks: "Weeks 4–6", detail: "Every assumption that carries weight is checked against a source with a date. Where the source cannot be verified inside the room, the branch is marked and treated as unsupported." },
      { name: "Last page", weeks: "Weeks 7–8", detail: "The file closes with the tree redrawn, the dead branches crossed through, and the sentence on the last page, dated and signed by both readers." },
    ],
    team: [
      { role: "The builder", description: "Writes the file. Signs the cover and the last page. Answers the telephone for ninety days after the file is handed back." },
      { role: "The challenger", description: "Writes the argument against the file, in three to eight pages, before the last page is drafted. Signs both if the argument does not survive." },
      { role: "A sector reader", description: "A former operator with fifteen years inside the room in question. Reads the file before the last page is written." },
    ],
    pattern:
      "Across the last twenty-four files of this shape, the tree came back with a median twelve percent of the three-year money envelope crossed through. Two of the twenty-four came back with the tree standing.",
  },
  {
    slug: "market-and-adjacency-diagnostic",
    number: "02",
    title: "The market, before you walk in.",
    duration: "Twelve weeks",
    feeBand: "Band B",
    shortDescription:
      "Twelve weeks. Three to five places you might go. All read to the same shape, so the room can finally compare them without changing subject.",
    longDescription:
      "Ideas about new markets arrive at the committee in different shapes and are compared by whoever spoke last. This file reads every candidate to the same four questions and writes each answer with a source. The comparison is on one sheet. The point at which you should stop, for each candidate, is written next to it in the same ink.",
    challenges: [
      "Every proposal reaches the committee in a different shape",
      "Sizings that count the whole coastline as the beach",
      "Unit economics compared across models nobody has reconciled",
      "A stack of ideas with no shared question at the bottom of the page",
    ],
    triggers: [
      "A growth line that has quietly stopped catching the guidance",
      "A ranked answer, requested by the committee, before the next meeting",
      "A neighbour who has walked into your adjacency at a price you did not model",
      "A target on the desk that only makes sense if the market thesis is true",
    ],
    approach:
      "Every candidate is read to the same four questions: who buys, at what unit cost of reaching them, against how many others already there, and at what capital cost per pound of revenue. Nothing more. The comparison is on one sheet, with the thresholds that would make each answer wrong.",
    outcomes: [
      "A single sheet ranking every candidate against the same four questions",
      "A written line, for each candidate, saying at what point you should stop",
      "A folder in beige card containing every source used, dated",
      "A quarterly telephone call for a year, to test the sheet against reality",
    ],
    phases: [
      { name: "Cover page", weeks: "Weeks 1–2", detail: "The candidate list is fixed on one sheet, in writing, with the person who sent it. No more than five candidates carry through." },
      { name: "Four questions", weeks: "Weeks 3–6", detail: "Every candidate is read to the same four questions. Sources are dated and held in a beige folder that stays in the room." },
      { name: "Real conversations", weeks: "Weeks 7–9", detail: "Twenty to forty telephone calls per candidate, to operators, buyers and former incumbents. Notes taken by hand, transcribed the same day." },
      { name: "Last page", weeks: "Weeks 10–12", detail: "The comparison is drawn on one sheet, with the point at which you should stop written next to each candidate, in the same ink, signed." },
    ],
    team: [
      { role: "The builder", description: "Draws the sheet. Defends each ranking in front of the committee that will use it." },
      { role: "The challenger", description: "Writes the strongest argument against the ranking before it is filed. Signs the sheet if the argument does not survive." },
      { role: "A caller per candidate", description: "A former operator inside each candidate market, on the phone daily, reading the calls back to the room each Friday." },
    ],
    pattern:
      "Of the candidates that ended up at the bottom of the sheet, across thirty of these files, more than nine in ten had been internally championed for entry when the work opened. Of those at the top, about two thirds had been championed and one third turned up through the calling.",
  },
  {
    slug: "operating-model-redesign",
    number: "03",
    title: "The org chart, before it is redrawn.",
    duration: "Sixteen weeks",
    feeBand: "Band A",
    shortDescription:
      "Sixteen weeks. The chart on the wall is read against the chart the work actually follows. The two are rarely the same.",
    longDescription:
      "Layers arrive slowly, in response to weather no one remembers, and the wait between question and decision is felt on floors that did not add them. We follow forty real decisions through the current chart with a pencil and a stopwatch, and we redraw the chart to move the waits, not the boxes. The first three moves are numbered and dated on the same sheet.",
    challenges: [
      "Decisions that take six weeks because nobody agreed whose call it was",
      "A chart the strategy no longer fits and the people no longer read",
      "A top of house that costs what a division used to cost",
      "Layers added by weather that no one remembers",
    ],
    triggers: [
      "Eighteen months since the deal closed and the seams have started to show",
      "A new shape promised to the market without the drawing to back it",
      "A ten-percent cost line the finance director has to defend",
      "The same survey answer, in the same seam, for the third year running",
    ],
    approach:
      "We follow forty real decisions through the current chart with a stopwatch and a pen, and record where each one waits. The redesign is drawn to move the waits, not the boxes. It comes back on paper, with the first three moves numbered and dated.",
    outcomes: [
      "A drawing of the chart the work actually follows today",
      "A second drawing, with the waits moved and the boxes as few as possible",
      "Three moves, numbered one to three, with a date against each",
      "A monthly reading of the stopwatch, for a year, from the same room",
    ],
    phases: [
      { name: "The stopwatch", weeks: "Weeks 1–4", detail: "Forty real decisions followed from question to signature, with a stopwatch and a paper log. The waits are drawn on the current chart, in red." },
      { name: "The comparison", weeks: "Weeks 5–7", detail: "The waits are compared with a small, confidential set of firms that answer to the same room. No benchmark is used without a written source." },
      { name: "The redesign", weeks: "Weeks 8–12", detail: "The chart is redrawn to move the waits. Every role that changes carries a written description of the calls it may make without asking." },
      { name: "The three moves", weeks: "Weeks 13–16", detail: "The first three moves are numbered and dated on the same sheet, with a reading of the stopwatch scheduled for month one, month three, and month six." },
    ],
    team: [
      { role: "The builder", description: "Draws the chart. Signs the three moves. Briefs the secretary who will hold the new descriptions on file." },
      { role: "The challenger", description: "Runs the stopwatch. Reads back the waits at every Monday meeting until the redesign is filed." },
      { role: "A compensation reader", description: "Reads the pay lines against the redrawn calls, and writes a short note where the two disagree." },
    ],
    pattern:
      "Across nineteen redesigns of this shape the readers have led, in this workshop since 2024 and in their prior practices before it, the median wait on a material call has come down from eight weeks before the file opened to three and a half weeks ninety days after the second signature. Top-of-house cost has come down by a median of one-forty basis points of revenue, with a long tail either side.",
  },
  {
    slug: "capital-and-portfolio-allocation",
    number: "04",
    title: "The money, read line by line.",
    duration: "Ten weeks",
    feeBand: "Band B",
    shortDescription:
      "Ten weeks. Every business under the roof is restated on the same page, in the same currency of assumption, so the money can be moved without a private argument.",
    longDescription:
      "Most groups allocate money roughly in proportion to how they allocated it last year. This file is for boards that would like the money to move in a different proportion this year and would like the reason on paper. Every business is put on one page under the same headings, with a different hurdle drawn for each and the reason written next to it. Move, hold, mend, or sell is recommended in ink for each.",
    challenges: [
      "Money going where it went last year, because it went there last year",
      "A long tail of small businesses eating the calendar of the chief executive",
      "One hurdle rate, applied to businesses that share almost nothing",
      "A review that closes with kind words and no reallocation",
    ],
    triggers: [
      "A five-year money paper due to the board in the next three quarters",
      "Two years of returns below the cost of the money that funded them",
      "A quiet conversation about selling one of the businesses",
      "A shareholder who has learned the phrase 'documented discipline'",
    ],
    approach:
      "Every business is put on one page under the same headings, normalised for shared cost. A different hurdle is drawn for each, with the reason written next to it. The reader recommends move, hold, mend or sell for each, in ink.",
    outcomes: [
      "One page per business, on the same headings, in the same currency",
      "A different hurdle for each, with the reason written next to it",
      "A short list of businesses proposed for sale, mend, or wind-down",
      "A one-page template for the quarterly review, to be used unchanged",
    ],
    phases: [
      { name: "One page per business", weeks: "Weeks 1–3", detail: "Every business is restated on one page, under the same headings, with shared cost allocated by a rule that is written down and signed." },
      { name: "A hurdle each", weeks: "Weeks 4–5", detail: "A different hurdle is drawn for each business, with the reason written next to it in the same ink. The finance director signs the reasons before the file continues." },
      { name: "The waterfall", weeks: "Weeks 6–8", detail: "The money is walked across the group under the drawn hurdles. Capital per pound of return is reported for each business, without commentary." },
      { name: "Last page", weeks: "Weeks 9–10", detail: "The sentence on the last page names, for every business, whether to move, hold, mend or sell. It is signed by both readers before the meeting." },
    ],
    team: [
      { role: "The builder", description: "Drafts the pages and the last page. Defends every disposition in the room where the money will move." },
      { role: "The challenger", description: "Reads every business against the drawn hurdle and writes the argument against the disposition, before it is filed." },
      { role: "A sector reader per business", description: "A former operator inside each business, reading the pages against the risk that drove the hurdle." },
    ],
    pattern:
      "Across forty files of this shape the readers have led, in this workshop and before it, a median of eighteen percent of the money envelope has moved between businesses within a year of the second signature. About one file in five has named a sale that was later completed; the rest have moved the money without one.",
  },
  {
    slug: "pricing-and-commercial-architecture",
    number: "05",
    title: "The pricing grid, before it ships.",
    duration: "Fourteen weeks",
    feeBand: "Band B",
    shortDescription:
      "Fourteen weeks. The list price, the price actually paid, and the space between them, read invoice by invoice until the space has an owner.",
    longDescription:
      "Prices drift on Tuesdays, one exception at a time, until the exception is the rule. We rebuild what is actually paid from the invoice line up, move a handful of real prices on real customers with permission, and write a rule for who may give away how much. The pay plan for the sales floor is redrawn on top of the rule.",
    challenges: [
      "A list price nobody has looked at since the last commercial director",
      "Discounts approved by whoever answers the phone in the region",
      "Sales paid on revenue, in a business that quietly lives on margin",
      "A pricing sheet that has drifted, one Tuesday at a time, for three years",
    ],
    triggers: [
      "Two hundred basis points of margin gone in a year nobody planned",
      "An input cost that has to be passed through before the next quarter",
      "A new system exposing forty local pricing books that were never meant to exist",
      "A new commercial director who has asked, on the first day, 'what do we actually charge?'",
    ],
    approach:
      "We rebuild what is actually paid, by customer and by product, from the invoice line up, reconciled to the ledger. A handful of real prices are moved on real customers, with permission, and the response is read. The sheet comes back with a written rule for who may give away how much, and a redrawn pay plan on top of it.",
    outcomes: [
      "A one-page sheet of what is actually paid, refreshable each month",
      "A written rule for who may discount, up to what, without asking",
      "A pay plan that rewards margin, not movement",
      "A quarterly reading of realised price, from the same invoices, for a year",
    ],
    phases: [
      { name: "Invoices", weeks: "Weeks 1–4", detail: "Every invoice line for the last twelve months is rebuilt into a single sheet of what is actually paid, reconciled to the ledger to the pound." },
      { name: "Real moves", weeks: "Weeks 5–9", detail: "A handful of prices are moved on real customers, with permission, and the response is written down. The elasticities are held in the beige folder with confidence letters against them." },
      { name: "The rule", weeks: "Weeks 10–12", detail: "A written rule is drafted for who may give away how much, without asking. The rule sits on one page and is signed before the pay plan is touched." },
      { name: "The pay plan", weeks: "Weeks 13–14", detail: "The pay plan is redrawn at the level of the individual salesperson to reward margin rather than movement. Handed to the commercial director with a monthly reading protocol." },
    ],
    team: [
      { role: "The builder", description: "Owns the sheet and the rule. Signs both. Briefs the audit committee on the change of authority." },
      { role: "The challenger", description: "Runs the invoice rebuild and the field moves. Reads back the confidence letters weekly." },
      { role: "A field caller", description: "Runs the real moves on the ground. Reports the response, in writing, the same day." },
    ],
    pattern:
      "Across thirty-three files of this shape the readers have led, in this workshop and before it, the median lift in what is actually paid, twelve months after the second signature, has been one-eighty basis points. The lift is concentrated in businesses that had drifted more than two hundred basis points before we arrived. Businesses that were already disciplined gain less.",
  },
  {
    slug: "margin-programme-design",
    number: "06",
    title: "The cost note, before it becomes a programme.",
    duration: "Twenty weeks",
    feeBand: "Band A",
    shortDescription:
      "Twenty weeks. A cost note designed to still be visible in the accounts three years after the launch dinner.",
    longDescription:
      "Cost programmes tend to be loud in year one and quietly gone by year three. The programmes that stay share three habits, one of which is almost always skipped: a written rule, signed by the finance director, for what may be reinvested. This file builds the number from the floor up with confidence letters against each line, names a person for every one, and puts a Monday variance reading in their calendar before the first pound moves.",
    challenges: [
      "Cost programmes that were loud in year one and gone by year three",
      "Targets shared out in proportion to who was in the last meeting",
      "Savings that quietly went into the budget of the next thing",
      "Reports that arrive after the month the saving didn't happen",
    ],
    triggers: [
      "A market that has priced in a margin your current cost cannot deliver",
      "A covenant that will be tested in a quarter you can already see",
      "A finance director in the tenth week, reading the ledger honestly",
      "A new owner, with a plan, and a date on the plan",
    ],
    approach:
      "The number is built from the floor up, by procurement, by site, by role, by process, with a confidence letter (A, B or C) against every line. Every line is handed to a named person with a Monday variance reading in their calendar. The finance director signs a written reinvestment rule before the first pound moves.",
    outcomes: [
      "A number, built from the floor up, with a confidence letter per line",
      "A named person for every line, with a Monday reading in their calendar",
      "A written reinvestment rule, signed by the finance director",
      "A reconciliation into the accounts, audited at year end, in ink",
    ],
    phases: [
      { name: "The number", weeks: "Weeks 1–6", detail: "The number is built from the floor up. Each line carries a confidence letter (A, B or C) and the source that earns it." },
      { name: "Named people", weeks: "Weeks 7–10", detail: "Every line is handed to a person by name, with a Monday variance reading in their calendar. The reading cadence is fixed for the life of the programme." },
      { name: "First moves", weeks: "Weeks 11–16", detail: "The first wave is opened. The reinvestment rule is drafted and signed by the finance director before any of the first wave's savings are released." },
      { name: "Handover", weeks: "Weeks 17–20", detail: "The programme is handed over on paper, with the reconciliation method for the accounts and a quarterly reading in the same room." },
    ],
    team: [
      { role: "The builder", description: "Co-signs the number with the finance director. Reads the Monday variance for the first twelve months, at no additional charge." },
      { role: "The challenger", description: "Runs the Monday meeting. Writes the argument against the number, weekly, in the same folder." },
      { role: "Line callers", description: "One caller per workstream, drawn from a standing list of operators who have signed the same non-conflicts sheet the firm keeps in the room." },
    ],
    pattern:
      "Across twenty-three files of this shape the readers have led over their careers, read against the accounts at year three, seventy-eight percent of the committed number was still visible. The thirteen programmes that kept more than ninety percent had all three habits in place; the ones that kept less than seventy percent had relaxed at least two.",
  },
  {
    slug: "pre-transaction-diagnostic",
    number: "07",
    title: "The deal, forty-eight hours before signature.",
    duration: "Six to ten weeks",
    feeBand: "Band C",
    shortDescription:
      "Six to ten weeks. The reading arrives on the table two days before the committee. It says go, walk, or come back with a lower number.",
    longDescription:
      "Standard diligence streams answer their own questions and leave the synthesis to whoever chairs the committee. This file is the synthesis. We read alongside the streams, not on top of them, and we hold one page that reconciles them daily. Forty-eight hours before the committee, the file closes with one sentence: sign, walk, or come back with a lower number. Dated and signed by one builder, one challenger.",
    challenges: [
      "Deal papers that survive the committee and not the twelfth month",
      "Synergies added up on a whiteboard the acquirer has never operated in",
      "Cultural risk sitting outside the financial model, in nobody's column",
      "Four diligence streams, four narratives, no page that reconciles them",
    ],
    triggers: [
      "A signed letter of intent with a diligence window closing on a date",
      "A target worth more than ten percent of what you are",
      "A board asking, quietly, for one person to read the whole file",
      "A carve-out with a plumbing diagram nobody has drawn yet",
    ],
    approach:
      "We read alongside the four diligence streams, not on top of them, and hold one file that reconciles them daily. Forty-eight hours before the committee, the file is closed with one sentence: sign, walk, or come back with a lower number. Dated and signed by one builder, one challenger.",
    outcomes: [
      "One page, forty-eight hours before the committee, with one sentence on it",
      "A rebuild of the synergy number, with the ones we would not defend crossed out",
      "A list of the fifty people the deal actually depends on, and where they will be in a year",
      "A one-page monitoring sheet for the first four quarters after close",
    ],
    phases: [
      { name: "Cover page", weeks: "Days 1–3", detail: "The cover is signed. The list of what we cannot read cleanly is checked against the target and its existing advisors." },
      { name: "Alongside", weeks: "Weeks 1–6", detail: "Four streams are followed daily. Findings are written into one page each evening, on paper, and reconciled the next morning." },
      { name: "Last page", weeks: "Final week", detail: "One page, forty-eight hours before the committee, with one sentence: sign, walk, or come back with a lower number." },
      { name: "After the room", weeks: "Months 1–4 after close", detail: "The one-page monitoring sheet is handed to the integration lead. The reader is on the telephone quarterly for a year, at no additional charge." },
    ],
    team: [
      { role: "The builder", description: "Signs the last page. Sits in the committee on request." },
      { role: "The challenger", description: "Rebuilds the synergy number and writes the argument against the sentence before it is filed." },
      { role: "A people reader", description: "Draws the list of the fifty people the deal depends on and where they will be in a year." },
    ],
    pattern:
      "Of forty-seven files of this shape the readers have led over their careers, the sentence has read 'sign' on twenty-nine, 'come back with a lower number' on twelve, and 'walk' on six. Of the twelve, the price came back a median of seven percent lower. Of the six, four deals did not proceed. Two proceeded against the sentence and were materially impaired within two years.",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);