import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import ShoppingCard from "@/assets/shopping-cart.svg";

interface WpCardProps {
  title: string;
  description: string;
}

export function WpCard({ title, description }: WpCardProps) {
  return (
    <div className="border rounded-md p-4 flex flex-col justify-between gap-4">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
          <ChevronRight size={20} className="text-gray-600" />
        </div>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
      </div>
      <div className="flex gap-1">
        <button className="w-6 h-6 border border-gray-300 bg-tab-blue text-blue-600 text-xs flex items-center justify-center">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
        <button className="w-6 h-6 border border-gray-300 bg-tab-blue text-blue-600 text-xs flex items-center justify-center">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button className="text-base px-3 py-1 h-7 text-common-blue bg-detail-gray hover:bg-blue-100">
          View Detail
        </Button>
        <img src={ShoppingCard} />
      </div>
    </div>
  );
}
