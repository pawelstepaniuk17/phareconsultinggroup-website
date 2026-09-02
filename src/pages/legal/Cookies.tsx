import { useEffect, useState } from "react";
import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";

const STORAGE_KEY = "phare.cookie-consent.v1";

type Stored = { choice: "all" | "essential"; at: string } | null;

const cookieTable = [
  {
    name: "phare.cookie-consent.v1",
    purpose: "Stores your cookie preference so the banner is not shown again.",
    type: "Essential",
    duration: "12 months",
    provider: "Phare Consulting Group",
  },
  {
    name: "session",
    purpose: "Maintains a temporary read session for security and load balancing.",
    type: "Essential",
    duration: "Session",
    provider: "Phare Consulting Group",
  },
  {
    name: "_an_*",
    purpose: "First-party measurement of page reads in aggregate. IP addresses are truncated and no profile is built.",
    type: "Analytics (optional)",
    duration: "13 months",
    provider: "Phare Consulting Group",
  },
];

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. What cookies are",
    body: [
      "Cookies are small text files placed on your device when you read a website. They allow the site to recognise the device on subsequent reads, store a preference, or measure how the site is used. The same idea covers similar technologies such as local storage and pixel tags.",
    ],
  },
  {
    heading: "2. Categories used on this site",
    body: [
      "Essential cookies are required for the site to function and to record your cookie preference. They cannot be turned off through the banner.",
      "Analytics cookies are optional and only set after you accept them. They measure how pages are read in aggregate; no profile is built and no data is shared with advertising networks.",
      "The site does not use advertising, profiling or social-media cookies.",
    ],
  },
  {
    heading: "3. Managing your choice",
    body: [
      "You can change your preference at any time using the buttons at the foot of this page. You can also block or delete cookies through your browser settings; doing so may affect parts of the site that rely on essential cookies.",
      "Withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal.",
    ],
  },
  {
    heading: "4. Retention",
    body: [
      "Each cookie is set to expire as listed in the table above. Once expired, the cookie is removed by the browser and will be set again only if you continue to use the site and your preference allows it.",
    ],
  },
  {
    heading: "5. Contact",
    body: [
      "Questions about cookies can be sent to contact@phareconsultinggroup.com.",
    ],
  },
];

const Cookies = () => {
  const [stored, setStored] = useState<Stored>(null);

  const refresh = () => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      setStored(raw ? (JSON.parse(raw) as Stored) : null);
    } catch {
      setStored(null);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const persist = (choice: "all" | "essential") => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, at: new Date().toISOString() })
      );
    } catch {
      // ignore
    }
    refresh();
  };

  const reset = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    refresh();
  };

  const currentLabel =
    stored?.choice === "all"
      ? "Analytics accepted"
      : stored?.choice === "essential"
      ? "Essential only"
      : "No choice recorded";

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Legal"
        title="Cookies policy"
        lede="The cookies and similar technologies set by phareconsultinggroup.com, what each one does and how to change your choice at any time."
        crumbs={[{ label: "Home", to: "/" }, { label: "Cookies" }]}
        meta={[
          { label: "Last updated", value: "April 2026" },
          { label: "Categories", value: "2" },
        ]}
      />
      <section className="px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 space-y-6">
            <div className="glass p-6 sticky top-28">
              <p className="text-eyebrow text-foreground/55 mb-4">Your choice</p>
              <p className="text-display text-xl text-foreground mb-2">
                {currentLabel}
              </p>
              {stored && (
                <p className="text-xs text-foreground/55 mb-5">
                  Recorded {new Date(stored.at).toLocaleDateString()}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => persist("all")}
                  className="bg-primary text-primary-foreground px-3 py-2 text-xs font-semibold hover:bg-primary/90 transition-colors"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => persist("essential")}
                  className="border border-foreground/25 text-foreground px-3 py-2 text-xs font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  Essential only
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="text-eyebrow text-foreground/65 hover:text-primary transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-display text-2xl text-foreground mb-4">
                Cookies set by this site
              </h2>
              <div className="border border-border overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 text-foreground/65">
                    <tr>
                      <th className="text-left text-eyebrow font-medium px-4 py-3">Name</th>
                      <th className="text-left text-eyebrow font-medium px-4 py-3">Purpose</th>
                      <th className="text-left text-eyebrow font-medium px-4 py-3">Type</th>
                      <th className="text-left text-eyebrow font-medium px-4 py-3">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((c) => (
                      <tr key={c.name} className="border-t border-border align-top">
                        <td className="px-4 py-4 font-mono text-[12px] text-foreground/85">
                          {c.name}
                        </td>
                        <td className="px-4 py-4 text-foreground/80 leading-relaxed">
                          {c.purpose}
                        </td>
                        <td className="px-4 py-4 text-foreground/80">{c.type}</td>
                        <td className="px-4 py-4 text-foreground/80">{c.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-display text-2xl text-foreground mb-4">
                  {s.heading}
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Cookies;
