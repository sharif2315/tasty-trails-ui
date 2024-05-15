import React from "react";

// TODO: Card for Top 5 Selling Products
// fields: imgUrl, name, quantitySold, totalSales

interface CardItemProps {
    customerName: string;
    orderRef: string;
    orderItems: number;
    deliveryDate: string; // includes pickup order as well, rename??
    deliveryOption: string // use DeliveryOption type/enum
    address?: string; // address to drop off order
    invoice: number;
}
const CardItem: React.FC<CardItemProps> = ({ orderRef ,orderItems, customerName ,deliveryOption,deliveryDate, address, invoice }) => {
    return (
        <div className="bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-slate-400/50 rounded-xl p-4 shadow-sm hover:cursor-pointer   text-sm text-slate-500 hover:text-slate-700">
            <p className="font-semibold">{ deliveryDate }</p>
            <p>{ orderRef }</p>
            <p>{ customerName }</p>
            <p>{ address }</p>
            <p>{ deliveryOption } of { orderItems } item{orderItems !== 1 ? 's' : ''}</p>           
            <p>£{ invoice }</p>            
        </div>
    )
}

const OrdersCard = () => {
    return (
        <div className="grid gap-4">

            <h1 className="font-bold text-2xl">Pending Orders</h1>
            
            <div className="grid gap-4">
                <CardItem
                    orderRef="#C21S54"
                    orderItems={1}
                    customerName="Timothy Mclean"
                    deliveryDate="31st October 2024" 
                    deliveryOption="Delivery" 
                    address="123 Fake Street, London, E1 4LJ"
                    invoice={85} 
                />
                <CardItem
                    orderRef="#C21S54"
                    orderItems={12}
                    customerName="James Dean"
                    deliveryDate="31st October 2024" 
                    deliveryOption="Pickup" 
                    address="123 Fake Street, London, E1 4LJ"
                    invoice={85} 
                />
                <CardItem
                    orderRef="#C21S54"
                    orderItems={34}
                    customerName="Stacy Connor"
                    deliveryDate="31st October 2024" 
                    deliveryOption="Delivery" 
                    address="123 Fake Street, London, E1 4LJ"
                    invoice={85} 
                />
                <CardItem
                    orderRef="#C21S54"
                    orderItems={25}
                    customerName="Jean Brandy"
                    deliveryDate="31st October 2024" 
                    deliveryOption="Pickup" 
                    address="123 Fake Street, London, E1 4LJ"
                    invoice={85} 
                />
                <CardItem 
                    orderRef="#C21S54"
                    orderItems={19}
                    customerName="Beth Jetts"
                    deliveryDate="31st October 2024" 
                    deliveryOption="Delivery" 
                    address="123 Fake Street, London, E1 4LJ"
                    invoice={85} 
                />
            </div>
            
        </div>
    )
}

export default OrdersCard