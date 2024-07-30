import "./AnimalShow.css"
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import {useState} from "react";

const svgMap = {
    bird: bird,
    cat: cat,
    cow: cow,
    dog: dog,
    gator: gator,
    horse: horse,
}

function AnimalShow({type}) {
    const [clicks,setClicks ] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <div onClick={handleClick} className="animal-show">
            <img className="animal" src={svgMap[type]} alt={type} />
            <img
                className="heart"
                alt = "heart"
                src={heart}
                style={{ width: 10+10*clicks+'px'}}
            />
        </div>
    )
}

export default AnimalShow;
