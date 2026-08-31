import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";
import MosaicGrid from "@/components/mosaic/MosaicGrid";
import { getIndustry, industries } from "@/content/industries";

const IndustryDetail = () => {
  const { slug } = useParams();
  const ind = getIndustry(slug || "");
  if (!ind) return <Navigate to="/industries" replace />;
  const others = industries.filter((i) => i.slug !== ind.slug);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={ind.tag}
        title={ind.name}
        lede={ind.shortBlurb}
        crumbs={[{ label: "Home", to: "/" }, { label: "The rooms we read in", to: "/industries" }, { label: ind.name }]}
        meta={ind.indicators.map((i) => ({ label: i.label, value: i.value }))}
      />
      <div className="px-6 lg:px-10 -mt-2">
        <MosaicGrid rows={2} cols={24} className="h-20 opacity-90" />
      </div>

      <section className="py-20 md:py-28 bg-background">
        <div className="px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" /> The room, as we find it
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl text-foreground leading-relaxed font-light">{ind.marketStructure}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted border-y border-border">
        <div className="px-6 lg:px-10">
          <p className="text-eyebrow text-primary mb-4">Files we open here often</p>
          <h3 className="text-display text-foreground text-3xl md:text-4xl mb-12">What tends to be on the desk when the phone rings from this room.</h3>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {ind.workingThemes.map((t) => (
              <div key={t.title} className="bg-muted p-10">
                <h4 className="text-display text-2xl text-foreground mb-4">{t.title}</h4>
                <p className="text-foreground/75 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-primary mb-4">A recent handful</p>
            <h3 className="text-display text-foreground text-3xl md:text-4xl mb-6">Names removed. Everything else true.</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{ind.capacityNote}</p>
          </div>
          <ul className="lg:col-span-7 divide-y divide-border border-y border-border">
            {ind.recentMandates.map((m, i) => (
              <li key={i} className="py-5 flex items-start gap-4">
                <span className="text-eyebrow text-foreground/40 pt-1 w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85 leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-muted border-t border-border">
        <div className="px-6 lg:px-10">
          <p className="text-eyebrow text-primary mb-6">Other rooms</p>
          <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
            {others.map((o) => (
              <Link key={o.slug} to={`/industries/${o.slug}`} className="group bg-muted p-8 hover:bg-background transition-colors">
                <p className="text-eyebrow text-foreground/55 mb-3">{o.tag}</p>
                <h4 className="text-display text-xl text-foreground group-hover:text-primary transition-colors mb-3">{o.name}</h4>
                <ArrowUpRight size={18} className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default IndustryDetail;
