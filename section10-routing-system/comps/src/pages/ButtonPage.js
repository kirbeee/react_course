import {GoBell} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage(){
    return (
        <div>
            <div>
                <Button primary rounded outline><GoBell className="mr-1"/>Testing</Button>
            </div>
            <div>
                <Button secondary>Testing</Button>
            </div>
            <div>
                <Button success>Testing</Button>
            </div>
            <div>
                <Button warning>Testing</Button>
            </div>
            <div>
                <Button danger>Testing</Button>
            </div>
            <h1>App</h1>
        </div>
    )
}

export default ButtonPage