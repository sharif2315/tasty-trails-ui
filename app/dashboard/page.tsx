// import Sidebar from "@/components/Sidebar"
import OrdersSection from "@/components/OrdersSection"
// import Navbar from "@/components/Navbar"
import StatsSection from "@/components/StatsSection"


const Dashboard = () => {
    return (
        <>  
            <StatsSection />
            <OrdersSection />
        </>
    )
}
export default Dashboard


// const Dashboard = () => {
//     return (
//         <div className="flex bg-slate-100/65 h-screen">

//             <Sidebar />

//             <div className="sm:ml-44 ml-20 px-8 pb-10 w-full">
//                 <div className="grid">
//                     <Navbar />
//                     <StatsSection />
//                     <OrdersSection />
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Dashboard