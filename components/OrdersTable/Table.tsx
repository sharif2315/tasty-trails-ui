import React from 'react'
import { OrderProps } from './CardList'
import { ordersData } from './Section'


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

const Table = () => {
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
            {
                ordersData.map((order, index) => (
                    <TableRow
                        key={index}
                        orderRef={order.orderRef}
                        deliveryOption={order.deliveryOption}
                        deliveryDate={order.deliveryDate}
                        status={order.status}
                        invoice={order.invoice}
                    />
                ))
            }
        </tbody>
    </table>
</div>
  )
}

export default Table