import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex bg-slate-100/65 h-screen">
      <Sidebar />
      <div className="md:ml-56 pb-10 w-full">
        <div className="grid">
          <Navbar />
          <div className="px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}