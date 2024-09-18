import CarForm from './components/CarForm.js';
import CarList from './components/CarList.js';
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";

function App(){
    return (
        <div>
            <CarForm/>
            <CarList/>
            <CarSearch/>
            <CarValue/>
        </div>
    )
}

export default App;