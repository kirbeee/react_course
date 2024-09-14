import Table from "./Table";

function SortableTable(props) {
    const { config } = props;

    const updatedConfig = config.map((column) => {
        return (column.sortValue) ? {
            ...column,
            header: () => <th>{column.label} IS sortAble</th>
        } : column
    })

    return <Table {...props} config={updatedConfig}/>;
}

export default SortableTable;