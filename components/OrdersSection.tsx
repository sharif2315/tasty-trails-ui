import React from 'react'
import OrdersCardView from './OrdersCardView';
import OrdersTable from './OrdersTable';

// Recent Orders
// name, category, price
// orderRef, total items, delivery option, delivery date, Status, Invoice

const ordersdf = [
    {
        customerName: 'Adam Smith',
        orderRef: '#A23DY2',
        orderItems: 20,
        deliveryDate: '2024-04-21',
        deliveryOption: 'Delivery',
        status: 'Processing',
        address: '123 Fake Street, London, E1 4LJ',
        invoice: 65
    },
]
export const ordersData = Array.from({ length: 10 }, () => ordersdf).flat();


const OrdersSection = () => {
    return (

        <div className="grid gap-4">

            <h1 className="font-bold text-2xl">Recent Orders</h1>

            <div className='hidden md:block'>
                <OrdersTable />
            </div>

            <div className="md:hidden">
                <OrdersCardView />
            </div>


        </div>
    )
}

export default OrdersSection