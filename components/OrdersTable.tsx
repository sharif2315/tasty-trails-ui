import React from 'react'
import { OrderProps } from './OrdersCardView'


const TableRow: React.FC<OrderProps> = ({ orderRef, deliveryOption, deliveryDate, status, invoice }) => {
    return (
        <tr className='hover:bg-slate-50 text-gray-700 hover:cursor-pointer'>
            <td className="whitespace-nowrap px-4 py-2">{orderRef}</td>
            <td className="whitespace-nowrap px-4 py-2">{deliveryOption}</td>
            <td className="whitespace-nowrap px-4 py-2">{deliveryDate}</td>
            <td className="whitespace-nowrap px-4 py-2">£{invoice}</td>
            <td className="whitespace-nowrap px-4 py-2">{status}</td>
        </tr>
    )
}

const OrdersTable = () => {
  return (
    <div className="overflow-x-auto rounded-sm border-slate-200 border-2">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="font-bold text-gray-900">
            <tr>
                <th className="whitespace-nowrap px-4 py-2">Order ID</th>
                <th className="whitespace-nowrap px-4 py-2">Delivery Option</th>
                <th className="whitespace-nowrap px-4 py-2">Delivery Date</th>
                <th className="whitespace-nowrap px-4 py-2">Invoice</th>
                <th className="whitespace-nowrap px-4 py-2">Status</th>
                {/* <th className="px-4 py-2"></th> */}
            </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 text-center">
            <TableRow orderRef='#A2SHE2' deliveryOption='Pickup' deliveryDate='13/05/2024' status='Processing' invoice={15.99} />
            <TableRow orderRef='#A2SHE2' deliveryOption='Delivery' deliveryDate='13/05/2024' status='Processing' invoice={27.99} />
            <TableRow orderRef='#A2SHE2' deliveryOption='Delivery' deliveryDate='13/05/2024' status='Processing' invoice={35.99} />
            {/* <TableRow orderRef='#A2SHE2' deliveryOption='PICKUP' deliveryDate='13/05/2024' status='PROCESSING' invoice={75.99}  /> */}

            {[...Array(10)].map((_, index) => (
                <TableRow
                    key={index}
                    orderRef={`#A2SHE${index + 1}`}
                    deliveryOption='Pickup'
                    deliveryDate='13/05/2024'
                    status='Completed'
                    invoice={15.99}
                />
            ))}

        </tbody>
    </table>
</div>
  )
}

export default OrdersTable