import logo_title from '../logo.svg';
import search_ico from '../images/search_icon.svg';
import plus_ico from '../images/plus button.svg';
import exit_ico from '../images/exit button.svg';
import './style/Pantry.css'
import { useEffect, useState } from 'react';
const Pantry = () => {
    const [ingrdnts, setIngrdnts] = useState([]);
    const [ingrdn, setIngrdn] = useState('');
    const addIngrdnt = () => {
        const newIngrdnts = ingrdnts;
        const el = newIngrdnts.find(element => element === ingrdn.toUpperCase());
        if (el === undefined) {
            newIngrdnts.push(ingrdn.toUpperCase());
            setIngrdnts(newIngrdnts);
            setIngrdn('');
        }
    }
    const deleteIng = (ing) => {
        const newIngrdnts = ingrdnts.filter((e) => e !== ing);
        setIngrdnts(newIngrdnts);

    }

    return (
        <div className="pantry">
            <div className="title">
                <h1><img src={logo_title} alt="" /> RECEPTI PREMA SASTOJCIMA IZ VAŠE KUHINJE
              </h1>
                <p>Unesite sastojke koje imate, a mi ćemo Vam odmah predložiti recepte.</p>
            </div>
            <div className="search-field">
                <input type="text"
                    value={ingrdn}
                    onChange={(e) => setIngrdn(e.target.value)}
                    placeholder="Unesite sastojak" />
                <button className="btn-search" onClick={addIngrdnt}><img src={plus_ico} alt="" /></button>
            </div>
            {ingrdnts && (
                <div className="ingrdnts">
                    {ingrdnts.map((ing) => (
                        <div className="ing" key={ing}>
                            <p>{ing}</p>
                            <button className="btn-exit" onClick={() => deleteIng(ing)}><img src={exit_ico} alt="" /></button>
                        </div>
                    ))}
                </div>
            )}
            <button className="btn-search"><img src={search_ico} alt="" /></button>
        </div>
    );
}

export default Pantry;