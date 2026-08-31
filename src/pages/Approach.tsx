import SiteLayout from "@/components/mosaic/SiteLayout";
import PageHeader from "@/components/mosaic/PageHeader";
import MosaicGrid from "@/components/mosaic/MosaicGrid";
import ApproachSection from "@/components/mosaic/Approach";

const ApproachPage = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="How a file moves"
      title="A cover page. A reading. A written disagreement. A last page."
      lede="Every file, of every shape, walks through the same four steps. The steps are written down in a small booklet, kept on a shelf in the room, and read against the file records each January. Nothing else in this room changes shape."
      crumbs={[{ label: "Home", to: "/" }, { label: "How a file moves" }]}
      meta={[
        { label: "Steps", value: "04" },
        { label: "Habits", value: "04" },
        { label: "Booklet read", value: "Each January" },
        { label: "Files kept", value: "Seven years" },
      ]}
    />
    <div className="px-6 lg:px-10 -mt-2">
      <MosaicGrid rows={2} cols={24} className="h-12 opacity-90" />
    </div>
    <ApproachSection />
  </SiteLayout>
);

export default ApproachPage;