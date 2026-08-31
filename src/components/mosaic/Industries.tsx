import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    name: "Banks and insurers",
    blurb:
      "Files that arrive here are usually about capital that has drifted away from the businesses earning it, or about a book that has been quietly repriced everywhere except in the plan. We read balance sheets, not personalities.",
    tag: "Practice since 2024",
  },
  {
    name: "Plants and networks",
    blurb:
      "The plant map has stopped matching the map of tariffs, and nobody wants to be the first to draw the new one. We read the network with a pencil, one node at a time, and we hand back a proposed order of moves that a plant manager can defend.",
    tag: "Practice since 2024",
  },
  {
    name: "Software that outgrew its file",
    blurb:
      "Retention has stopped being a single number, gross margin has become a conversation about hosting bills, and the product menu was written by four acquired companies. The file we open reads each of those three back to one page.",
    tag: "Practice since 2024",
  },
  {
    name: "Health, at the point of a decision",
    blurb:
      "Ten-year capital plans for hospital systems. Field-force plans for specialist launches. Payor books being rewritten around outcomes. We do not read on branded pharmaceutical pricing and we do not sit between payors and providers on rate. Both, on principle.",
    tag: "Practice since 2024",
  },
  {
    name: "Energy and what it now costs",
    blurb:
      "The order in which sites are decarbonised, the money that will be needed to do it, and the rate case that has to be defended in front of a regulator who has read the letter. Files are opened only where the plan is ready to be argued in writing.",
    tag: "Practice since 2024",
  },
  {
    name: "Consumer, one channel at a time",
    blurb:
      "The margin that is quietly leaving through a discount code, the retail estate that no longer earns its rent, the brand plan that is spread across five countries and three managers. We read one channel at a time, with an invoice in front of us.",
    tag: "Practice since 2024",
  },
  {
    name: "Public bodies, on questions of allocation",
    blurb:
      "Files opened only where the question is about where the money should go, how a structure should be reorganised, or whether a decision already drafted stands up to a rebuild. We do not read on procurement and we do not implement.",
    tag: "By exception",
  },
];

const Industries = () => {
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
      id="industries"
      ref={sectionRef}
      className="py-28 md:py-40 bg-muted relative"
    >
      <div className="px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <p className="reveal opacity-0 text-eyebrow text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              The rooms we read in
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal delay-100 opacity-0 text-display text-foreground text-5xl md:text-6xl lg:text-7xl mb-6">
              Seven kinds of room<span className="text-primary">.</span>
            </h2>
            <p className="reveal delay-200 opacity-0 text-lg text-foreground/70 max-w-2xl">
              These are the seven kinds of room the firm knows how to sit in
              without asking for a translator. In each one, a reader with
              ten years inside the business does the rebuild. Files
              from other kinds of room are opened once by a human before we
              answer.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {industries.map((ind, i) => (
            <a
              key={ind.name}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`reveal delay-${Math.min((i + 3) * 100, 700)} opacity-0 group relative bg-background p-8 lg:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden`}
            >
              {/* Top colored hairline — palette rotation */}
              <span
                aria-hidden
                className={`absolute top-0 left-0 h-1 w-12 transition-all duration-500 ease-out group-hover:w-full ${
                  [
                    "bg-primary",
                    "bg-secondary",
                    "bg-accent",
                    "bg-[hsl(var(--teal-tile))]",
                    "bg-[hsl(var(--forest))]",
                    "bg-[hsl(var(--cobalt-soft))]",
                    "bg-[hsl(var(--ochre))]",
                  ][i % 7]
                }`}
              />
              {/* Hover wash */}
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <span className="text-eyebrow text-foreground/50 group-hover:text-primary-foreground/80 transition-colors flex items-center gap-2">
                  <span className="text-display text-base text-foreground/35 group-hover:text-primary-foreground/60 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {ind.tag}
                </span>
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.5}
                  className="text-foreground/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-display text-2xl md:text-3xl text-foreground group-hover:text-primary-foreground transition-colors mb-4">
                  {ind.name}
                </h3>
                <p className="text-sm text-foreground/65 group-hover:text-primary-foreground/85 leading-relaxed transition-colors">
                  {ind.blurb}
                </p>
              </div>
            </a>
          ))}

          {/* Eighth tile — CTA */}
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="reveal delay-500 opacity-0 group relative bg-primary text-primary-foreground p-8 lg:p-10 min-h-[280px] flex flex-col justify-between text-left"
          >
            <span className="text-eyebrow opacity-80">A different room</span>
            <div>
              <h3 className="text-display text-2xl md:text-3xl mb-4">
                Your room is not on the list.
              </h3>
              <p className="text-sm opacity-90 mb-6">
                Write anyway. We read the letter, take it to the Monday
                meeting, and answer in one paragraph within three working days.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                Send the plan
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
