import DescriptionPanel from "./description-panel";
import Layout from "./layout";
import PropertiesPanel from "./properties-panel";

export default function Image1() {
  return (
    <Layout>
      <div className="flex h-full">
        <DescriptionPanel />
        <PropertiesPanel />
      </div>
    </Layout>
  );
}
