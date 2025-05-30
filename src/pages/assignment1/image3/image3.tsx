import MainLayout from "./main-layout";
import { Header } from "./header";
import { SidebarFilter } from "./sidebar-filter";
import { UserDetailPanel } from "./user-detail-panel";
import { UserTable } from "./user-table";

export default function Image3() {
  return (
    <MainLayout>
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <SidebarFilter />
        <UserTable />
        <UserDetailPanel />
      </main>
    </MainLayout>
  );
}
