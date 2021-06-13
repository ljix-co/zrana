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
                <input type="text" placeholder="Unesite pretragu"/>
                <button className="btn-search"><img src={search_ico} alt="" /></button>
            </div>
        </div>
     );
}
 
export default Recepies;