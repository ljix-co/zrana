import logo_title from '../logo.svg';
import search_ico from '../images/search_icon.svg';
import './style/Recepies.css'
const Recepies = () => {
    return (
        <div className="recepies">
            <div className="title">
                <h1> VAŠA <img src={logo_title} alt="" /> NA VAŠ NAČIN
              </h1>
                <p>Recepti koje su postavili registrovani korisnici.</p>
            </div>
            <div className="search-field">
                <input type="text" placeholder="Unesite pretragu" />
                <button className="btn-search"><img src={search_ico} alt="" /></button>
            </div>
            <div className="recipe">
                <img src="../images/home_img2.png" alt="" />
                <div className="rec-dtls">
                    <h2 className="rec-title">Rižoto sa tikvicama</h2>
                    <p className="rec-author">Autor: Vanja Savić</p>
                    <ul className="rec-ingrdnts">
                        <li>300gr priniča</li>
                        <li>350gr piletine</li>
                        <li>2 tikvice</li>
                        <li>glavica crvenog luka</li>
                        <li>2 crvene paprike</li>
                        <li>so</li>
                        <li>biber</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Recepies;