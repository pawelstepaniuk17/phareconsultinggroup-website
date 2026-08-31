import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";

type MegaColumn = {
  heading: string;
  links: { label: string; to: string; tag?: string }[];
};

type NavItem = {
  label: string;
  to: string;
  mega?: MegaColumn[];
  feature?: { eyebrow: string; title: string; to: string };
};

const buildNavItems = (): NavItem[] => [
  {
    label: "The seven files",
    to: "/services",
    mega: [
      {
        heading: "The most-opened files",
        links: services.slice(0, 4).map((s) => ({
          label: s.title,
          to: `/services/${s.slug}`,
          tag: s.duration,
        })),
      },
      {
        heading: "Longer files",
        links: services.slice(4).map((s) => ({
          label: s.title,
          to: `/services/${s.slug}`,
          tag: s.duration,
        })),
      },
    ],
    feature: {
      eyebrow: "How a file moves",
      title: "A cover page, a reading, a written disagreement, a last page. Read the four steps.",
      to: "/approach",
    },
  },
  {
    label: "Notes from the room",
    to: "/insights",
    mega: [
      {
        heading: "Most recent",
        links: insights.slice(0, 4).map((i) => ({
          label: i.title.split(":")[0],
          to: `/insights/${i.slug}`,
        })),
      },
      {
        heading: "By shape",
        links: [
          { label: "Readings", to: "/insights", tag: "Quarterly" },
          { label: "Field notes", to: "/insights", tag: "As they arrive" },
          { label: "House notes", to: "/insights", tag: "Occasional" },
          { label: "The list of what we will not read", to: "/insights/engagement-independence", tag: "Kept live" },
        ],
      },
    ],
  },
  {
    label: "The room",
    to: "/about",
    mega: [
      {
        heading: "Inside the room",
        links: [
          { label: "What the room is", to: "/about" },
          { label: "The four habits we keep", to: "/approach" },
          { label: "What we will not read", to: "/insights/engagement-independence" },
        ],
      },
      {
        heading: "How to write to the workshop",
        links: [
          { label: "Send the plan", to: "/contact" },
          { label: "Ask for an introduction", to: "/contact" },
          { label: "Press letters", to: "/contact" },
        ],
      },
    ],
  },
  {
    label: "The rooms we read in",
    to: "/industries",
    mega: [
      {
        heading: "Rooms",
        links: industries.map((s) => ({
          label: s.name,
          to: `/industries/${s.slug}`,
          tag: s.tag,
        })),
      },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = buildNavItems();

  // Close mega menu on route change
  useEffect(() => {
    setOpenMega(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPanel = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMega(label);
  };
  const queueClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMega(null), 120);
  };

  const goTo = (to: string) => {
    navigate(to);
    setIsMobileMenuOpen(false);
    setOpenMega(null);
  };

  const activeItem = navItems.find((n) => n.label === openMega);

  return (
    <header
      onMouseLeave={queueClose}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || openMega
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Brand mark — oversized magenta carat */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Mosaic Conseil — home"
          >
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                Mosaic
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground -mt-0.5">
                Conseil
              </span>
            </span>
          </Link>

          {/* Desktop nav — centered, with rolled-out mega menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => (item.mega ? openPanel(item.label) : queueClose())}
                onClick={() => goTo(item.to)}
                data-active={openMega === item.label || location.pathname.startsWith(item.to) && item.to !== "/"}
                aria-haspopup={item.mega ? "true" : undefined}
                aria-expanded={item.mega ? openMega === item.label : undefined}
                className="nav-link whitespace-nowrap text-[13px] font-medium text-foreground/85 hover:text-foreground transition-colors py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right utilities */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => goTo("/contact")}
              className="text-[13px] font-medium px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/85 transition-colors"
            >
              Send the plan
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => goTo(item.to)}
              className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => goTo("/contact")}
            className="mt-4 w-full bg-primary text-primary-foreground py-3 font-medium"
          >
            Send the plan
          </button>
        </nav>
      </div>

      {/* Rolled-out mega menu (desktop) */}
      {activeItem?.mega && (
        <div
          onMouseEnter={() => openPanel(activeItem.label)}
          onMouseLeave={queueClose}
          className="hidden lg:block absolute top-full left-0 right-0 bg-muted border-t border-b border-border shadow-2xl shadow-black/30 mega-roll overflow-hidden"
        >
          <div className="px-6 lg:px-10 pt-10 pb-16">
            {/* Section title + arrow-square (Accenture pattern) */}
            <button
              onClick={() => goTo(activeItem.to)}
              className="group flex items-center gap-3 mb-12"
            >
              <span className="text-display text-3xl lg:text-4xl text-foreground font-bold tracking-tight">
                {activeItem.label}
              </span>
              <span className="inline-flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </button>

            {/* Dense multi-column link wall */}
            <div className="grid grid-cols-12 gap-x-10 gap-y-12">
              {activeItem.mega.map((col) => (
                <div
                  key={col.heading}
                  className={`${
                    activeItem.mega!.length === 2 ? "col-span-6" : "col-span-4"
                  }`}
                >
                  <p className="text-foreground/45 text-[13px] mb-6 pb-3 border-b border-border">
                    {col.heading}
                  </p>
                  <ul
                    className={`grid gap-x-6 gap-y-3 ${
                      col.links.length > 4 ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <button
                          onClick={() => goTo(link.to)}
                          className="text-left text-foreground/90 hover:text-primary text-[15px] leading-snug transition-colors flex items-baseline justify-between gap-3 w-full"
                        >
                          <span>{link.label}</span>
                          {link.tag && (
                            <span className="text-[11px] text-foreground/40 shrink-0">
                              {link.tag}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Feature card row, full width */}
            {activeItem.feature && (
              <div className="mt-14 pt-8 border-t border-border flex items-center justify-between gap-6">
                <div>
                  <p className="text-primary text-[13px] mb-2">
                    {activeItem.feature.eyebrow}
                  </p>
                  <p className="text-foreground text-lg max-w-2xl">
                    {activeItem.feature.title}
                  </p>
                </div>
                <button
                  onClick={() => goTo(activeItem.feature!.to)}
                  className="group inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground shrink-0 transition-transform hover:translate-x-1"
                >
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
