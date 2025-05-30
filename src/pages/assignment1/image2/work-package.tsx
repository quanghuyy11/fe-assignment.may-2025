import { Search } from "lucide-react";
import { WpCard } from "./wp-card";
import { WpCategorySidebar } from "./wp-category";

export default function WorkPackages() {
  const wpList = Array.from({ length: 9 }).map((_, i) => ({
    title: `Work package ${i + 1}`,
    description:
      "Define system structure, technology stack, and integration flow. Includes documentation of system...",
  }));

  return (
    <div className="flex overflow-hidden">
      <WpCategorySidebar />
      <div className="flex-1 px-6 py-4">
        <div className="flex items-center justify-end mb-4">
          <div className="relative w-64 w-full">
            <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              className="border text-sm pl-8 pr-3 py-1.5 rounded-md w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wpList.map((wp, i) => (
            <WpCard key={i} {...wp} />
          ))}
        </div>
      </div>
    </div>
  );
}
