import { useEffect, useRef } from "react";

const stats = [
  {
    rank: "Remote",
    headline: "The workshop",
    body:
      "The workshop is a shared drive with two names on it, not an address. Nothing is left overnight on a machine that is not the workshop's, and nothing is forwarded outside the two names on the sheet.",
  },
  {
    rank: "Two names",
    headline: "Who is on the sheet",
    body:
      "Every file carries two names, printed on the first sheet. One builds. One argues against what the builder built, in writing, before the file closes. Neither is a junior. Both answer their own phone.",
  },
  {
    rank: "Four",
    headline: "Where the work fits",
    body:
      "Balance sheets that answer to somebody. Plants and networks. Software that outgrew the spreadsheet that started it. Care that meets a ledger. Anything outside these four is answered by return of email, more often turned down than opened.",
  },
  {
    rank: "On paper",
    headline: "What we hand back",
    body:
      "One rebuilt artifact. One page that names what would have to change for it to work. One phone number that answers for ninety days. Nothing verbal. Nothing off the record. No slide deck, no meeting we did not schedule.",
  },
];

const subNavLinks = [
  { label: "The workshop", href: "#about-firm" },
  { label: "Four facts", href: "#about-stats" },
  { label: "Three habits", href: "#about-pillars" },
];

const pillars = [
  {
    title: "Files open on Mondays. Nothing else.",
    description:
      "New files start at nine on a Monday, at the workshop, with the two names that will carry them. The date and the names go on the first sheet before anything else is written down. It is the one habit that has never moved.",
  },
  {
    title: "What the workshop turns down.",
    description:
      "Software procurements go elsewhere. So does anything on behalf of a fund that has already put a price on the asset. No vendor referral fees, no resale margin, no rebates. Anything the workshop cannot pick up cleanly is answered the same day, in one paragraph, by email.",
  },
  {
    title: "One page. One phone number. Done.",
    description:
      "Every file ends with one page that names what the workshop would move if the workshop had to move it, plus one phone number that answers for ninety days. If the page cannot be written honestly, the file does not close. The clock keeps running until it does.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-background overflow-hidden"
    >
      {/* Sub-nav strip — Accenture section pattern */}
      <div className="absolute top-0 left-0 right-0 bg-primary/95 text-primary-foreground border-b border-primary/40 z-10">
        <div className="px-6 lg:px-10 py-3 flex items-center justify-between gap-4 text-[12px]">
          <span className="font-semibold tracking-wide uppercase">
            The workshop
          </span>
          <nav className="hidden md:flex items-center gap-6">
            {subNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-85 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative px-6 lg:px-10 pt-12">
        {/* Page heading — Accenture editorial header */}
        <div id="about-firm" className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <h2 className="reveal opacity-0 text-display text-foreground text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
              A workshop of two. Kept small on purpose.
              <span className="inline-flex items-center justify-center align-middle ml-3 w-10 h-10 lg:w-12 lg:h-12 bg-primary text-primary-foreground translate-y-[-0.1em]">
                <ArrowUpRightIcon />
              </span>
            </h2>
            <p className="reveal delay-100 opacity-0 text-lg text-foreground/75 leading-relaxed max-w-2xl">
              Mosaic Conseil rebuilds one artifact at a time. A plan, a
              model, a pricing grid, a diligence file. Whatever arrives
              is taken apart on the bench, put back together against the
              invoice ledger, and returned as the same artifact, redrawn.
              Two names carry every file. Nobody travels for the first
              call.
            </p>
          </div>
        </div>

        {/* Section: By the numbers — "Awards & recognition" pattern */}
        <div id="about-stats" className="mb-24">
          <div className="mb-10">
            <h3 className="reveal opacity-0 text-display text-foreground text-3xl md:text-4xl mb-3">
              Four facts about the workshop
            </h3>
            <p className="reveal delay-100 opacity-0 text-foreground/70 text-base max-w-2xl">
              These four are the same on every file. The shortest
              description of the workshop that survives being written
              down.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {stats.map((s, i) => (
              <div
                key={s.headline}
                className={`reveal delay-${(i + 2) * 100} opacity-0 flex flex-col`}
              >
                {/* Hairline accent — rotates through brand palette */}
                <span
                  className={`block w-10 h-1 mb-4 ${
                    ["bg-primary", "bg-accent", "bg-secondary", "bg-[hsl(var(--teal-tile))]"][i % 4]
                  }`}
                />
                <p className="text-eyebrow text-foreground/55 mb-3">
                  {s.headline}
                </p>
                <div
                  className={`text-display text-4xl md:text-5xl mb-4 ${
                    ["text-foreground", "text-primary", "text-[hsl(var(--forest))]", "text-[hsl(var(--ochre))]"][i % 4]
                  }`}
                >
                  {s.rank}
                </div>
                <p className="text-sm text-foreground/65 leading-snug">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* See more expander row — Accenture pattern */}
          <div className="mt-14 border-t border-border">
            <button className="w-full py-6 flex items-center justify-between text-foreground hover:text-primary transition-colors">
              <span className="text-base font-semibold">Read the workshop note</span>
              <span className="text-2xl leading-none">+</span>
            </button>
          </div>
        </div>

        {/* Section: Pillars — kept, restyled to match */}
        <div id="about-pillars">
          <h3 className="reveal opacity-0 text-display text-foreground text-3xl md:text-4xl mb-10">
            Three habits the workshop keeps
          </h3>
          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal delay-${(i + 3) * 100} opacity-0 bg-background p-10 lg:p-12 group hover:bg-muted transition-colors`}
              >
                <div className="mb-6 grid grid-cols-2 gap-1 w-10 h-10">
                  <span className="bg-primary" />
                  <span className="bg-accent" />
                  <span className="bg-secondary" />
                  <span className="bg-[hsl(var(--cobalt-soft))]" />
                </div>
                <h4 className="text-display text-2xl text-foreground mb-4">
                  {p.title}
                </h4>
                <p className="text-foreground/70 leading-relaxed text-[15px]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Local arrow icon — keeps a single import light
const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export default About;
