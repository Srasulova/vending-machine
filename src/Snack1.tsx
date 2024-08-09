import { Link } from "react-router-dom";

function Snack1() {
    return (
        <div>
            <h1>Snack 1</h1>
            <p>This is a tasty snack!</p>
            <Link to="/">Go back to the Vending Machine</Link>
        </div>
    );
}

export default Snack1;
