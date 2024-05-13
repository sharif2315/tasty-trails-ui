import AdminSidebar from "@/components/AdminSidebar"
import AdminTable from "@/components/AdminTable"
import Navbar from "@/components/Navbar"
import StatsSection from "@/components/StatsSection"
import OrdersCard from "@/components/OrdersCard"

const Admin = () => {
    return (
        <div className="flex bg-slate-100/65">

            <AdminSidebar />

            <div className="sm:ml-44 ml-20 px-8 pb-10 w-full">
                <div className="grid">
                    <Navbar />
                    
                    <StatsSection />

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-9">
                            <AdminTable/>
                        </div>

                        <div className="col-span-3">
                            <OrdersCard />
                        </div>                                             
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Admin