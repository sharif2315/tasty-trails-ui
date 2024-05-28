import React from "react";
import { ordersData } from "./OrdersSection";

// TODO: Card for Top 5 Selling Products
// fields: imgUrl, name, quantitySold, totalSales

export interface OrderProps {
    customerName?: string;
    orderRef: string;
    orderItems?: number;
    deliveryDate: string; // includes pickup order as well, rename??
    deliveryOption: string // use DeliveryOption type/enum
    status: string,
    address?: string; // address to drop off order
    invoice: number;
}
const CardItem: React.FC<OrderProps> = ({ orderRef, orderItems, customerName, deliveryOption, deliveryDate, address, invoice }) => {
    return (
        <div className="grid gap-1 bg-white hover:bg-slate-50 p-4 shadow-sm hover:cursor-pointer text-sm text-slate-500 hover:text-slate-700">
            <div className="flex justify-between">
                <p className="font-semibold">{ deliveryDate }</p>
                <p>{ orderRef }</p>
            </div>

            <div>
                <p>{ customerName }</p>
                <p>{ address }</p>
            </div>

            <div className="flex justify-between">
                <p>{ deliveryOption } of { orderItems } item{orderItems !== 1 ? 's' : ''}</p>           
                <p>£{ invoice }</p>      
            </div> 
        </div>
    )
}

const OrdersCardView = () => {
    return (
        <div className="grid gap-4">

            {/* <h1 className="font-bold text-2xl">Notifications</h1> */}
            
            <div className="grid divide-y-2 divide-gray-200 border-slate-200 border-2 rounded-sm">
                {
                    ordersData.map((order, index) => (
                        <CardItem
                            key={index}
                            orderRef={order.orderRef}
                            orderItems={order.orderItems}
                            customerName={order.customerName}
                            deliveryDate={order.deliveryDate}
                            deliveryOption={order.deliveryOption}
                            address={order.address}
                            invoice={order.invoice}
                            status={order.status}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default OrdersCardView