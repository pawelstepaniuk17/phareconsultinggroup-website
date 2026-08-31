import { useEffect, useRef } from "react";

const phases = [
  {
    number: "01",
    title: "The cover page",
    description:
      "A single sheet is drafted with the person who sent the draft. It names the decision, the room where it will be signed, the date by which the file must be closed, and the sentence the reader will have to write on the last page. Nothing is opened until this sheet is signed by both sides in ink.",
  },
  {
    number: "02",
    title: "The reading",
    description:
      "The draft is read line by line, out loud, by the one builder, one challenger. Every claim that carries weight is annotated with its source and its date. Where a claim rests on a source that cannot be verified inside the room, the annotation says so, and the claim is treated as unsupported until it is.",
  },
  {
    number: "03",
    title: "The disagreement",
    description:
      "The challenger writes the strongest possible argument against the draft, in three to eight pages, and files it in the same folder. This is not a devil's advocate exercise. If the argument survives the builder's response, the draft does not.",
  },
  {
    number: "04",
    title: "The last page",
    description:
      "The file closes with one sentence on the last page. It says what the reader would sign if the reader had to sign. It is dated. It carries the two names on the cover. The reader remains reachable by telephone for ninety days after the file is handed back, without further charge.",
  },
];

const principles = [
  {
    title: "Two names on the cover.",
    description:
      "One person writes. One person disagrees. Both names appear on the cover in ink, and both are reachable by telephone for the life of the file. If either name changes, the file is reopened and the cover is re-signed.",
  },
  {
    title: "The list of what we will not read.",
    description:
      "A written list of files we cannot read cleanly is maintained inside the room and refreshed on Monday morning. If a new item appears on that list mid-file, the person who sent the draft is told by return of email, in one paragraph, the same day.",
  },
  {
    title: "One price, one page, one signature.",
    description:
      "The price is quoted on one page, against the cover sheet, and does not move once the file is opened. We do not bill by the hour. We do not run standing accounts. If the file grows, the cover is re-signed at a new price before the extra pages are read.",
  },
  {
    title: "The folder stays in the room.",
    description:
      "Every file is held in beige card, in the room, for seven years. The person who sent the draft may request the folder at any time and receive it by hand or by tracked post. It is never scanned to a shared drive and never sent by attachment.",
  },
];

const Approach = () => {
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
      id="approach"
      ref={sectionRef}
      className="py-28 md:py-40 bg-background relative"
    >
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <p className="reveal opacity-0 text-eyebrow text-primary mb-6 flex items-center gap-3">
              <span aria-hidden className="inline-flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                <span className="inline-block w-6 h-0.5 bg-primary" />
              </span>
              How the file moves
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal delay-100 opacity-0 text-display text-foreground text-5xl md:text-6xl lg:text-7xl mb-6">
              A file, from Monday to the last page<span className="text-primary">.</span>
            </h2>
            <p className="reveal delay-200 opacity-0 text-lg text-foreground/70 max-w-2xl">
              Four steps, the same on every file. A cover page. A reading.
              A written disagreement. A last page. Nothing more elaborate,
              and nothing less. If a step is skipped, the file is not
              handed back.
            </p>
          </div>
        </div>

        {/* Phases — vertical editorial */}
        <div className="border-t border-border mb-32">
          {phases.map((p, i) => (
            <div
              key={p.number}
              className={`reveal delay-${Math.min((i + 2) * 100, 500)} opacity-0 grid lg:grid-cols-12 gap-8 py-12 border-b border-border group hover:bg-muted transition-colors -mx-6 lg:-mx-10 px-6 lg:px-10`}
            >
              <div className="lg:col-span-3 flex items-baseline gap-3">
                <span className="text-display text-foreground/15 group-hover:text-primary transition-colors text-7xl lg:text-8xl">
                  {p.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h4 className="text-display text-2xl md:text-3xl text-foreground">
                  {p.title}
                </h4>
              </div>
              <div className="lg:col-span-5">
                <p className="text-foreground/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Principles — inverted dark band, full-bleed rhythm break */}
      <div className="relative bg-ink text-cream mt-8">
        {/* mosaic accent strip across the top */}
        <div aria-hidden className="absolute top-0 left-0 right-0 h-1 flex">
          <span className="flex-1 bg-primary" />
          <span className="flex-1 bg-secondary" />
          <span className="flex-1 bg-accent" />
          <span className="flex-1 bg-cream" />
        </div>
        <div className="px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <p className="reveal opacity-0 text-eyebrow text-accent mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                Four things we keep to
              </p>
            </div>
            <div className="lg:col-span-8">
              <h3 className="reveal delay-100 opacity-0 text-display text-cream text-4xl md:text-5xl lg:text-6xl">
                Four habits we do not break, <br />
                on any file<span className="text-accent">.</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-cream/10 border border-cream/10">
            {principles.map((pr, i) => (
              <div
                key={pr.title}
                className={`reveal delay-${(i + 2) * 100} opacity-0 bg-ink p-10 lg:p-12 group hover:bg-cream/[0.03] transition-colors`}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-display text-accent text-3xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-display text-2xl md:text-3xl text-cream">
                    {pr.title}
                  </h4>
                </div>
                <p className="text-cream/70 leading-relaxed pl-14">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
