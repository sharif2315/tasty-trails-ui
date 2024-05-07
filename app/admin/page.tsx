import AdminSidebar from "@/components/AdminSidebar"
import AdminTable from "@/components/AdminTable"

const Admin = () => {
    return (
        <div className="grid grid-cols-10 gap-4">

            <div className="col-span-2 fixed">
                <AdminSidebar />
            </div>

            <div className="col-span-8">
                <AdminTable/>
            </div>

        </div>
    )
}

export default Admin