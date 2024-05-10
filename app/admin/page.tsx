import AdminSidebar from "@/components/AdminSidebar"
import AdminTable from "@/components/AdminTable"
import Navbar from "@/components/Navbar"
import NavbarTW from "@/components/Navbar_tw"

const Admin = () => {
    return (
        <div className="grid grid-cols-12 bg-slate-100">

            <div className="col-span-2">
                <AdminSidebar />
            </div>

            <div className="col-span-10 col-start-3 sm:ml-16">
                <Navbar />
                {/* <AdminTable/> */}
            </div>

        </div>
    )
}

export default Admin