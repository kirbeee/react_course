import {useSelector} from "react-redux";

function CarList(){
    const cars = useSelector(state => {
        return state.cars.data;
    });

    return (
        <div>
            <h1>Car List</h1>
        </div>
    )
}

export default CarList;