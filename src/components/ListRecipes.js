import { Link } from 'react-router-dom';

const ListRecipes = ({ recipes }) => {

    return (
        <div className="list-recipes">

            {recipes && recipes.map((rec) => (
                <Link to={`/recipes/${rec.rec_id}`} key={rec.rec_id}>
                    <div className="recipe" key={rec.rec_id}>

                        <img className="rec-img" src={rec.img_path} alt="" />
                        <div className="rec-dtls">
                            <div className="rec-ta">
                                <h2 className="rec-title">{rec.rec_title}</h2>
                                <p className="rec-author">Autor: {rec.author}</p>
                            </div>
                            <ul className="rec-ingrdnts">
                                {rec.ings && rec.ings.map((ing) => (<li key={ing.ing_id + ',' + rec.rec_id}>{ing.ing_name.toLowerCase()}</li>))}

                            </ul>

                        </div>

                    </div>
                </Link>
            ))}
        </div>);
}

export default ListRecipes;