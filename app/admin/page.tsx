import AdminSidebar from "@/components/AdminSidebar"
import AdminTable from "@/components/AdminTable"
import Navbar from "@/components/Navbar"
import StatsSection from "@/components/StatsSection"
import OrdersCard from "@/components/OrdersCard"

const Admin = () => {
    return (
        <div className="flex bg-slate-100/65 h-screen">

            <AdminSidebar />

            <div className="sm:ml-44 ml-20 px-8 pb-10 w-full">
                <div className="grid">
                    <Navbar />
                    
                    <StatsSection />

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <AdminTable/>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <OrdersCard />
                        </div>                                             
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Admin