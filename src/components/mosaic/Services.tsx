import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const services = [
  {
    title: "The plan, read again.",
    description:
      "Eight weeks. Your three-year plan comes into the room. It leaves rewritten on the pages where the world moved on without it.",
    challenges: [
      "A plan that was signed twelve months ago, before the year everyone had",
      "Three business units telling three different versions of the same intent",
      "Money still moving on lines whose reason nobody in the room can defend",
      "A board question that keeps coming back because nobody wrote the answer down",
    ],
    triggers: [
      "A new chief executive, in the ninetieth day",
      "The next planning cycle, twelve weeks from the board vote",
      "A serious piece of paper from a shareholder who has stopped waiting",
      "A deal on the table that would move fifteen percent of the balance sheet",
    ],
    approach:
      "We rebuild the plan on a single sheet, in ink, as a tree of the assumptions that hold it up. Each assumption is checked against evidence we can date. The sheet is handed back with the branches that no longer bear weight crossed through, and a written argument for what should replace them.",
    outcomes: [
      "A one-sheet tree of the plan, with dead branches crossed through",
      "A short list of the assumptions that need retesting, and by when",
      "A written argument against the plan, three to eight pages, signed",
      "A telephone number that answers for ninety days after the file closes",
    ],
  },
  {
    title: "The market, before you walk in.",
    description:
      "Twelve weeks. Three to five places you might go. All read to the same shape, so the room can finally compare them without changing subject.",
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
      "Every candidate is read to the same four questions: who buys, at what unit cost of reaching them, against how many others already there, and at what capital cost per pound of revenue. We do not answer more than four. The comparison is on one sheet, with the thresholds that would make each answer wrong.",
    outcomes: [
      "A single sheet ranking every candidate against the same four questions",
      "A written line, for each candidate, saying at what point you should stop",
      "A folder in beige card containing every source used, dated",
      "A quarterly telephone call for a year, to test the sheet against reality",
    ],
  },
  {
    title: "The org chart, before it is redrawn.",
    description:
      "Sixteen weeks. The chart on the wall is read against the chart the work actually follows. The two are rarely the same.",
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
      "We follow forty real decisions through the current chart, with a stopwatch and a pen, and record where each one waits. The redesign is drawn to move the waits, not the boxes. It comes back on paper, with the first three moves numbered and dated.",
    outcomes: [
      "A drawing of the chart the work actually follows today",
      "A second drawing, with the waits moved and the boxes as few as possible",
      "Three moves, numbered one to three, with a date against each",
      "A monthly reading of the stopwatch, for a year, from the same room",
    ],
  },
  {
    title: "The money, read line by line.",
    description:
      "Ten weeks. Every business under the roof is restated on the same page, in the same currency of assumption, so the money can be moved without a private argument.",
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
      "Every business is put on one page under the same headings, normalised for shared cost. A different hurdle is drawn for each, with the reason written next to it. The reader recommends move, hold, mend or sell for every business, in ink, and defends each in front of the finance committee.",
    outcomes: [
      "One page per business, on the same headings, in the same currency",
      "A different hurdle for each, with the reason written next to it",
      "A short list of businesses proposed for sale, mend, or wind-down",
      "A one-page template for the quarterly review, to be used unchanged",
    ],
  },
  {
    title: "The pricing grid, before it ships.",
    description:
      "Fourteen weeks. The list price, the price actually paid, and the space between them, read invoice by invoice until the space has an owner.",
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
      "We rebuild the price paid, by customer and by product, from the invoice line up, reconciled to the ledger. We move a handful of prices on real customers, with permission, and read the response. The sheet comes back with a written rule for who may give away how much, and a redrawn compensation plan on top of it.",
    outcomes: [
      "A one-page sheet of what is actually paid, refreshable each month",
      "A written rule for who may discount, up to what, without asking",
      "A compensation plan that pays for margin, not for movement",
      "A quarterly reading of realised price, from the same invoices, for a year",
    ],
  },
  {
    title: "The cost note, before it becomes a programme.",
    description:
      "Twenty weeks. A cost note designed to still be visible in the accounts three years after the launch dinner.",
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
      "The number is built from the floor up, by procurement, by site, by role, by process, with a confidence letter (A, B or C) against each line. The number is then handed to named people with a Monday variance reading and a written rule for what may be reinvested. The finance director signs the rule before the first pound moves.",
    outcomes: [
      "A number, built from the floor up, with a confidence letter per line",
      "A named person for every line, with a Monday reading in their calendar",
      "A written reinvestment rule, signed by the finance director",
      "A reconciliation into the accounts, audited at year end, in ink",
    ],
  },
  {
    title: "The deal, forty-eight hours before signature.",
    description:
      "Six to ten weeks. The reading arrives on the table two days before the committee. It says go, walk, or come back with a lower number.",
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
      "We read alongside the four diligence streams, not on top of them, and hold one file that reconciles them daily. Forty-eight hours before the committee, the file is closed with one sentence. The sentence says one of three things: sign, walk, or come back with a lower number. It is dated and signed by one builder, one challenger.",
    outcomes: [
      "One page, forty-eight hours before the committee, with one sentence on it",
      "A rebuild of the synergy number, with the ones we would not defend crossed out",
      "A list of the fifty people the deal actually depends on, and where they will be in a year",
      "A one-page monitoring sheet for the first four quarters after close",
    ],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openService, setOpenService] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-up");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-28 md:py-40 bg-background relative"
    >
      <div className="px-6 lg:px-10">
        {/* Mosaic accent strip — promotes the section */}
        <div className="reveal opacity-0 mb-12 flex h-2 w-40 overflow-hidden">
          <span className="flex-1 bg-primary" />
          <span className="flex-1 bg-secondary" />
          <span className="flex-1 bg-accent" />
          <span className="flex-1 bg-[hsl(var(--teal-tile))]" />
          <span className="flex-1 bg-[hsl(var(--cobalt-soft))]" />
        </div>
        {/* Header row */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <p className="reveal opacity-0 text-eyebrow text-primary mb-6 flex items-center gap-3">
              <span aria-hidden className="inline-flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                <span className="inline-block w-6 h-0.5 bg-primary" />
              </span>
              Seven ways a file is opened
            </p>
            <p className="reveal delay-100 opacity-0 mt-8 text-sm text-foreground/55 leading-relaxed">
              Each row is a shape of file the room already knows how to open.
              The date, the price, and the sentence that has to be written
              on the last page are the same on every one. Tap a row to open it.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal delay-100 opacity-0 text-display text-foreground text-5xl md:text-6xl lg:text-7xl mb-6">
              Seven files we know <br />
              how to open<span className="text-primary">.</span>
            </h2>
            <p className="reveal delay-200 opacity-0 text-lg text-foreground/70 max-w-2xl">
              These are the seven shapes of file we open on a Monday
              without a second telephone call. Anything outside them is
              opened once by a human before we answer, and is more often
              declined by return of email than accepted.
            </p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="reveal delay-300 opacity-0 border-t-2 border-foreground">
          {services.map((service, index) => {
            const isOpen = openService === index;
            const swatch = [
              "bg-primary",
              "bg-secondary",
              "bg-accent",
              "bg-[hsl(var(--teal-tile))]",
              "bg-[hsl(var(--cobalt-soft))]",
              "bg-[hsl(var(--forest))]",
              "bg-[hsl(var(--ochre))]",
            ][index % 7];
            return (
              <div
                key={service.title}
                className="border-b border-border group/item relative"
              >
                {/* Colored vertical mosaic tile that grows on hover/open */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-full w-1 ${swatch} transition-all duration-500 ease-out ${
                    isOpen ? "w-2 opacity-100" : "opacity-60 group-hover/item:opacity-100 group-hover/item:w-2"
                  }`}
                />
                <button
                  onClick={() => setOpenService(isOpen ? null : index)}
                  className="w-full py-8 md:py-10 pl-6 md:pl-8 flex items-start gap-6 text-left"
                >
                  <span className="text-display text-3xl md:text-4xl text-foreground/25 pt-1 w-16 shrink-0 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-display text-3xl md:text-4xl lg:text-5xl text-foreground group-hover/item:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-foreground/65 max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground transition-all ${
                      isOpen
                        ? "bg-primary text-primary-foreground border-primary rotate-180"
                        : "group-hover/item:border-primary group-hover/item:text-primary"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-12"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-10 pl-0 md:pl-[4.5rem] pr-0 md:pr-20">
                      <div className="space-y-8">
                        <div>
                          <p className="text-eyebrow text-primary mb-4">
                            What the room usually looks like
                          </p>
                          <ul className="space-y-3">
                            {service.challenges.map((c, i) => (
                              <li
                                key={i}
                                className="text-sm text-foreground/75 flex items-start gap-3"
                              >
                                <span className="text-primary mt-0.5">·</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-eyebrow text-primary mb-4">
                            What tends to make you write to the workshop
                          </p>
                          <ul className="space-y-3">
                            {service.triggers.map((t, i) => (
                              <li
                                key={i}
                                className="text-sm text-foreground/75 flex items-start gap-3"
                              >
                                <span className="text-primary mt-0.5">·</span>
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <p className="text-eyebrow text-primary mb-4">
                            How the reading is done
                          </p>
                          <p className="text-sm text-foreground/75 leading-relaxed">
                            {service.approach}
                          </p>
                        </div>
                        <div>
                          <p className="text-eyebrow text-primary mb-4">
                            What leaves the room
                          </p>
                          <ul className="space-y-3">
                            {service.outcomes.map((o, i) => (
                              <li
                                key={i}
                                className="text-sm text-foreground/75 flex items-start gap-3"
                              >
                                <span className="text-primary mt-0.5">·</span>
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() =>
                            document
                              .querySelector("#contact")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          Request the engagement brief
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
