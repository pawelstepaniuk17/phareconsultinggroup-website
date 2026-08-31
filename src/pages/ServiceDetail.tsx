import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";
import MosaicGrid from "@/components/mosaic/MosaicGrid";
import { getService, services } from "@/content/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug || "");
  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={`${service.number} · A file we open often`}
        title={service.title}
        lede={service.shortDescription}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "The seven files", to: "/services" },
          { label: service.title },
        ]}
        meta={[
          { label: "Length", value: service.duration },
          { label: "Price band", value: service.feeBand },
          { label: "Signed by", value: "One builder, one challenger" },
          { label: "Shape", value: "Fixed" },
        ]}
      />

      <div className="px-6 lg:px-10 -mt-2">
        <MosaicGrid rows={2} cols={24} className="h-12 opacity-90" />
      </div>

      {/* Long description */}
      <section className="py-20 md:py-28 bg-background">
        <div className="px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-eyebrow text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" /> The file
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl text-foreground leading-relaxed font-light">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Conditions + triggers */}
      <section className="py-20 md:py-24 bg-muted border-y border-border">
        <div className="px-6 lg:px-10 grid lg:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-muted p-10 lg:p-14">
            <p className="text-eyebrow text-primary mb-6">What the room usually looks like</p>
            <ul className="space-y-4">
              {service.challenges.map((c, i) => (
                <li key={i} className="text-foreground/85 flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-xs">■</span>
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted p-10 lg:p-14">
            <p className="text-eyebrow text-primary mb-6">What usually makes the phone ring</p>
            <ul className="space-y-4">
              {service.triggers.map((t, i) => (
                <li key={i} className="text-foreground/85 flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-xs">■</span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Phase plan */}
      <section className="py-20 md:py-28 bg-background">
        <div className="px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <p className="text-eyebrow text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" /> The four steps
              </p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-display text-foreground text-4xl md:text-5xl">
                Four steps, in the same order, every time.
              </h2>
            </div>
          </div>

          <div className="border-t border-border">
            {service.phases.map((p, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-12 gap-8 py-10 border-b border-border group hover:bg-muted/50 transition-colors -mx-6 lg:-mx-10 px-6 lg:px-10"
              >
                <div className="lg:col-span-2">
                  <span className="text-display text-foreground/15 group-hover:text-primary transition-colors text-5xl">
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-eyebrow text-foreground/55 mb-2">{p.weeks}</p>
                  <h4 className="text-display text-2xl text-foreground">{p.name}</h4>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-foreground/75 leading-relaxed">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach + deliverables */}
      <section className="py-20 md:py-24 bg-background">
        <div className="px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-eyebrow text-primary mb-4">How the file is read</p>
            <p className="text-foreground/80 leading-relaxed">{service.approach}</p>
          </div>
          <div>
            <p className="text-eyebrow text-primary mb-4">What ends up on the desk</p>
            <ul className="space-y-3">
              {service.outcomes.map((o, i) => (
                <li key={i} className="text-foreground/80 flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-xs">■</span>
                  <span className="leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24 bg-muted border-y border-border">
        <div className="px-6 lg:px-10">
          <p className="text-eyebrow text-primary mb-4">Who reads it</p>
          <h3 className="text-display text-foreground text-3xl md:text-4xl mb-12">
            A small, named table for the length of the file.
          </h3>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {service.team.map((t) => (
              <div key={t.role} className="bg-muted p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-1 w-8 h-8 mb-5">
                  <span className="bg-primary" />
                  <span className="bg-accent" />
                  <span className="bg-secondary" />
                  <span className="bg-[hsl(var(--cobalt-soft))]" />
                </div>
                <h4 className="text-display text-xl text-foreground mb-3">{t.role}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern + CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-primary mb-4">What has happened, in the same file, before</p>
            <p className="text-2xl text-foreground leading-relaxed font-light">
              {service.pattern}
            </p>
          </div>
          <div className="lg:col-span-5 bg-primary text-primary-foreground p-10">
            <p className="text-eyebrow opacity-80 mb-4">Send the plan</p>
            <h4 className="text-display text-2xl mb-4">
              Ask whether this file fits the sentence you need.
            </h4>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Letters are read on Mondays. A written reply arrives inside
              three working days, on paper you can hold.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-primary-foreground pb-1 hover:gap-3 transition-all"
            >
              Write the plan <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Other templates */}
      <section className="py-20 md:py-24 bg-muted border-t border-border">
        <div className="px-6 lg:px-10">
          <p className="text-eyebrow text-primary mb-4">Other files</p>
          <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-muted p-8 hover:bg-background transition-colors"
              >
                <p className="text-eyebrow text-foreground/55 mb-3">{s.duration}</p>
                <h4 className="text-display text-xl text-foreground group-hover:text-primary transition-colors mb-3">
                  {s.title}
                </h4>
                <ArrowUpRight size={18} className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ServiceDetail;