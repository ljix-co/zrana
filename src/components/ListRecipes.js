const ListRecipes = () => {
    return (
        <div className="list-recipes">
            <div className="recipe">
                <img className="rec-img" src="../images/home_img2.png" alt="" />
                <div className="rec-dtls">
                    <div className="rec-ta">
                        <h2 className="rec-title">Rižoto sa tikvicama</h2>
                        <p className="rec-author">Autor: Vanja Savić</p>
                    </div>
                    <ul className="rec-ingrdnts">
                        <li>300gr priniča</li>
                        <li>350gr piletine</li>
                        <li>2 tikvice</li>
                        <li>glavica crvenog luka</li>
                        <li>2 crvene paprike</li>
                        <li>so</li>
                        <li>biber</li>
                    </ul>
                </div>
            </div>
            <div className="recipe">
                <img className="rec-img" src="../images/home_img1.png" alt="" />
                <div className="rec-dtls">
                    <div className="rec-ta">
                        <h2 className="rec-title">Rižoto sa tikvicama</h2>
                        <p className="rec-author">Autor: Vanja Savić</p>
                    </div>
                    <ul className="rec-ingrdnts">
                        <li>300gr priniča</li>
                        <li>350gr piletine</li>
                        <li>2 tikvice</li>
                        <li>glavica crvenog luka</li>
                        <li>2 crvene paprike</li>
                        <li>so</li>
                        <li>biber</li>
                    </ul>
                </div>
            </div>
        </div>);
}

export default ListRecipes;