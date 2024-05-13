import React from 'react'

// Recent Orders
// name, category, price
// orderRef, total items, delivery option, delivery date, Status, Invoice

interface TableRowProps {
    orderRef: string;
    // totalItems: number;
    deliveryOption: string;
    deliveryDate: string;
    status: string,
    invoice: number
}

const TableRow: React.FC<TableRowProps> = ({ orderRef, deliveryOption, deliveryDate, status, invoice }) => {
    return (
        <tr className='hover:bg-slate-100/65 text-gray-700'>
            <td className="whitespace-nowrap px-4 py-2">{orderRef}</td>
            <td className="whitespace-nowrap px-4 py-2">{deliveryOption}</td>
            <td className="whitespace-nowrap px-4 py-2">{deliveryDate}</td>
            <td className="whitespace-nowrap px-4 py-2">{invoice}</td>
            <td className="whitespace-nowrap px-4 py-2">{status}</td>
            <td className="whitespace-nowrap px-4 py-2">
                <a
                    href="#"
                    className="inline-block rounded bg-slate-800 px-4 py-2 text-xs font-medium text-white hover:bg-slate-700"
                >
                    View
                </a>
            </td>
        </tr>
    )
}

const AdminTable = () => {
    return (
        <div className="overflow-x-auto rounded-xl border-slate-200 border-2">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Order ID</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Delivery Option</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Delivery Date</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Invoice</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-center">
                    <TableRow orderRef='#A2SHE2' deliveryOption='PICKUP' deliveryDate='13/05/2024' status='PROCESSING' invoice={15.99}  />
                    <TableRow orderRef='#A2SHE2' deliveryOption='DELIVERY' deliveryDate='13/05/2024' status='PROCESSING' invoice={27.99}  />
                    <TableRow orderRef='#A2SHE2' deliveryOption='DELIVERY' deliveryDate='13/05/2024' status='PROCESSING' invoice={35.99}  />
                    <TableRow orderRef='#A2SHE2' deliveryOption='PICKUP' deliveryDate='13/05/2024' status='PROCESSING' invoice={75.99}  />

                    {[...Array(10)].map((_, index) => (
                        <TableRow 
                            key={index} 
                            orderRef={`#A2SHE${index + 1}`} 
                            deliveryOption='PICKUP' 
                            deliveryDate='13/05/2024' 
                            status='PROCESSING' 
                            invoice={15.99}  
                        />
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default AdminTable