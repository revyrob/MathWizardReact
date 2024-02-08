import './Header.scss';
import {Link} from "react-router-dom";

function Header() {

    return(
        <header className='header'>
            <Link to="/">Home</Link>
        </header>
    );
}

export default Header;