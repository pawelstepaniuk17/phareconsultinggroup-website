import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";
import MosaicGrid from "@/components/mosaic/MosaicGrid";
import { industries } from "@/content/industries";

const IndustriesPage = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="The rooms we read in"
      title="Four kinds of room."
      lede="The workshop opens files in four kinds of room: where the money answers to somebody, where things arrive on lorries, where the software outgrew the file that started it, and where care meets a ledger. Each room has a lead reader who spent at least ten years inside it before the door here opened."
      crumbs={[{ label: "Home", to: "/" }, { label: "The rooms we read in" }]}
      meta={[
        { label: "Rooms", value: "04" },
        { label: "Other rooms, occasionally", value: "03" },
        { label: "New files opened", value: "Mondays" },
        { label: "Callers on the ground", value: "20+" },
      ]}
    />
    <div className="px-6 lg:px-10 -mt-2">
      <MosaicGrid rows={2} cols={24} className="h-12 opacity-90" />
    </div>
    <section className="py-20 md:py-28 bg-background">
      <div className="px-6 lg:px-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            to={`/industries/${ind.slug}`}
            className="group relative bg-background p-10 lg:p-12 min-h-[320px] flex flex-col justify-between overflow-hidden"
          >
            <div aria-hidden className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="text-eyebrow text-foreground/55 group-hover:text-primary-foreground/80 transition-colors">{ind.tag}</span>
              <ArrowUpRight size={22} strokeWidth={1.5} className="text-foreground/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="relative z-10">
              <h3 className="text-display text-3xl text-foreground group-hover:text-primary-foreground transition-colors mb-4">{ind.name}</h3>
              <p className="text-sm text-foreground/65 group-hover:text-primary-foreground/85 leading-relaxed transition-colors">{ind.shortBlurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default IndustriesPage;