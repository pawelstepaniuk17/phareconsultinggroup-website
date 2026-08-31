import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SchematicMark from "@/components/mosaic/SchematicMark";
import heroWorkshop from "@/assets/hero-workshop.png";
import cardStrategy from "@/assets/editorial-plan.png";
import cardPortfolio from "@/assets/editorial-model.png";
import cardPricing from "@/assets/editorial-failure.png";
import cardMargin from "@/assets/editorial-call.png";

const editorialCards = [
  {
    eyebrow: "The plan",
    title: "Your three-year plan, rebuilt against the month you actually had.",
    image: cardStrategy,
    href: "#services",
  },
  {
    eyebrow: "The model",
    title: "The forecast, redrawn with the load-bearing assumption reversed.",
    image: cardPortfolio,
    href: "#services",
  },
  {
    eyebrow: "The failure sheet",
    title: "Five ways this could miss the number, each on one line.",
    image: cardPricing,
    href: "#services",
  },
  {
    eyebrow: "The missing call",
    title: "The one phone call the deck has been written around, not made.",
    image: cardMargin,
    href: "#services",
  },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background pt-32 pb-12 grain"
    >
      {/* Editorial cover — subtle top band, washed into the bright canvas */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[92%] pointer-events-none">
        <img
          src={heroWorkshop}
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.16]"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        {/* Light gradient scrim for text readability on paper */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.82) 50%, hsl(var(--background)) 100%)",
          }}
        />
      </div>

      {/* Soft, single teal wash — quiet backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 55% at 85% 0%, hsl(var(--primary) / 0.10), transparent 60%)",
        }}
      />

      {/* Massive editorial headline with mosaic tile accent */}
      <div className="relative z-10 px-6 lg:px-10 pt-12 lg:pt-20 grid lg:grid-cols-12 gap-8 items-start">
        <div className="reveal opacity-0 lg:col-span-8">
          {/* Brand mark + schematic circuit composition (no text) */}
          <div className="flex items-start gap-8">
            <SchematicMark
              title="Phare Consulting Group"
              className="w-12 h-12 lg:w-16 lg:h-16 shrink-0"
            />

            {/* Abstract circuit-schematic composition — lines and circle nodes */}
            <svg
              aria-hidden
              viewBox="0 0 320 160"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              className="relative flex-1 h-40 lg:h-56 w-full"
            >
              {/* Traces */}
              <g strokeWidth="1.5" strokeLinecap="round">
                <path d="M8 40 H120 V96 H210" stroke="hsl(var(--foreground) / 0.4)" />
                <path d="M8 96 H72 V132 H180" stroke="hsl(var(--foreground) / 0.4)" />
                <path d="M120 40 V16 H244" stroke="hsl(var(--primary))" />
                <path d="M210 96 H300" stroke="hsl(var(--primary))" />
                <path d="M244 16 V64 H300" stroke="hsl(var(--secondary))" />
                <path d="M180 132 V64 H210" stroke="hsl(var(--foreground) / 0.4)" />
                <path d="M72 96 V60 H40" stroke="hsl(var(--accent))" />
              </g>
              {/* Junction + terminal nodes */}
              <g>
                <circle cx="8" cy="40" r="4" fill="hsl(var(--primary))" />
                <circle cx="120" cy="40" r="5" fill="none" stroke="hsl(var(--foreground) / 0.55)" strokeWidth="1.5" />
                <circle cx="120" cy="96" r="3" fill="hsl(var(--foreground) / 0.55)" />
                <circle cx="72" cy="96" r="3" fill="hsl(var(--foreground) / 0.55)" />
                <circle cx="210" cy="96" r="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                <circle cx="244" cy="16" r="4" fill="hsl(var(--secondary))" />
                <circle cx="180" cy="132" r="4" fill="hsl(var(--accent))" />
                <circle cx="40" cy="60" r="4" fill="hsl(var(--accent))" />
                <circle cx="300" cy="96" r="5" fill="hsl(var(--primary))" />
                <circle cx="300" cy="64" r="4" fill="hsl(var(--secondary))" />
                <circle cx="210" cy="64" r="3" fill="hsl(var(--foreground) / 0.55)" />
              </g>
            </svg>
          </div>
        </div>

        <div className="reveal delay-200 opacity-0 lg:col-span-4 lg:pt-6">
          <p className="text-eyebrow text-foreground/55 mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" /> Remote workshop
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-6 [text-wrap:pretty]">
            Phare Consulting Group takes one plan, one model, one forecast at a
            time and rebuilds it from the invoice line up. The workshop
            is small and remote. Two names go on the sheet. What comes
            back is the same artifact you sent, redrawn against the
            evidence, with the branches that no longer bear weight
            crossed through. One artifact. One rebuild. No standing
            retainer.
          </p>
          <button
            onClick={() => scrollToSection("#contact")}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b-2 border-primary pb-1 hover:gap-3 transition-all"
          >
            Send the plan
            <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      {/* Hairline divider */}
      <div className="reveal delay-300 opacity-0 relative z-10 mt-16 lg:mt-24 px-6 lg:px-10">
        <div className="h-px w-full bg-border" />
      </div>

      {/* Editorial card grid (Accenture "tile" row) */}
      <div className="relative z-10 px-6 lg:px-10 mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {editorialCards.map((card, i) => (
          <a
            key={card.eyebrow}
            href={card.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(card.href);
            }}
            style={{ animationDelay: `${i * 90}ms` }}
            className="reveal opacity-0 magnetic group relative flex flex-col overflow-hidden bg-card border border-border/60 hover:border-primary/50 transition-colors duration-300 shadow-[0_18px_50px_-32px_hsl(var(--ink)/0.35)]"
          >
            {/* Image — top 3/5 of the card, no muddy overlay */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={card.image}
                alt=""
                loading="lazy"
                width={832}
                height={624}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Content — solid card panel */}
            <div className="flex-1 flex flex-col p-6 pt-5">
              <p className="text-eyebrow text-primary mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-primary" />
                {card.eyebrow}
              </p>
              <h3 className="text-display text-lg lg:text-xl leading-tight text-foreground mb-6">
                {card.title}
              </h3>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                See the rebuild
                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom marquee — frosted glass rail */}
      <div className="reveal delay-500 opacity-0 relative z-10 mt-20 mx-6 lg:mx-10 glass glass-refract py-6">
        <div className="overflow-hidden">
          <div className="marquee-slow flex gap-12 whitespace-nowrap text-eyebrow text-foreground/55 w-max">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex gap-12">
                {[
                  "One artifact at a time",
                  "Rebuilt from the invoice line up",
                  "One builder, one challenger",
                  "No standing retainer",
                  "No meetings we did not schedule",
                  "Handed back on paper",
                  "The margin, rebuilt line by line",
                ].map((label) => (
                  <span key={`${dup}-${label}`} className="flex items-center gap-3">
                    <span aria-hidden className="inline-block w-1.5 h-1.5 bg-primary" />
                    {label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
