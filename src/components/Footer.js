import {Link} from "react-router-dom";

const Footer = () => (
    <ul className="list-group">

        <li className="list-group-item">
        <Link to="/state-components">State Components</Link>
        </li>

        <li className="list-group-item">
        <Link to="/">Home</Link>
        </li>
       
        <li className="list-group-item">
        <Link to= "/form-components">Form Components</Link>
        </li>
        
        <li className="list-group-item">
        <Link to= "/lifecycle-components">Lifecycle Components</Link>
        </li>
        
    </ul>
)

export default Footer;