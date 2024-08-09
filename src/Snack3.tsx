import { Link } from "react-router-dom";

function Snack3() {
    return (
        <div>
            <h1>Snack 3</h1>
            <p>This is the best snack of all!</p>
            <Link to="/">Go back to the Vending Machine</Link>
        </div>
    );
}

export default Snack3;
