import AdminSidebar from "@/components/AdminSidebar"
import AdminTable from "@/components/AdminTable"
import Navbar from "@/components/Navbar"

const Admin = () => {
    return (
        <div className="grid grid-cols-12 gap-4">

            <div className="col-span-2 fixed">
                <AdminSidebar />
            </div>

            <div className="col-span-10 col-start-3">
                <Navbar />
                {/* <AdminTable/> */}
            </div>

        </div>
    )
}

export default Admin