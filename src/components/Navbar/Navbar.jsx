import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/practice">Practice</Link>

        </div>
    )
}

export default Navbar;