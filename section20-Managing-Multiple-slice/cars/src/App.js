import "bulma/css/bulma.css";
import './styles.css'
import CarForm from './components/CarForm.js';
import CarList from './components/CarList.js';
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";

function App(){
    return (
        <div className="container is-fluid">
            <CarForm/>
            <CarSearch/>
            <CarList/>
            <CarValue/>
        </div>
    )
}

export default App;