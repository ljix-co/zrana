import logo_title from '../logo.svg';
import search_ico from '../images/search_icon.svg';
import './style/Pantry.css'
import { useState } from 'react';
import Ingridients from '../components/Ingredients';
import axios from 'axios';
import ListRecipes from '../components/ListRecipes';

const Pantry = ({ bUrl }) => {
    const [ingrdnts, setIngrdnts] = useState('');
    const [recipes, setRec] = useState();
    const [isPending, setIsPending] = useState(false);
    const [noData, setNoData] = useState(false);

    const handleIngrdnts = (ingrdnts) => {
        setIngrdnts(ingrdnts.toString());
    }
    const getIngr = (recs) => {
        for (let i = 0; i < recs.length; i++) {
            let rec = recs[i];
            rec.ings = [];
             axios.get(bUrl + 'ingredients', { params: { rec_id: rec.rec_id } }).then(res => {
                rec.ings = res.data.data;
                
                if (recs.indexOf(rec) === recs.length - 1) {
                    setRec(recs);
                   setTimeout(() => {
                    setIsPending(false)
                   }, 1000);
                }
            })
        }
    }
    const getData = () => {

        axios.get(bUrl + 'search_rec', { params: { ings: ingrdnts } }).then(res => {
            console.log(res);
            getIngr(res.data.data);

            if(res.data.data.length == 0) {
                setNoData(true);
                setIsPending(false);
            }

        })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setIsPending(true);
        setNoData(false);
        setRec([]);
        getData();
    }
 
    return (
        <div className="pantry">
            <div className="title">
                <h1><img src={logo_title} alt="" /> RECEPTI PREMA SASTOJCIMA IZ VAŠE KUHINJE
                </h1>
                <p>Unesite sastojke koje imate, a mi ćemo Vam odmah predložiti recepte.</p>
            </div>
            <Ingridients handleIngrdnts={handleIngrdnts} />
            <button className="btn-search pntr-srch" onClick={handleSearch}><img src={search_ico} alt="" /></button>
            {isPending && (
                <h1>Učitavam...</h1>
            )}
            {noData && (
                <h1>Žao nam je, ali trenutno nemamo u ponudi recepte za odabrane sastojke.</h1>
            )}
            {recipes && isPending === false && <ListRecipes recipes={recipes} bUrl={bUrl} />}
        </div>
    );
}

export default Pantry;