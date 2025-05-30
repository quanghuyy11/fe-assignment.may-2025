import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function WpTab() {
  return (
    <Tabs defaultValue="rfx" className="mb-4">
      <TabsList>
        <TabsTrigger value="rfx">RFX WPs</TabsTrigger>
        <TabsTrigger value="custom">Custom WPs</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}