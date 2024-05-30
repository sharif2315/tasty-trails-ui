export interface Column {
    header: string;
    accessor: string;
}

interface RowData {
    [key: string]: any;
}

interface TableRowProps {
    rowData: RowData;
    columns: Column[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData, columns }) => {
    return (
        <tr className='hover:bg-slate-50 text-gray-700 hover:cursor-pointer'>
            {columns.map((column, index) => (
                <td key={index} className="whitespace-nowrap px-4 py-2">
                    {rowData[column.accessor]}
                </td>
            ))}
        </tr>
    );
};

interface TableHeaderProps {
    columns: Column[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
    return (
        <thead className="font-bold text-gray-900">
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className="whitespace-nowrap px-4 py-2">
                        {column.header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

interface TableBodyProps {
    data: RowData[];
    columns: Column[];
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => {
    return (
        <tbody className="divide-y divide-gray-200 text-center">
            {data.map((rowData, index) => (
                <TableRow key={index} rowData={rowData} columns={columns} />
            ))}
        </tbody>
    );
};

interface TableProps {
    columns: Column[];
    data: RowData[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <div className="overflow-x-auto rounded-sm border-slate-200 border-2">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <TableHeader columns={columns} />
                <TableBody data={data} columns={columns} />
            </table>
        </div>
    );
};