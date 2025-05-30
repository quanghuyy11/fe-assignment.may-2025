import { Separator } from "@/components/ui/separator";
import { WpTab } from "./wp-tab";

const categories = [
  "All Work Packages",
  "Architectural WPs",
  "Development WPs",
  "Operation WPs",
  "Basic",
  "Comprehensive",
  "Advanced",
];

export function WpCategorySidebar() {
  return (
    <aside className="w-60 pt-4">
      <WpTab />
      <div className="text-normal text-gray-800 font-medium mb-2">Categories</div>
      <ul className="flex flex-col gap-1 text-sm text-gray-600 mb-6 gap-2">
        {categories.map((cat, i) => (
          <li
            key={i}
            className={
              i === 0
                ? "text-common-blue font-medium cursor-pointer"
                : "cursor-pointer hover:text-blue-500 text-common-gray"
            }
          >
            {cat}
            <Separator className="mt-1" />
          </li>
        ))}
      </ul>
    </aside>
  );
}
