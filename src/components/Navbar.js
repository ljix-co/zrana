import { NavLink, useHistory, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import prof_icon from '../images/profile_icon.svg';
import { useEffect, useState } from 'react';

const Navbar = ({ loggedIn }) => {
    const location = useLocation();
    const history = useHistory();
    const [pathName, setPathName] = useState(location.pathname);
    const [class_name, setClassName] = useState('');
    const [windowWidth, setWindowWidth] = useState({ width: window.innerWidth });
    const [visible, setVisible] = useState(false);

    const handleOpenMenu = () => {
        if(!visible) {
            setVisible(true);
            setClassName('mob-nav-shown')
        }
       else if(visible) {
            setVisible(false);
            setClassName('mob-nav-hidden')
        }
    }


    useEffect(() => {
        return history.listen((location) => {
            if(location.pathname !== pathName) {
               
                if(window.innerWidth < 768) {
                    setClassName('mob-nav-hidden')
                }
                setPathName(location.pathname);
                console.log(location.pathname + 'vs' + pathName)
            }
        })
       
    }, [history])

    useEffect(() => {
        function handleResize() {
            setWindowWidth({ width: window.innerWidth })
            if(window.innerWidth < 768) {
                setClassName('mob-nav-hidden')
            }
            else if(window.innerWidth >= 768) {
                setClassName('nav-div')
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={location.pathname === '/' ? 'navbar-home' : 'navbar'}>
           <NavLink exact to="/"><img className="logo" src={logo} alt="" /></NavLink> 
            <p className="menu" onClick={handleOpenMenu}>meni</p>
            <div className={class_name}>
                <div className="nav-links">
                    <NavLink exact to="/" activeClassName="link-selected">početna</NavLink>
                    <NavLink to="/recipes" activeClassName="link-selected">recepti</NavLink>
                    <NavLink to="/blog" activeClassName="link-selected">blog</NavLink>
                    <NavLink to="/pantry" activeClassName="link-selected">špajz</NavLink>
                    {!loggedIn && <NavLink to="/login" activeClassName="link-selected">login</NavLink>}
                    {!loggedIn && <NavLink to="/registration" activeClassName="link-selected">registracija</NavLink>}
                    {loggedIn && <NavLink to="/profile" activeClassName="link-selected"><img className="prof-icon" src={prof_icon} alt="" /></NavLink>}
                </div>
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