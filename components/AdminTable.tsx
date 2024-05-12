import React from 'react'


interface TableRowProps {
    name: string;
    dob: string;
    role: string;
    salary: string;
}

const TableRow: React.FC<TableRowProps> = ({ name, dob, role, salary }) => {
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{name}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{dob}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{role}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{salary}</td>
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
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <TableRow name='Fahima Akhter' dob='06/04/1993' role='Architect' salary='30,000'  />
                    <TableRow name='Fahima Akhter' dob='06/04/1993' role='Architect' salary='30,000'  />
                    <TableRow name='Fahima Akhter' dob='06/04/1993' role='Architect' salary='30,000'  />
                    <TableRow name='Fahima Akhter' dob='06/04/1993' role='Architect' salary='30,000'  />
                    
                </tbody>
            </table>
        </div>
    )
}

export default AdminTable