import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronRight } from "lucide-react";

type InfoRowItem = {
  label: string;
  value: string;
  colorClass?: string;
};

const infoRows: InfoRowItem[] = [
  { label: "Status:", value: "In-Progress", colorClass: "text-blue-600" },
  { label: "Priority:", value: "Critical", colorClass: "text-red-600" },
  { label: "Assignee:", value: "Trangtt" },
  { label: "Type:", value: "Bug" },
  { label: "Stated date:", value: "2025-05-29" },
  { label: "Target date:", value: "2025-05-29" },
];

export default function PropertiesPanel() {
  const InfoRow = ({
    label,
    value,
    colorClass = "text-gray-600",
  }: InfoRowItem) => (
    <div className="flex">
      <span className="text-gray-600 w-[50%]">{label}</span>
      <div className="flex items-center gap-1">
        <ChevronDown color="#7C7C7C" size={16} />
        <span className={colorClass}>{value}</span>
      </div>
    </div>
  );

  return (
    <div className="w-64 gap-2">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-1">
          <h2 className="text-md font-semibold text-gray-600">Properties</h2>
          <ChevronDown color="#7C7C7C" size={16} />
        </div>
        <ChevronRight color="#7C7C7C" />
      </div>
      <Separator />
      <div className="flex flex-col gap-2 text-sm p-4">
        {infoRows.map((row) => (
          <InfoRow key={row.label} {...row} />
        ))}
      </div>
    </div>
  );
}
