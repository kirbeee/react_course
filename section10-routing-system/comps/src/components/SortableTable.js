import { useState } from "react";
import Table from "./Table";

function SortableTable({data ,config, keyFn }) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        switch (sortOrder) {
            case 'asc':
                setSortOrder('desc');
                setSortBy(label);
                break;
            case 'desc':
                setSortOrder(null);
                setSortBy(null);
                break;
            case null:
                setSortOrder('asc');
                setSortBy(label);
                break;
        }

    }

    const updatedConfig = config.map((column) => {
        return (column.sortValue) ? {
            ...column,
            header: () => <th onClick={()=>handleClick(column.label)}>{column.label} IS sortAble</th>
        } : column
    })

    let sortedData = data;
    if (sortOrder && sortBy) {
        const {sortValue} = config.find((column) => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = (sortOrder === 'asc') ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }else{
                return (valueA - valueB) * reverseOrder;
            }
        })
    }

    return (
        <div>{sortOrder} - {sortBy}
        <Table keyFn={keyFn} data={sortedData} config={updatedConfig}/>
        </div>
)
}

export default SortableTable;