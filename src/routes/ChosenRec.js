import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIngr } from "../HelperFunctions";
import axios from 'axios';
import {Helmet} from 'react-helmet'
import './style/Chosen.css';

const ChosenRec = ({ bUrl }) => {

    const { id } = useParams();
    const [recipe, setRec] = useState();
    const [isPending, setIsPending] = useState(false);

    const getData = () => {
        axios.get(bUrl + 'recipes/' + id).then(res => {
            console.log(res);
            // setRec(res.data.data);
            getIngr(res.data.data, bUrl, setRec, setIsPending, axios)
        })
    }
    useEffect(() => { getData() }, []);

    return (
        <div className="chosen-div">
            {recipe &&
                <Helmet>
                    <meta name="description" content="Z'Rana recepti registrovanih korisnika." />
                    <meta id="og-title" property="og:title" content={recipe[0].rec_title} />
                    <meta id="og-image" property="og:image" content={recipe[0].img_path} />
                </Helmet>}
            {isPending && (
                <h1>Učitavam...</h1>
            )}
            {recipe && recipe.map((recipe) => (
                <div className="chosen" key={recipe.rec_id}>
                    <div className="l-side">
                        <h1>{recipe.rec_title}</h1>
                        <h3>Autor: {recipe.author}</h3>
                        <img src={recipe.img_path} alt="" />
                        <ul className="rec-ingrdnts">
                            {recipe.ings && recipe.ings.map((ing) =>
                                (<li key={ing.ing_id + ',' + recipe.rec_id}>{ing.ing_name.toLowerCase()}</li>))}

                        </ul>
                    </div>
                    <div className="r-side">
                        <p>{recipe.rec_txt}</p>
                        <p>{recipe.rec_healthy}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChosenRec;