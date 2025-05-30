import { Bell, ChevronDown, Settings } from "lucide-react";
import UserDefault from "@/assets/user-default.svg";
import Home from "@/assets/home.svg";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-[#2B3A67] text-white px-4 py-2 shadow">
      <div className="flex items-center gap-20">
        <div className="text-green-400 font-normal text-base ms-12">COMPANY LOGO XXX</div>
        <div className="flex items-center gap-4">
          <img src={Home}></img>
          <div className="bg-[#DFE8F1] text-[#2B3A67] rounded px-3 py-1">
            <div className="text-[10px] text-left text-xs font-normal">Module</div>
            <div className="text-sm font-bold leading-tight -mt-0.5">USER MANAGEMENT</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <Bell size={20} className="text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <Settings size={20} className="text-white" />
        <div className="flex items-center gap-2 text-sm">
          <div className="rounded-full w-7 h-7 flex items-center justify-center">
            <img src={UserDefault} />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Mr. David Nguyen</div>
            <div className="text-xs text-gray-200">Home Company</div>
          </div>
          <ChevronDown size={20} />
        </div>
      </div>
    </header>
  );
}
