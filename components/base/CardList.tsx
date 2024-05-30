export interface Column {
    header: string;
    accessor: string;
}

interface RowData {
    [key: string]: any;
}

interface CardItemProps {
    rowData: RowData;
    columns: Column[];
}

const CardItem: React.FC<CardItemProps> = ({ rowData, columns }) => {
    return (
        <div className="grid gap-2 bg-white hover:bg-slate-50 p-4 shadow-sm hover:cursor-pointer text-sm text-gray-700">
            {columns.map((column, index) => (
                <div key={index} className="flex justify-between">
                    <p className="font-semibold">{column.header}</p>
                    <p>{rowData[column.accessor]}</p>
                </div>
            ))}
        </div>
    );
};

interface CardListProps {
    columns: Column[];
    data: RowData[];
}

export const CardList: React.FC<CardListProps> = ({ columns, data }) => {
    return (
        <div className="grid gap-4">
            <div className="grid divide-y-2 divide-gray-200 border-slate-200 border-2 rounded-sm">
                {data.map((rowData, index) => (
                    <CardItem key={index} rowData={rowData} columns={columns} />
                ))}
            </div>
        </div>
    );
};