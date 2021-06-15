import { NavLink, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className={location.pathname === '/' ? 'navbar-home' : 'navbar'}>
            <img src={logo} alt="" />
            <div className="nav-links">
                <NavLink exact to="/" activeClassName="link-selected">početna</NavLink>
                <NavLink to="/recipes" activeClassName="link-selected">recepti</NavLink>
                <NavLink to="/blog" activeClassName="link-selected">blog</NavLink>
                <NavLink to="/pantry" activeClassName="link-selected">špajz</NavLink>
                <NavLink to="/login" activeClassName="link-selected">login</NavLink>
                <NavLink to="/registration" activeClassName="link-selected">registracija</NavLink>
            </div>
            <div className="line-orng-s"></div>
            <div className="line-orng-l"></div>
            <div className="line-grn-s"></div>
            <div className="line-grn-l"></div>
            <div className="line-grn"></div>
        </div>
    );
}

export default Navbar;