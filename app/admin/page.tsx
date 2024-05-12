import AdminSidebar from "@/components/AdminSidebar"
import AdminTable from "@/components/AdminTable"
import Navbar from "@/components/Navbar"
import StatsSection from "@/components/StatsSection"

const Admin = () => {
    return (
        <div className="flex bg-slate-100/65">

            <AdminSidebar />

            <div className="px-8 w-full">
                <div className="grid">
                    <Navbar />
                    <StatsSection />
                    {/* <AdminTable/> */}
                </div>

            </div>

        </div>
    )
}

export default Admin