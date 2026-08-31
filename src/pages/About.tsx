import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";
import MosaicGrid from "@/components/mosaic/MosaicGrid";
import AboutSection from "@/components/mosaic/About";

const AboutPage = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="The room"
      title="A small remote room that reads things twice."
      lede="Phare Consulting Group is a room in the eleventh, four floors up, that rebuilds plans, deals and org charts once before the meeting they are meant to survive. It works for boards, for chief executives on the ninetieth day, and for the people who will sign the paper on the wall."
      crumbs={[{ label: "Home", to: "/" }, { label: "The room" }]}
      meta={[
        { label: "Practice", value: "Remote" },
        { label: "Readers", value: "Two per file" },
        { label: "Rooms we read in", value: "Money · Plants · Software · Care" },
        { label: "Files opened", value: "On Mondays" },
      ]}
    />
    <div className="px-6 lg:px-10 -mt-2">
      <MosaicGrid rows={2} cols={24} className="h-20 opacity-90" />
    </div>
    <AboutSection />
  </SiteLayout>
);

export default AboutPage;
