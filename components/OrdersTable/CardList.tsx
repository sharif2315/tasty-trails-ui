import React from "react";
import { ordersData } from "./Section";

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
        <div className="card_item__base">
            <div className="flex justify-between">
                <p className="font-semibold">{deliveryDate}</p>
                <p>{orderRef}</p>
            </div>

            <div>
                <p>{customerName}</p>
                <p>{address}</p>
            </div>

            <div className="flex justify-between">
                <p>{deliveryOption} of {orderItems} item{orderItems !== 1 ? 's' : ''}</p>
                <p>£{invoice}</p>
            </div>
        </div>
    )
}

const CardList = () => {
    return (
        <div className="card_list__base">
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
    )
}

export default CardList