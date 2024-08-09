import { Link } from "react-router-dom";

function Snack2() {
    return (
        <div>
            <h1>Snack 2</h1>
            <p>This snack is even better!</p>
            <Link to="/">Go back to the Vending Machine</Link>
        </div>
    );
}

export default Snack2;
