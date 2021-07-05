import logo_title from '../logo.svg';
import search_ico from '../images/search_icon.svg';
import './style/Recepies.css'
import ListRecipes from '../components/ListRecipes';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {  getIngr, findRecBlog } from '../HelperFunctions';
import {Helmet} from 'react-helmet';

const Recepies = ({bUrl}) => {

    const [recipes, setRec] = useState();
    const [isPending, setIsPending] = useState(true);
    const [srchTitle, setSrch] = useState('');
    const [found, setFound] = useState();

    const handleSrch = () => {
        findRecBlog(srchTitle, setFound, recipes);
    }

    const getData = () => {
        setIsPending(true);
        axios.get(bUrl + 'recipes').then(res => {
            console.log(res);
            let recs = res.data.data;
            getIngr(recs, bUrl, setRec, setIsPending, axios);
        })
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="recepies">
            <Helmet>
                <meta name="description" content="Z'Rana recepti registrovanih korisnika."/>
                <meta id="og-title" property="og:title" content="Z'RANA recepti"/>
                <meta id="og-image" property="og:image" content={logo_title} />
            </Helmet>
            <div className="title">
                <h1> VAŠA <img src={logo_title} alt="" /> NA VAŠ NAČIN
              </h1>
                <p>Recepti koje su postavili registrovani korisnici.</p>
            </div>
            <div className="search-field">
                <input type="text" 
                 value={srchTitle}
                 onChange={(e) => setSrch(e.target.value)}
                placeholder="Unesite pretragu" />
                <button className="btn-search" onClick={handleSrch}><img src={search_ico} alt="" /></button>
            </div>
            {isPending && (
                <h1>Učitavam...</h1>
            )}
           { isPending === false && recipes && found ? ( found.length > 0 ? <ListRecipes recipes={found}/> :   <h1>Nema rezultata.</h1>) 
           : <ListRecipes recipes={recipes}/>}
          
        </div>
    );
}

export default Recepies;