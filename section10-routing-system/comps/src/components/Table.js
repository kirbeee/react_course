function Table({data, config}) {
    const renderedHeaders = config.map((header) => {
        return <th key={header.label}>{header.label}</th>
    })

    const renderedRows = data.map((fruit) => {
        const renderCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(fruit)}</td>
        })
        return (
            <tr className="border-b-2" key={fruit.name}>
                {renderCells}
            </tr>
        )
    })
    return (
      <table className="table-auto border-spacing-2">
          <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
          </thead>
          <tbody>
          {renderedRows}
          </tbody>
      </table>
  );
}

export default Table;