export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col h-screen bg-white">{children}</div>;
}