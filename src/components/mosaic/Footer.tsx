import SchematicMark from "@/components/mosaic/SchematicMark";
import { Link } from "react-router-dom";

const linkColumns = [
  {
    heading: "The workshop",
    links: [
      { label: "The room", href: "/about" },
      { label: "How a file moves", href: "/approach" },
      { label: "The rooms we read in", href: "/industries" },
      { label: "Notes from the room", href: "/insights" },
    ],
  },
  {
    heading: "Write",
    links: [
      { label: "Seven files we open", href: "/services" },
      { label: "Send the plan", href: "/contact" },
      { label: "Press letters", href: "/contact" },
    ],
  },
  {
    heading: "By post",
    links: [
      { label: "contact@phareconsultinggroup.com", href: "mailto:contact@phareconsultinggroup.com" },
      { label: "+33 7 58 92 76 35", href: "tel:+33758927635" },
      { label: "Remote practice", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[640px]">
        {/* LEFT — small label, link columns, bottom legal */}
        <div className="px-6 lg:px-10 pt-12 pb-8 flex flex-col">
          {/* Tiny eyebrow label */}
          <p className="text-sm text-foreground/85 mb-20">
            The rebuild. Written down. Handed back on paper.
          </p>

          {/* Spacer to push columns down (matches reference) */}
          <div className="flex-1 min-h-[80px]" />

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
            {linkColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-foreground/55 text-xs mb-4">
                  {col.heading}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("mailto:") ? (
                        <a
                          href={link.href}
                          className="text-foreground/90 hover:text-primary text-left text-[13px] transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-foreground/90 hover:text-primary text-left text-[13px] transition-colors block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom legal */}
          <div className="text-foreground/45 text-[11px] space-y-1">
            <p>© 2026 Phare Consulting Group. All rights reserved.</p>
            <p>75 Avenue Parmentier, 75011 Paris, France</p>
            <div className="flex gap-4 pt-2">
              <Link to="/legal" className="hover:text-foreground transition-colors">
                Legal notice
              </Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy notice
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of use
              </Link>
              <Link to="/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — single oversized wordmark, mosaic strip baseline, logo */}
        <div
          className="relative overflow-hidden border-l border-border bg-ink text-cream select-none flex flex-col justify-between p-10 lg:p-12"
        >
          {/* Top: colored mosaic baseline strip */}
          <div aria-hidden className="flex h-3 w-full">
            <span className="flex-1 bg-primary" />
            <span className="flex-1 bg-secondary" />
            <span className="flex-1 bg-accent" />
            <span className="flex-1 bg-cream" />
          </div>

          {/* Center: single oversized wordmark */}
          <div className="flex-1 flex items-center justify-center py-12">
            <div
              aria-hidden
              className="text-display text-cream font-black tracking-[-0.04em] leading-[0.82] text-[clamp(4rem,16vw,12rem)] text-center"
            >
PHARE<span className="text-primary">.</span>GROUP
            </div>
          </div>

          {/* Bottom: logo + tagline */}
          <div className="flex items-end justify-between gap-6">
            <p className="text-cream/55 text-xs max-w-[20ch] leading-relaxed">
              A small room, in the 11th, that reads a second time.
            </p>
            <SchematicMark
              title="Phare Consulting Group"
              className="h-16 w-16"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
