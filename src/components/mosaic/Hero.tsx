import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import mosaicLogo from "@/assets/mosaic-conseil-logo.png";
import cardStrategy from "@/assets/card-strategy.jpg";
import cardPortfolio from "@/assets/card-portfolio.jpg";
import cardPricing from "@/assets/card-pricing.jpg";
import cardMargin from "@/assets/card-margin.jpg";

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
      {/* Soft, single radial wash — quiet backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 85% 0%, hsl(var(--secondary) / 0.10), transparent 60%), radial-gradient(60% 50% at 0% 100%, hsl(var(--primary) / 0.08), transparent 60%)",
        }}
      />

      {/* Massive editorial headline with mosaic tile accent */}
      <div className="relative z-10 px-6 lg:px-10 pt-12 lg:pt-20 grid lg:grid-cols-12 gap-8 items-start">
        <div className="reveal opacity-0 lg:col-span-8">
          {/* Brand mark + editorial mosaic composition (no text) */}
          <div className="flex items-start gap-8">
            <img
              src={mosaicLogo}
              alt="Mosaic Conseil"
              width={64}
              height={64}
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain shrink-0"
            />

            {/* Abstract mosaic tile composition — echoes the brand grid */}
            <div
              aria-hidden
              className="relative flex-1 h-40 lg:h-56 grid grid-cols-8 grid-rows-4 gap-1.5 lg:gap-2"
            >
              <div className="col-span-2 row-span-2 bg-primary" />
              <div className="col-span-1 row-span-1 bg-secondary/70" />
              <div className="col-span-1 row-span-2 bg-foreground/10" />
              <div className="col-span-2 row-span-1 bg-accent/80" />
              <div className="col-span-2 row-span-3 bg-foreground/[0.06] border border-border" />
              <div className="col-span-1 row-span-1 bg-primary/30" />
              <div className="col-span-2 row-span-2 bg-secondary" />
              <div className="col-span-1 row-span-1 bg-accent/50" />
              <div className="col-span-1 row-span-1 bg-foreground/15" />
              <div className="col-span-2 row-span-1 bg-primary/60" />
              <div className="col-span-1 row-span-1 bg-foreground/[0.06] border border-border" />
              <div className="col-span-1 row-span-1 bg-accent" />
              <div className="col-span-2 row-span-1 bg-foreground/10" />
              <div className="col-span-1 row-span-1 bg-primary/40" />
              <div className="col-span-1 row-span-1 bg-secondary/50" />
            </div>
          </div>
        </div>

        <div className="reveal delay-200 opacity-0 lg:col-span-4 lg:pt-6">
          <p className="text-eyebrow text-foreground/55 mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" /> Remote workshop
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-6 [text-wrap:pretty]">
            Mosaic Conseil takes one plan, one model, one forecast at a
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
