import React from "react";

// Rewrite to display Upcoming Orders
// fields: date, venue? or Pickup, Occasion, Invoice

// TODO: Card for Top 5 Selling Products
// fields: imgUrl, name, quantitySold, totalSales

interface CardItemProps {
    title: string;
    figure: string;
}
const CardItem: React.FC<CardItemProps> = ({ title, figure }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold">{ figure }</h1>
            <p className="text-lg font-semibold text-slate-500">{ title }</p>
        </div>
    )
}

const OrdersCard = () => {
    return (
        <div className="grid gap-10 rounded-xl border-slate-200 border-2 bg-white place-content-center py-12">
            <CardItem title="Total Sales" figure="£538.79" />
            <CardItem title="Total Orders" figure="158" />
            <CardItem title="Products" figure="26" />
            <CardItem title="Categories" figure="10" />

        </div>
    )
}

export default OrdersCard