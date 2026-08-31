import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Scope",
    body: [
      "These terms govern your use of phareconsultinggroup.com and any subdomain operated by Phare Consulting Group. By reading the site you accept the terms as drafted. If you do not accept them, do not use the site.",
      "These terms govern site use only. Engagements are governed by a separate written engagement letter signed by both parties.",
    ],
  },
  {
    heading: "2. Publisher and host",
    body: [
      "Publisher: Phare Consulting Group, 75 Avenue Parmentier, 75011 Paris, France. Email: contact@phareconsultinggroup.com. Telephone: +33 7 58 92 76 35.",
      "Director of publication: the managing officer of the firm at the time of publication.",
      "Hosting provider: details available on request to the publisher.",
    ],
  },
  {
    heading: "3. Nature of the content",
    body: [
      "The content of this site is published for general information. It does not constitute legal, tax, accounting, regulatory, investment or other professional advice and should not be relied on as such. Any decision based on material read here is taken at the reader's own risk.",
      "Where the site references frameworks, methods or findings, those references describe the firm's general approach. Specific advice is delivered only under a signed engagement letter.",
    ],
  },
  {
    heading: "4. Intellectual property",
    body: [
      "All text, graphics, logos, photographs, layouts and source code are the property of Phare Consulting Group or its licensors and are protected by French and international intellectual-property law. Reproduction, public communication or adaptation, in whole or in part, is prohibited without prior written authorisation, except for short citations that respect the moral rights of the author and identify the source.",
      "The Phare Consulting Group name and the mosaic-tile mark are trademarks of the firm. No licence is granted by virtue of access to the site.",
    ],
  },
  {
    heading: "5. Permitted use",
    body: [
      "You may read the site for personal or internal professional reference. You may print or download a single copy of any page for that purpose, provided all proprietary notices are kept intact.",
      "Automated extraction, scraping, framing and any use that interferes with the operation or security of the site are prohibited.",
    ],
  },
  {
    heading: "6. Third-party links",
    body: [
      "Some pages link to third-party sites that the firm does not control. The firm does not endorse those sites and accepts no responsibility for their content, their security or their data practices. Reading a third-party site is governed by its own terms.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    body: [
      "The site is provided on an as-is basis. To the extent permitted by law, the firm excludes all warranties as to accuracy, completeness, fitness for a particular purpose and uninterrupted availability.",
      "The firm is not liable for indirect or consequential loss arising from use of, or inability to use, the site, including loss of revenue, loss of opportunity or loss of data. Nothing in these terms limits liability for fraud, gross negligence or any liability that cannot be excluded under French law.",
    ],
  },
  {
    heading: "8. Personal data",
    body: [
      "Processing of personal data through the site is described in the privacy notice and the cookies policy, which form part of these terms.",
    ],
  },
  {
    heading: "9. Governing law and jurisdiction",
    body: [
      "These terms are governed by French law. Any dispute arising from use of the site falls under the exclusive jurisdiction of the competent courts of Paris, subject to mandatory rules of consumer protection where they apply.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      "Questions about these terms can be sent to contact@phareconsultinggroup.com.",
    ],
  },
];

const Terms = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="Legal"
      title="Terms of use"
      lede="The conditions that govern reading, citing and otherwise using phareconsultinggroup.com. Engagement work is covered by a separate written letter."
      crumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]}
      meta={[
        { label: "Last updated", value: "April 2026" },
        { label: "Jurisdiction", value: "Paris" },
      ]}
    />
    <section className="px-6 lg:px-10 py-16 lg:py-20">
      <div className="grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4">
          <div className="glass p-6 sticky top-28">
            <p className="text-eyebrow text-foreground/55 mb-4">Contents</p>
            <ol className="space-y-2 text-sm text-foreground/85 list-decimal list-inside">
              {sections.map((s) => (
                <li key={s.heading} className="leading-snug">
                  {s.heading.replace(/^\d+\.\s*/, "")}
                </li>
              ))}
            </ol>
          </div>
        </aside>
        <article className="lg:col-span-8 space-y-12">
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

export default Terms;
