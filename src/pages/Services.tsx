import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";
import MosaicGrid from "@/components/mosaic/MosaicGrid";
import { services } from "@/content/services";

const Services = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The seven files"
        title="Seven files. One shape each."
        lede="The room opens seven kinds of file. Each has a fixed length, a fixed price, and a fixed sentence on the last page. Anything else is opened only by exception, and only on the same conditions."
        crumbs={[{ label: "Home", to: "/" }, { label: "The seven files" }]}
        meta={[
          { label: "Files", value: "07" },
          { label: "Anything else", value: "By exception" },
          { label: "Median length", value: "12 wks" },
          { label: "Price", value: "Fixed" },
        ]}
      />

      {/* Decorative mosaic strip */}
      <div className="px-6 lg:px-10 -mt-2">
        <MosaicGrid rows={2} cols={24} className="h-20 opacity-90" />
      </div>

      {/* Service cards grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <p className="text-eyebrow text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" /> The list
              </p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-display text-foreground text-4xl md:text-5xl mb-4">
                Pick the file that matches the sentence you need on the last page.
              </h2>
              <p className="text-foreground/70 max-w-2xl">
                Every file page carries the room it is opened in, the four
                steps it moves through, the sentence it aims for on the last
                page, and the pattern of what has happened in the same file
                before, drawn from completed work with names removed.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group relative bg-background p-8 lg:p-10 gap-10 lg:min-h-[340px] flex flex-col justify-between overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="text-eyebrow text-foreground/45 group-hover:text-primary-foreground/70 transition-colors">
                    {s.number} · {s.duration}
                  </span>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-foreground/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-display text-2xl md:text-[1.7rem] leading-tight text-foreground group-hover:text-primary-foreground transition-colors mb-4">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/65 group-hover:text-primary-foreground/85 leading-relaxed transition-colors line-clamp-4">
                    {s.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom-mandate band */}
      <section className="bg-muted py-20 md:py-28 border-y border-border">
        <div className="px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-primary mb-4">Files not on the list</p>
            <h3 className="text-display text-foreground text-3xl md:text-4xl mb-4">
              The question may not have a file on the list. The four steps do not change.
            </h3>
            <p className="text-foreground/70 max-w-2xl leading-relaxed">
              Where the question fits none of the seven, the room opens a
              file by exception. It is quoted at a fixed price, signed by
              the builder against a two-page brief, and moves through
              the same four steps as the others. New files are opened on
              Mondays or not at all.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Send the two-page brief
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Services;
