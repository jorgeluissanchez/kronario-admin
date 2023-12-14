import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex border-b items-center p-4 justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            <Link href="/admin">Phylo</Link>
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm font-medium transition-colors hover:text-primary">
            sign out
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-[calc(100vh-65px)]">
        <div className="w-64 border-r hidden md:block">
        <Sidebar />
        </div>
        <div className="overflow-y-auto w-full md:w-[calc(100vw-16rem)]">
          {children}
          </div>
      </div>
    </div>
  );
}
