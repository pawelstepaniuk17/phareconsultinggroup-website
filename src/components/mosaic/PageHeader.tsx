import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  meta?: { label: string; value: string }[];
};

const PageHeader = ({ eyebrow, title, lede, crumbs, meta }: PageHeaderProps) => {
  const lastCrumb = crumbs && crumbs.length > 0 ? crumbs[crumbs.length - 1].label : undefined;
  const showEyebrow =
    !lastCrumb || eyebrow.trim().toLowerCase() !== lastCrumb.trim().toLowerCase();
  return (
    <section className="relative bg-background pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Backdrop tile pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--ink)/.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)/.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 65%)",
        }}
      />

      <div className="relative px-6 lg:px-10">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-10 flex items-center gap-2 text-[12px] text-foreground/60">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground/85">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight size={12} strokeWidth={1.5} className="text-foreground/30" />
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-8">
            {showEyebrow && (
              <p className="text-eyebrow text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                {eyebrow}
              </p>
            )}
            <h1 className="text-display text-foreground text-[10vw] sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[0.95] mb-8 max-w-[18ch]">
              {title}
            </h1>
            {lede && (
              <p className="text-lg text-foreground/75 leading-relaxed max-w-3xl">
                {lede}
              </p>
            )}
          </div>

          {meta && meta.length > 0 && (
            <div className="lg:col-span-4 lg:col-start-9 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <span className="block w-8 h-px bg-primary mb-3" />
                  <p className="text-eyebrow text-foreground/55 mb-2">{m.label}</p>
                  <p className="text-display text-2xl text-foreground">{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;