import logo_title from '../logo.svg';
import search_ico from '../images/search_icon.svg';
import './style/Blog.css'
import ListBlog from '../components/ListBlog';
import { useEffect, useState } from 'react';
import { getIngr, findRecBlog } from '../HelperFunctions';
import {Helmet} from 'react-helmet';
import axios from 'axios';
const Blog = ({ bUrl }) => {

    const [blogs, setBlogs] = useState();
    const [isPending, setIsPending] = useState();
    const [srchTitle, setSrch] = useState('');
    const [found, setFound] = useState();

    const handleSrch = () => {

        findRecBlog(srchTitle, setFound, blogs);
    }

    const getData = () => {
        setIsPending(true);
        axios.get(bUrl + 'blog').then(res => {
            console.log(res);
            let recs = res.data.data;
            getIngr(recs, bUrl, setBlogs, setIsPending, axios);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="blogs">
            <Helmet>
                <meta name="description" content="Z'Rana spremljena u našoj kuhinji, a prema receptima registrovanih korisnika."/>
                <meta id="og-title" property="og:title" content="Z'RANA blog"/>
                <meta id="og-image" property="og:image" content={logo_title} />
            </Helmet>
            <div className="title">
                <h1> NAŠA <img src={logo_title} alt="" /> PREMA VAŠIM RECEPTIMA
                </h1>
                <p>Odabir recepata registrovanih korisnika, spremljeni u našoj kuhinji.</p>
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
            {isPending === false && blogs && found ?
                (found.length > 0 ? <ListBlog blogs={found} /> : <h1>Nema rezultata za pretragu. Pokušajte ponovo.</h1>)
                : <ListBlog blogs={blogs} />}
        </div>
    );
}


export default Blog;