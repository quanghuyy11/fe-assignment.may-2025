import AppAside from "../app-aside/app-aside";
import { Header } from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <AppAside isCollapse={true} />
      <div className="flex-1 flex flex-col overflow-hidden ml-6">
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
