import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Publisher",
    body: [
      "This website is published by Mosaic Conseil.",
      "Registered office: 75 Avenue Parmentier, 75011 Paris, France.",
      "Telephone: +33 7 58 92 76 35.",
      "Email: contact@mosaicconseil.fr.",
    ],
  },
  {
    heading: "2. Hosting",
    body: [
      "The site is hosted by Lovable (Lovable Tech AB), Kungsgatan 8, 111 43 Stockholm, Sweden — https://lovable.dev.",
      "Reports of manifestly unlawful content can be sent to the host and to the publisher in line with article 6 of French law n°2004-575 of 21 June 2004.",
    ],
  },
  {
    heading: "3. Intellectual property",
    body: [
      "All content on the site (text, marks, logos, layout, graphic elements and iconography) is protected by copyright and trademark law. Any reproduction, representation, adaptation, translation or distribution, in whole or in part, without Mosaic Conseil’s prior written consent is prohibited.",
      "Short quotations are permitted provided the source (Mosaic Conseil) is clearly cited and a link to the original page is included.",
    ],
  },
  {
    heading: "4. Liability",
    body: [
      "Information published on the site is general and informative. It does not constitute personalised advice, an investment recommendation or a contractual undertaking. All advisory work is governed by a separate written engagement letter.",
      "Mosaic Conseil takes reasonable care to keep information accurate and up to date but does not guarantee that it is complete or free from error. Users remain solely responsible for how they act on it.",
    ],
  },
  {
    heading: "5. Personal data and cookies",
    body: [
      "Personal data collected through the site is described in the privacy policy. Cookies are described in the cookies policy. You may exercise your GDPR rights of access, rectification, erasure, objection, restriction and portability at any time by writing to contact@mosaicconseil.fr.",
    ],
  },
  {
    heading: "6. Governing law",
    body: [
      "The site and this notice are governed by French law. Failing amicable resolution, any dispute concerning them will fall within the exclusive jurisdiction of the courts within the Paris Court of Appeal.",
    ],
  },
];

const LegalNotice = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="Legal information"
      title="Legal notice."
      lede="Publisher and hosting information for mosaicconseil.fr, published under article 6-III of French law n°2004-575 (LCEN)."
      crumbs={[{ label: "Home", to: "/" }, { label: "Legal notice" }]}
    />
    <section className="px-6 lg:px-10 py-16 md:py-24 max-w-3xl">
      <div className="space-y-12">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-display text-foreground text-2xl md:text-3xl mb-4">
              {s.heading}
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-[15px]">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ))}
        <p className="text-xs text-foreground/50 pt-8 border-t border-border">
          Last updated: July 2026.
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default LegalNotice;