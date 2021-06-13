import { Link } from 'react-router-dom';
import logo_title from '../images/logo_home_title.svg';
import logo from '../logo.svg';
import arrowLeft from '../images/arrow_left.svg';
import './style/Home.css';
const Home = () => {
    return (
        <div className="home">
            <div className="line-grn-l"></div>
            <div className="line-grn-s"></div>
            <div className="floating-btn">
                <div className="link">
                    <Link to="/registration">REGISTRACIJA</Link>
                </div>
            </div>
            <div className="title">
                <img src={logo_title} alt="" />
                <p>Web aplikacija za razmenu recepata i kulinarskih umeća.</p>
            </div>
            <div className="main">
                <div className="content">
                    <div className="content-main">
                        <div className="l-side">
                            <h1>ZDRAVA HRANA?</h1>
                            <p><img className="logo" src={logo} alt="" /> !</p>
                            <img className="img" src="../images/home_img1.png" alt="" />
                        </div>
                        <div className="r-side">
                            <div className="txt">
                                <p>Pojeli biste nešto ukusno a zdravo?
                            A da pritom ne morate da izlazite iz kuće?</p>
                                <p>
                                    Žao nam je, ali niste na samo klik do dobre klope.
                            Moraćete da zavrnete rukave i pokažete svoju kreativnost u kuhinji.</p>
                                <p>
                                    Ako očekujete samo salatice i nemasni zeleniš, opet ćemo Vas razočarati.
                                    Mi verujemo da je zdravo sve ono što nam prija, što nam inspiriše sva čula i daje nam želju da nastavimo sa
                            uživanjem u spremanju hrane.</p>
                                <p>
                                    Ali oko neizlaska iz kuće Vam možemo pomoći samo u slučaju da neke namirnice ipak imate pri ruci.
                            Potrebno je samo da unesete listu, a mi ćemo Vam odmah predložiti recepte koje imamo na raspolaganju.</p>
                                <p>
                                    Ako želite da sa nama podelite svoju kreativnost i znanje u vidu recepata za slasnu hranu, potrebno je
                                    samo da se registrujete kako biste objavili recepte, tekstove, videe i sve ostalo što ima veze sa
                            zdravom ‘ranom na Vaš i naš način.</p>
                            </div>
                            <Link className="link-orng" to='/registration'> <p>REGISTRACIJA</p>  <img src={arrowLeft} alt="" /></Link>
                            <Link className="link-grn" to='/pantry'> <p>ŠPAJZ</p>   <img src={arrowLeft} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-sub">
                        <p className="title">
                            NAŠ IZBOR NA NAŠ NAČIN
                        </p>
                        <p>Sve recepte koji su postavljeni na sajtu, mi ćemo pročitati, a neke od njih ćemo i iskoristiti
                        da zadovoljimo svoja nepca. Snimke pripreme prema odabranim receptima možete pogledati na blog stranici.
                        Naravno, sve zasluge biće pripisane autoru recepta.
                        </p>
                        <Link className="link-grn" to="/recepies"><p>RECEPTI</p><img className="arrow" src={arrowLeft} alt="" /></Link>
                        <Link className="link-orng" to="/blog"><p>BLOG</p><img className="arrow" src={arrowLeft} alt="" /></Link>
                        <img className="img-sub" src="../images/home_img2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;