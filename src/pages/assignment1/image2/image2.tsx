import { ArrowRight, List } from "lucide-react";
import Layout from "./layout";
import WorkPackages from "./work-package";

export default function Image2() {
  return (
    <Layout>
      <div className="flex flex-col h-full px-10">
        <h1 className="text-lg font-medium my-4 text-gray-800">
          Work Packages (WP)
        </h1>
        <WorkPackages />
        <div className="mb-5 flex flex-1 items-end justify-between text-sm">
          <span className="flex items-center text-common-blue hover:underline cursor-pointer gap-1">
            <List size={14} /> <em>How to add custom WPs</em>
          </span>
          <button className="flex items-center gap-2 border border-blue-500 text-common-blue rounded-md px-4 py-1 hover:bg-blue-50">
            Next
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
