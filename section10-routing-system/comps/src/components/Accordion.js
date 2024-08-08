import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from"react-icons/go"

function Accordion({ items }) {
    const [expendIndex, setExpendIndex] = useState(0)

    const handleClick = (nextIndex) => {
        setExpendIndex(nextIndex)
    }

    const renderedItems = items.map((item,index) => {
        const isExpanded = index === expendIndex;

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    )
}

export default Accordion