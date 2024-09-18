import {useDispatch,useSelector} from "react-redux";
import {removeCar} from "../store";

function CarList(){
    const dispatch = useDispatch();
    const cars = useSelector(({cars:{data, searchTerm }}) => {
        return data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }
    const renderedCars = cars.map((car) => {
       return(
           <div key={car.id} className="panel">
                <h3>{car.name}</h3>
                <p>{car.cost}</p>
               <button className="button is-danger" onClick={()=>handleCarDelete(car)}>Remove</button>
           </div>
       )
    });
    return (
        <div className="car-list">
            {renderedCars}
            <hr/>
        </div>
    )
}

export default CarList;