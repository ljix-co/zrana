import axios from 'axios';
import './style/UserRec.css'
import VideoPlayer from '../components/VideoPlayer';
import { useEffect, useState } from 'react';
const UserRec = ({ bUrl, user }) => {
    const [published, setPublished] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [noData, setNoData] = useState(false);

    const handleDelete = (id) => {
        if (user.usr_admin === 1) {
            axios.delete(bUrl + 'blog', { params: { sid: localStorage.getItem('sid'), bl_id: id } }).then(res => {
                console.log(res);
                getData();
            })
        }
        if (user.usr_admin === 0) {
            axios.delete(bUrl + 'recipes', { params: { sid: localStorage.getItem('sid'), rec_id: id } }).then(res => {
                console.log(res);
                getData();
            })
        }
    }
    const getData = () => {
        setIsPending(true);
        setNoData(false);

        axios.get(bUrl + 'usr_published', { params: { sid: localStorage.getItem('sid') } }).then(res => {
            console.log(res)
            let published_c = res.data.data;

            if (res.data.data.length > 0) {
                published_c.forEach((el) => {
                    el.ing = [];
                    axios.get(bUrl + 'ingredients', { params: { rec_id: el.rec_id } }).then(res => {
                        console.log(res);
                        el.ing = res.data.data;


                        setPublished(published_c);

                        setTimeout(() => {
                            setIsPending(false);
                        }, 1000);

                    })
                })
            }
            if (res.data.data.length === 0) {
                setNoData(true)
                setIsPending(false);
            }
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (

        <div className="user-rec">
            {isPending && (
                <div className="is-pending">
                    <h1>Učitavam...</h1>
                </div>
            )}
            {noData && user.usr_admin === 0 && (
                <div className="is-pending">
                    <h1>Još uvek niste objavili ni jedan recept. Vratite se na prethodnu stranu i popunite formu za dodavanje recepta.</h1>
                </div>
            )}
            {noData && user.usr_admin === 1 && (
                <div className="is-pending">
                    <h1>Još uvek niste objavili ni jedan blog. Vratite se na prethodnu stranu i popunite formu za dodavanje bloga.</h1>
                </div>
            )}
            {isPending === false && user.usr_admin === 1 && (
                <div className="published-blog">
                    {published && (
                        <div className="admin-blogs">
                            {published.map((pub) => (
                                <div className="admin-blog" key={pub.bl_id}>
                                    < VideoPlayer video={pub.video_path} poster={pub.img_path} />
                                    {pub.ing && (
                                        <div className="admin-blog-dtls">
                                            <div className="rec-ta-div">
                                                <h2 className="admin-rec-title">{pub.bl_title}</h2>
                                                <p className="rec-author">Autor: {pub.bl_author} </p>
                                            </div>
                                            <ul className="rec-ingrdnts">
                                                {pub.ing && pub.ing.map((ing) => (
                                                    <li key={ing.ing_id + ',' + pub.bl_id}>{ing.ing_name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="btns">
                                        <button className="btn-del" onClick={() => { handleDelete(pub.bl_id) }}>IZBRIŠI</button>
                                        {/* <button className="btn-edit">UREDI</button> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>)}
            {isPending === false && user.usr_admin === 0 && (
                <div className="published-blog">
                    {published && (
                        <div className="admin-blogs">
                            {published.map((pub) => (
                                <div className="admin-blog" key={pub.rec_id}>
                                    <img className="usr-rec-img" src={pub.img_path} alt="" />
                                    {pub.ing && (
                                        <div className="admin-blog-dtls">
                                            <div className="rec-ta-div">
                                                <h2 className="admin-rec-title">{pub.rec_title}</h2>
                                                <p className="rec-author">Autor: {pub.rec_author} </p>
                                            </div>
                                            <ul className="rec-ingrdnts">
                                                {pub.ing && pub.ing.map((ing) => (
                                                    <li key={ing.ing_id + ',' + pub.rec_id}>{ing.ing_name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="btns">
                                        <button className="btn-del" onClick={() => { handleDelete(pub.rec_id) }}>IZBRIŠI</button>
                                        {/* <button className="btn-edit">UREDI</button> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>)}
        </div>
    );

}

export default UserRec;