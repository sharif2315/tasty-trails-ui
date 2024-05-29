import OrdersTableView from "@/components/OrdersTable/TableView"

const Orders = () => {
    return (
        <div className="grid gap-4">
            <h1 className="font-bold text-2xl">Orders</h1>
            <OrdersTableView />
        </div>
    )
}
export default Orders