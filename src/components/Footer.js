import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import logo_lj from '../images/logo_lj.svg';
import mars from '../images/mars.svg';
import './Footer.css';
import arrow from '../images/arrow_left.svg'
const Footer = () => {
    const location = useLocation();
    return (
        <div className="footer" className={location.pathname === '/' ? 'footer-home' : 'footer-reg'}>
            {location.pathname === '/login' &&
                <div className="top-div">
                    <h1 className="top-div-title-reg">NEMATE PROFIL?</h1>
                    <Link className="top-link-reg" to="/registration">REGISTRACIJA</Link>
                </div>
                }
                 {location.pathname !== '/login' &&
                <div className="top-div">
                    <h1 className="top-div-title">IMATE PROFIL?</h1>
                    <Link className="top-link" to="/login">LOGIN</Link>
                </div>
                }
                <div className="bottom-div">
                <div className="b-top-div">
                    <img className="f-logo" src={logo} alt="" />
                    <div className="links">
                        <Link className="link" to="/registration"> <p>REGISTRACIJA</p>  <img src={arrow} alt="" /></Link>
                        <Link className="link" to="/login"> <p>LOGIN</p>  <img src={arrow} alt="" /></Link>
                    </div>
                </div>
                <div className="b-bottom-div">
                <p>Designed and coded by 
                <a target="_blank" href="https://ljiljanamarinkovic.com/"><img className="logo_lj" src={logo_lj} alt="" /></a> 
                    Supported and hosted by 
                   <a target="_blank" href="https://www.mars-server.net/"><img className="mars" src={mars} alt="" /></a>
                    .</p>
                <p>&copy; 2021</p>
                </div>
                </div>
        </div>
    );
}

export default Footer;