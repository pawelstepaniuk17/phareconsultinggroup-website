import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/mosaic/SiteLayout";
import { getInsight, insights } from "@/content/insights";

const InsightDetail = () => {
  const { slug } = useParams();
  const piece = getInsight(slug || "");
  if (!piece) return <Navigate to="/insights" replace />;
  const related = (piece.relatedSlugs || []).map(getInsight).filter(Boolean) as typeof insights;

  return (
    <SiteLayout>
      <article>
        <header className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-border">
          <div className="px-6 lg:px-10 max-w-5xl">
            <nav className="mb-10 text-[12px] text-foreground/60 flex items-center gap-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="text-foreground/30">/</span>
              <Link to="/insights" className="hover:text-primary">Notes from the room</Link>
              <span className="text-foreground/30">/</span>
              <span className="text-foreground/85">{piece.series} {piece.number}</span>
            </nav>
            <p className="text-eyebrow text-primary mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              {piece.series} · {piece.number} · {piece.date} · {piece.readTime}
            </p>
            <h1 className="text-display text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">{piece.title}</h1>
            <p className="text-xl text-foreground/75 leading-relaxed max-w-3xl mb-6">{piece.excerpt}</p>
            <p className="text-sm text-foreground/55">{piece.authorRole}</p>
          </div>
        </header>

        <div className="py-20 md:py-28 bg-background">
          <div className="px-6 lg:px-10 max-w-3xl space-y-12">
            {piece.body.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="text-display text-2xl md:text-3xl text-foreground mb-6 mt-4">{section.heading}</h2>
                )}
                <div className="space-y-5">
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-foreground/85 leading-[1.75] text-[17px]">{p}</p>
                  ))}
                </div>
                {idx === 0 && piece.pullQuote && (
                  <blockquote className="my-12 border-l-4 border-primary pl-6 text-display text-2xl md:text-3xl text-foreground leading-snug">
                    {piece.pullQuote}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <section className="py-16 bg-muted border-t border-border">
            <div className="px-6 lg:px-10">
              <p className="text-eyebrow text-primary mb-6">Read alongside</p>
              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {related.map((r) => (
                  <Link key={r.slug} to={`/insights/${r.slug}`} className="group bg-muted p-8 hover:bg-background transition-colors">
                    <p className="text-eyebrow text-foreground/55 mb-3">{r.series} · {r.number}</p>
                    <h4 className="text-display text-xl text-foreground group-hover:text-primary transition-colors mb-3">{r.title}</h4>
                    <ArrowUpRight size={18} className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </SiteLayout>
  );
};

export default InsightDetail;