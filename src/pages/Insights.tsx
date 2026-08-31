import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";
import MosaicGrid from "@/components/mosaic/MosaicGrid";
import { insights } from "@/content/insights";

const InsightsPage = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="Notes from the room"
      title="Readings, field notes, house notes."
      lede="Four to six readings a year, written from files with the names taken out. Each is read by one builder, one challenger and a sector caller before it leaves the room. Nothing is written to be quoted; some of it gets quoted anyway."
      crumbs={[{ label: "Home", to: "/" }, { label: "Notes from the room" }]}
      meta={[
        { label: "Shapes", value: "03" },
        { label: "Per year", value: "4–6" },
        { label: "Read by", value: "One builder, one challenger" },
        { label: "How to get one", value: "Ask" },
      ]}
    />
    <div className="px-6 lg:px-10 -mt-2">
      <MosaicGrid rows={2} cols={24} className="h-12 opacity-90" />
    </div>
    <section className="py-20 md:py-28 bg-background">
      <div className="px-6 lg:px-10 grid lg:grid-cols-2 gap-px bg-border border border-border">
        {insights.map((i) => (
          <Link key={i.slug} to={`/insights/${i.slug}`} className="group relative bg-background p-10 lg:p-12 min-h-[280px] flex flex-col justify-between overflow-hidden">
            <div aria-hidden className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="text-eyebrow text-primary group-hover:text-primary-foreground transition-colors">{i.series} · {i.number} · {i.date}</span>
              <ArrowUpRight size={20} strokeWidth={1.5} className="text-foreground/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="relative z-10">
              <h3 className="text-display text-2xl md:text-3xl text-foreground group-hover:text-primary-foreground transition-colors mb-4">{i.title}</h3>
              <p className="text-sm text-foreground/65 group-hover:text-primary-foreground/85 leading-relaxed transition-colors line-clamp-3">{i.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default InsightsPage;