import React from 'react'
import { OrderProps } from './CardList'
import { ordersData } from './Section'


const TableRow: React.FC<OrderProps> = ({ orderRef, deliveryOption, deliveryDate, status, invoice }) => {
    return (
        <tr className='table__row'>
            <td>{orderRef}</td>
            <td>{deliveryOption}</td>
            <td>{deliveryDate}</td>
            <td>£{invoice}</td>
            <td>{status}</td>
        </tr>
    )
}

const Table = () => {
    return (
        <div className="table__outer">
            <table className="table__base">
                <thead className="table__head">
                    <tr className='table__head__row'>
                        <th>Order Ref</th>
                        <th>Delivery Option</th>
                        <th>Delivery Date</th>
                        <th>Invoice</th>
                        <th>Status</th>
                        {/* <th className="px-4 py-2"></th> */}
                    </tr>
                </thead>

                <tbody className="tbody__base">
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