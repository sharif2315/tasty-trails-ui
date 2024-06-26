import React from 'react'
import CardList from './CardList';
import Table from './Table';
import TableView from './TableView';

// Recent Orders
// name, category, price
// orderRef, total items, delivery option, delivery date, Status, Invoice

const ordersdf = [
    {
        customerName: 'Adam Smith',
        orderRef: '#A23DY2',
        orderItems: 20,
        deliveryDate: '21/04/2024',
        deliveryOption: 'Delivery',
        status: 'Processing',
        address: '123 Fake Street, London, E1 4LJ',
        invoice: 65
    },
]
export const ordersData = Array.from({ length: 10 }, () => ordersdf).flat();

const Section = () => {
    return (

        <div className="grid gap-4">
            <h1 className="font-bold text-2xl">Recent Orders</h1>
            <TableView/>
        </div>
    )
}

export default Section