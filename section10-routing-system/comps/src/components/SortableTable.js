import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown} from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable({data ,config, keyFn }) {
    const {sortedData,setSortColumn, sortBy,sortOrder}=useSort(data,config);
    const updatedConfig = config.map((column) => {
        return (column.sortValue) ? {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={()=>setSortColumn(column.label)}>
                <div className="flex items-center">
                {getIcon(column.label, sortBy, sortOrder)}
                {column.label}
                </div>
            </th>
        } : column
    })

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