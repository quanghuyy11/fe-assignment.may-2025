import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SidebarFilter() {
  return (
    <aside className="w-72 border-r px-4 py-4 flex flex-col gap-2 text-sm">
      <div className="flex justify-between items-center font-medium text-gray-500">
        <span>FILTER</span>
        <Funnel size={16} className="text-gray-400" />
      </div>
      <Separator />
      <div className="mt-2">
        <Label className="text-xs text-gray-800">User name</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      </div>
      <div className="mt-2">
        <Label className="text-xs text-gray-800">User ID</Label>
        <Input placeholder="Input" className="text-xs" />
      </div>
      <div className="mt-2">
        <Label className="text-xs text-gray-800">User type</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      </div>
      <div className="mt-2">
        <Label className="text-xs text-gray-800">Phone number</Label>
        <Input placeholder="Input" className="text-xs" />
      </div>
      <div className="mt-2">
        <Label className="text-xs text-gray-800">Email address</Label>
        <Input placeholder="Input" className="text-xs" />
      </div>
      <div className="mt-2">
        <Label className="text-xs text-gray-800 mb-1">Status</Label>
        <div className="flex flex-col gap-3 mt-1">
          <div className="flex items-center gap-2">
            <Checkbox id="all" />{" "}
            <Label htmlFor="all" className="text-xs">
              All
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="active" />{" "}
            <Label htmlFor="active" className="text-xs">
              Active
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="inactive" />{" "}
            <Label htmlFor="inactive" className="text-xs">
              Inactive
            </Label>
          </div>
        </div>
      </div>
      <Button variant="outline" className="mt-auto w-full text-xs">
        Export Data
      </Button>
    </aside>
  );
}
