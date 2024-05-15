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
        <div className="bg-white border-2 border-slate-300 rounded-xl p-4 shadow-sm hover:cursor-pointer hover:bg-slate-100/65">
            <p className="text-sm font-semibold">{ deliveryDate }</p>
            <p className="text-sm text-slate-500">{ orderRef }</p>
            <p className="text-sm text-slate-500">{ customerName }</p>
            <p className="text-sm text-slate-500">{ address }</p>
            <p className="text-sm text-slate-500">{ deliveryOption } of { orderItems } item{orderItems !== 1 ? 's' : ''}</p>           
            <p className="text-sm text-slate-500">£{ invoice }</p>            
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