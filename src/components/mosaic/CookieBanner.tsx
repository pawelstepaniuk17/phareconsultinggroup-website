import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "phare.cookie-consent.v1";

type Choice = "all" | "essential";

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (!existing) {
        // Brief delay so it appears after the page settles
        const t = window.setTimeout(() => setOpen(true), 600);
        return () => window.clearTimeout(t);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const persist = (choice: Choice) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, at: new Date().toISOString() })
      );
    } catch {
      // localStorage unavailable; choice will be re-prompted next visit
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md z-[60]"
    >
      <div className="relative glass glass-refract rounded-2xl p-5 sm:p-6 shadow-[0_30px_70px_-30px_hsl(var(--ink)/0.45)] ring-1 ring-foreground/10 animate-fade-up">
      <button
        type="button"
        onClick={() => persist("essential")}
        aria-label="Dismiss and keep essential cookies only"
        className="absolute top-3 right-3 text-foreground/55 hover:text-foreground transition-colors"
      >
        <X size={16} strokeWidth={1.75} />
      </button>

      <p className="text-eyebrow text-primary mb-3 flex items-center gap-3">
        <span className="w-8 h-px bg-primary" />
        Cookie notice
      </p>
      <p className="text-sm text-foreground/85 leading-relaxed mb-4">
        This site uses cookies that are strictly necessary for it to
        function and, with your consent, anonymised audience-measurement
        cookies. You can accept, reject or manage your choice at any
        time. No data is shared with advertising networks.
      </p>
      <p className="text-xs text-foreground/60 leading-relaxed mb-5">
        Data controller: Phare Consulting Group, 75 Avenue Parmentier, 75011
        Paris — contact@phareconsultinggroup.com. See the{" "}
        <Link to="/cookies" className="underline decoration-primary underline-offset-4 hover:text-primary">
          cookies policy
        </Link>{" "}
        and the{" "}
        <Link to="/privacy" className="underline decoration-primary underline-offset-4 hover:text-primary">
          privacy policy
        </Link>.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => persist("all")}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => persist("essential")}
          className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:bg-foreground/85 transition-colors"
        >
          Reject all
        </button>
        <Link
          to="/cookies"
          className="inline-flex items-center gap-2 border border-foreground/25 text-foreground px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          Manage
        </Link>
      </div>
      </div>
    </div>
  );
};

export default CookieBanner;
