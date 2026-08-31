import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Who is responsible for this site",
    body: [
      "Phare Consulting Group operates this website. The publisher is reachable at 75 Avenue Parmentier, 75011 Paris, France, by telephone on +33 7 58 92 76 35 and by email at contact@phareconsultinggroup.com.",
      "References to we, us and the firm refer to Phare Consulting Group acting in its capacity as the data controller for the personal data described below.",
    ],
  },
  {
    heading: "2. What data we collect",
    body: [
      "Contact data submitted through the engagement intake form: name, organisation, role, business email, telephone number where provided, and the body of the message itself.",
      "Technical data collected automatically when you read the site: IP address, browser type and version, device type, language, the pages you read and the date and time of those reads.",
      "Cookie identifiers as described in the cookies policy.",
      "We do not knowingly collect special-category data, financial account data or any data from children. The intake form should not be used to transmit confidential commercial information until an engagement letter is in place.",
    ],
  },
  {
    heading: "3. Why we use the data",
    body: [
      "Replying to enquiries received through the intake form and assessing whether the firm is the right fit for the brief.",
      "Operating, securing and improving the site, including detecting abuse and resolving technical faults.",
      "Meeting the firm's record-keeping obligations under French and EU professional standards.",
    ],
  },
  {
    heading: "4. Legal basis",
    body: [
      "Processing of intake form data is carried out on the basis of taking steps at the request of the data subject prior to entering into a contract (Article 6(1)(b) GDPR).",
      "Processing of technical and analytics data is carried out on the basis of consent where required, and otherwise on the basis of the firm's legitimate interest in operating a secure and useful website (Article 6(1)(a) and (f) GDPR).",
    ],
  },
  {
    heading: "5. How long we keep it",
    body: [
      "Intake correspondence: up to twenty-four months from the last exchange, unless the conversation leads to an engagement, in which case standard engagement-file retention applies.",
      "Server and security logs: up to twelve months.",
      "Cookie identifiers: as set out in the cookies policy.",
    ],
  },
  {
    heading: "6. Who has access",
    body: [
      "Access is limited to members of the firm who need the data to do their work, and to a small number of named processors that host the site, deliver email and provide infrastructure security. Each processor is bound by a written agreement that meets the requirements of Article 28 GDPR.",
      "We do not sell personal data and we do not share it with advertising networks.",
    ],
  },
  {
    heading: "7. Transfers outside the EEA",
    body: [
      "Where a processor is located outside the European Economic Area, the transfer is covered either by an adequacy decision of the European Commission or by the European Commission's standard contractual clauses, supplemented by additional measures where appropriate.",
    ],
  },
  {
    heading: "8. Your rights",
    body: [
      "You may request access to your data, correction of inaccurate data, deletion of data we no longer need, restriction of processing and portability of data you have provided. You may also withdraw consent for analytics cookies at any time and lodge a complaint with the Commission Nationale de l'Informatique et des Libertés (CNIL), which is the supervisory authority in France.",
      "Requests can be sent to contact@phareconsultinggroup.com. We respond within one month.",
    ],
  },
  {
    heading: "9. Changes to this notice",
    body: [
      "Material changes are flagged on this page and dated. Continued use of the site after a change constitutes acknowledgement of the updated notice.",
    ],
  },
];

const Privacy = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="Legal"
      title="Privacy notice"
      lede="How Phare Consulting Group collects, uses and protects personal data when you read this site or write in through the intake form."
      crumbs={[{ label: "Home", to: "/" }, { label: "Privacy" }]}
      meta={[
        { label: "Last updated", value: "April 2026" },
        { label: "Controller", value: "Phare" },
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

export default Privacy;
