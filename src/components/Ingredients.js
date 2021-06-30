import plus_ico from '../images/plus button.svg';
import exit_ico from '../images/exit button.svg';
import { useEffect, useState } from 'react';
import '../routes/style/Pantry.css'
const Ingridients = ({ handleIngrdnts, resetIngrdnts }) => {
    const [ingrdnts, setIngrdnts] = useState([]);
    const [ingrdn, setIngrdn] = useState('');
    const addIngrdnt = () => {
        const newIngrdnts = ingrdnts;
        const el = newIngrdnts.find(element => element === ingrdn.toUpperCase());
        if (el === undefined) {
            newIngrdnts.push(ingrdn.toUpperCase());
            setIngrdnts(newIngrdnts);
            setIngrdn('');
            handleIngrdnts(newIngrdnts);
        }
    }
    const deleteIng = (ing) => {
        const newIngrdnts = ingrdnts.filter((e) => e !== ing);
        setIngrdnts(newIngrdnts);
        handleIngrdnts(newIngrdnts);
    }

    const setReset = () => {
        setIngrdnts([]);
    }
    useEffect(setReset, [resetIngrdnts])
    return (
        <div className="ingrdnts-div">
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
        </div>
    );
}

export default Ingridients;