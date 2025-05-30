import { Button } from "@/components/ui/button";
import Breadcrumbs from "../breadscrumb/breadscrumb";
import { List } from "lucide-react";

const breadcrumbItems = [{ label: "Estimator" }, { label: "Work Packages" }];

export function Header() {
  return (
    <div className="flex items-center justify-between border-b px-6 py-4">
      <Breadcrumbs items={breadcrumbItems} />
      <Button className="text-white bg-[#005A87] hover:bg-[#004d73] text-sm rounded-full px-4 py-2 gap-2">
        <List size={16} /> View Summary
      </Button>
    </div>
  );
}
