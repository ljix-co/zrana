import logo_title from '../logo.svg';
import search_ico from '../images/search_icon.svg';
import './style/Blog.css'
import ListBlog from '../components/ListBlog';
const Blog = () => {
    return ( 
        <div className="blogs">
            <div className="title">
              <h1> NAŠA <img src={logo_title} alt="" /> PREMA VAŠIM RECEPTIMA
              </h1> 
                <p>Odabir recepata registrovanih korisnika, spremljeni u našoj kuhinji.</p>
            </div>
            <div className="search-field">
                <input type="text" placeholder="Unesite pretragu"/>
                <button className="btn-search"><img src={search_ico} alt="" /></button>
            </div>
            <ListBlog/>
        </div>
     );
}

 
export default Blog;