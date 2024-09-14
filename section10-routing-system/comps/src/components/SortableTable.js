import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown} from "react-icons/go";

function SortableTable({data ,config, keyFn }) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        switch (sortOrder) {
            case sortBy && label !== sortBy:
                setSortOrder('asc');
                setSortBy(label);
                break;
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
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={()=>handleClick(column.label)}>
                <div className="flex items-center">
                {getIcon(column.label, sortBy, sortOrder)}
                {column.label}
                </div>
            </th>
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

    return <Table keyFn={keyFn} data={sortedData} config={updatedConfig}/>
}

function getIcon(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>
    }
    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>
    }
    else if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp/>
        </div>
    } else if(sortOrder === 'desc') {
        return <div>
            <GoArrowSmallDown/>
        </div>
    }
}

export default SortableTable;