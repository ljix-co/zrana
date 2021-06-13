import logo_title from '../logo.svg';
import search_ico from '../images/search_icon.svg';
import './style/Pantry.css'
const Pantry = () => {
    return ( 
        <div className="blog">
            <div className="title">
              <h1><img src={logo_title} alt="" /> RECEPTI PREMA SASTOJCIMA IZ VAŠE KUHINJE
              </h1> 
                <p>Unesite sastojke koje imate, a mi ćemo Vam odmah predložiti recepte.</p>
            </div>
            <div className="search-field">
                <input type="text" placeholder="Unesite pretragu"/>
                <button className="btn-search"><img src={search_ico} alt="" /></button>
            </div>
        </div>
     );
}
 
export default Pantry;