import {useEffect, useState} from "react";

function useCounter (initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count)
    }, [count]);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return {count, increment: handleClick};
}

export default useCounter;