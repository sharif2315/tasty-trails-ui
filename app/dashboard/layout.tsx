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

        <div className="sm:ml-44 ml-20 px-8 pb-10 w-full">
            <div className="grid">
                <Navbar />
                {children}
                {/* <StatsSection />
                <OrdersSection /> */}
            </div>
        </div>
    </div>
    )
  }