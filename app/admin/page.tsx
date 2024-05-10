import AdminSidebar from "@/components/AdminSidebar"
import AdminTable from "@/components/AdminTable"
import Navbar from "@/components/Navbar"
import NavbarTW from "@/components/Navbar_tw"
import StatsSection from "@/components/StatsSection"

const Admin = () => {
    return (
        <div className="grid grid-cols-12 bg-slate-100/65">

            <div className="col-span-2">
                <AdminSidebar />
            </div>

            <div className="col-span-10 col-start-3 sm:ml-16 px-4 bg-yellow-200">
                <div className="grid place-content-center bg-pink-200">
                    <Navbar />
                    <StatsSection/>
                    {/* <AdminTable/> */}
                </div>

            </div>

        </div>
    )
}

export default Admin