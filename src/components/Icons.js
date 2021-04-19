
import { Link } from "react-router-dom";


function Icons({name, to}) {
    return (
        <Link className="icons" to={to}>
            {name}
        </Link>
)
}
export default Icons;





