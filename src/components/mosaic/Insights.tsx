import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { insights } from "@/content/insights";

const featuredSlugs = [
  "pocket-price-drift",
  "decision-latency-as-a-metric",
  "capital-allocation-asymmetric-hurdles",
  "synergy-models-get-wrong",
  "margin-programmes-that-held",
  "engagement-independence",
];
const themes = featuredSlugs
  .map((slug) => insights.find((i) => i.slug === slug))
  .filter((i): i is (typeof insights)[number] => Boolean(i))
  .map((i) => ({
    slug: i.slug,
    tag: `${i.series} ${i.number}`,
    title: i.title,
    blurb: i.excerpt,
  }));

const Insights = () => {
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
      id="insights"
      ref={sectionRef}
      className="py-28 md:py-40 bg-background relative overflow-hidden ambient-glow"
    >
      <div className="px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <p className="reveal opacity-0 text-eyebrow text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              What we have read
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal delay-100 opacity-0 text-display text-foreground text-5xl md:text-6xl lg:text-7xl mb-6">
              Notes from the room<span className="text-primary">.</span>
            </h2>
            <p className="reveal delay-200 opacity-0 text-lg text-foreground/70 max-w-2xl">
              Four to six notes a year, drawn from files we have read and
              stripped of anything that would identify the room they came
              from. Each is checked in ink by the challenger before it
              leaves the door. Full copies sent by return of email.
            </p>
          </div>
        </div>

        {/* Featured + grid */}
        <div className="grid lg:grid-cols-12 gap-px bg-border border border-border">
          {/* Featured */}
          <Link to={`/insights/${themes[0].slug}`} className="reveal opacity-0 lg:col-span-7 bg-background group cursor-pointer relative overflow-hidden block">
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <div className="relative z-10 p-10 lg:p-14 min-h-[460px] flex flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <span className="text-eyebrow text-primary group-hover:text-primary-foreground transition-colors">
                  {themes[0].tag}
                </span>
                <ArrowUpRight
                  size={28}
                  strokeWidth={1.25}
                  className="text-foreground/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <div>
                <h3 className="text-display text-3xl md:text-5xl text-foreground group-hover:text-primary-foreground transition-colors mb-6 max-w-2xl">
                  {themes[0].title}
                </h3>
                <p className="text-foreground/70 group-hover:text-primary-foreground/85 transition-colors max-w-xl leading-relaxed">
                  {themes[0].blurb}
                </p>
              </div>
            </div>
          </Link>

          {/* Side stack */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-px bg-border">
            {themes.slice(1, 3).map((t, i) => (
              <Link
                key={t.slug}
                to={`/insights/${t.slug}`}
                className={`reveal delay-${(i + 2) * 100} opacity-0 bg-background group cursor-pointer relative overflow-hidden block`}
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10 p-8 lg:p-10 min-h-[230px] flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-eyebrow text-primary group-hover:text-primary-foreground transition-colors">
                      {t.tag}
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-foreground/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <h3 className="text-display text-xl md:text-2xl text-foreground group-hover:text-primary-foreground transition-colors max-w-md">
                    {t.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row */}
          {themes.slice(3).map((t, i) => (
            <Link
              key={t.slug}
              to={`/insights/${t.slug}`}
              className={`reveal delay-${(i + 3) * 100} opacity-0 lg:col-span-4 bg-background group cursor-pointer relative overflow-hidden block`}
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="relative z-10 p-8 lg:p-10 min-h-[260px] flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-eyebrow text-primary group-hover:text-primary-foreground transition-colors">
                    {t.tag}
                  </span>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-foreground/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div>
                  <h3 className="text-display text-xl md:text-2xl text-foreground group-hover:text-primary-foreground transition-colors mb-3">
                    {t.title}
                  </h3>
                  <p className="text-sm text-foreground/65 group-hover:text-primary-foreground/85 leading-relaxed transition-colors line-clamp-3">
                    {t.blurb}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            to="/insights"
            className="group inline-flex items-center gap-3 text-eyebrow text-primary hover:text-foreground transition-colors"
          >
            All notes from the room
            <ArrowUpRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
