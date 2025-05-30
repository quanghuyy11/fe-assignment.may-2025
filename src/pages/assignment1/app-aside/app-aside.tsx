import {
  LayoutDashboard,
  CircleHelp,
  SquarePen,
  TabletSmartphone,
  BookOpenText,
  Grid2x2,
  type LucideIcon,
  ExternalLink,
} from "lucide-react";
import RiverFlow from "@/assets/river-flow.svg";
import RiverFlowCollapse from "@/assets/river-flow-collapse.svg";
import CompanyLogo from "@/assets/company-logo.svg";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface menuItem {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

const menuTopItems: menuItem[] = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Inquiries", icon: CircleHelp },
  { label: "Estimator", icon: Grid2x2 },
  { label: "Projects", icon: SquarePen, active: true },
];

const menuBottomItems: menuItem[] = [
  { label: "Administrations", icon: TabletSmartphone },
  { label: "Documentation", icon: BookOpenText },
];

interface AppAsideProps {
  isCollapse?: boolean;
}

export default function AppAside({ isCollapse = false }: AppAsideProps) {
  const riverFlowImage = useMemo(() => {
    return isCollapse ? (
      <img src={RiverFlowCollapse} alt="River Logo" className="w-8 h-8" />
    ) : (
      <img src={RiverFlow} alt="River Logo" />
    );
  }, [isCollapse]);

  return (
    <aside
      className={cn(
        "h-screen bg-gray-100 flex flex-col justify-between p-4",
        isCollapse ? "w-16" : "w-64"
      )}
    >
      <div>
        <div
          className={cn(
            "flex items-center gap-4 mb-8",
            isCollapse && "justify-center"
          )}
        >
          <img
            src={CompanyLogo}
            alt="Avatar"
            className="w-10 h-10 object-cover"
          />
          {!isCollapse && (
            <div>
              <div className="font-bold text-blue-900 text-lg">ABC Company</div>
              <div className="text-blue-700 text-base">Lisa Rose</div>
            </div>
          )}
        </div>

        <nav className="flex flex-col gap-1">
          {menuTopItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Button
                key={i}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-gray-600 gap-2",
                  isCollapse && "justify-center",
                  item.active && "bg-gray-200 hover:bg-gray-300"
                )}
              >
                <Icon className="h-5 w-5" />
                {!isCollapse && item.label}
              </Button>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-1">
        {menuBottomItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <Button
              key={i}
              variant="ghost"
              className={cn(
                "w-full justify-start text-gray-600 gap-2",
                isCollapse && "justify-center"
              )}
            >
              <Icon className="h-5 w-5" />
              {!isCollapse && item.label}
            </Button>
          );
        })}

        <div
          className={cn(
            "mt-4 flex items-center",
            isCollapse ? "justify-center" : "justify-between"
          )}
        >
          {riverFlowImage}
          {!isCollapse && (
            <a href="#" className="text-muted-foreground hover:text-primary">
              <ExternalLink color="#005AB6" />
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
