import AppAside from "../app-aside/app-aside";
import Breadcrumbs from "../breadscrumb/breadscrumb";

const breadcrumbData = [
  { label: "Project" },
  { label: "UrapidLoan Project" },
  { label: "[Ticket Name]" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <AppAside isCollapse={false} />
      <div className="flex-1 flex flex-col overflow-hidden ml-6">
        <div className="border-b py-4">
          <Breadcrumbs items={breadcrumbData} />
        </div>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
