import { useEffect, useState } from 'react';
import plus_ico from '../images/plus button.svg';
import Ingridients from '../components/Ingredients';
import Modal from '../components/Modal';
import './style/Profile.css'
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
const Profile = ({ bUrl, user, setUser, setLoggedIn }) => {
    // const [user] = useState(localStorage.getItem('user'));
    const [rec_title, setTitle] = useState('');
    const [rec_txt, setTxt] = useState('');
    const [rec_healthy, setHealthy] = useState('');
    const [rec_img, setImg] = useState(null);
    const [bl_video, setVideo] = useState(null);
    const [bl_author, setAuthor] = useState('');
    const [newIngrdnts, setNewIngrdnts] = useState([]);
    const [resetIngrdnts, setReset] = useState(0);
    const [isPending, setIsPending] = useState(false);
    const [noData, setNoData] = useState(false);
    const message = 'Niste uneli sve podatke. Popunite sva polja pa pokušajte ponovo.'
    const history = useHistory();

    const handleOk = () => {
        setNoData(false);
        setIsPending(false)
    }

    const handleLogOut = () => {
        let formData = new FormData();
        formData.append('sid', localStorage.getItem('sid'))
        axios.post(bUrl + 'logout', formData).then(res => {
            console.log(res);
            setUser({});
            setLoggedIn(false);
            history.push('/')
        })
    }
    const handleSubmit = () => {

        setIsPending(true);

        if (rec_title === '' || rec_txt === '' || rec_healthy === '' || rec_img === null || newIngrdnts.length === 0) {
            setNoData(true);
        }
        else {
            if (user.usr_admin !== 1) {
                let formData = new FormData();
                formData.append('rec_title', rec_title);
                formData.append('rec_txt', rec_txt);
                formData.append('rec_healthy', rec_healthy);
                formData.append('rec_img', rec_img);
                formData.append('usr_id', user.usr_id);
                formData.append('sid', localStorage.getItem('sid'));

                axios.post(bUrl + 'recipes', formData).then(res => {
                    console.log(res)
                    setTitle('');
                    setTxt('');
                    setHealthy('');
                    let triggerNum = resetIngrdnts;
                    setImg(null);
                    setReset(triggerNum += 1);
                    let id = res.data.id;
                    setIsPending(false);
                    if (newIngrdnts.length > 0) {
                        newIngrdnts.forEach(e => {
                            let ingFormData = new FormData();
                            ingFormData.append('rec_id', id);
                            ingFormData.append('ing_name', e);
                            ingFormData.append('sid', localStorage.getItem('sid'));
                            axios.post(bUrl + 'ingredients', ingFormData).then(res => {
                                console.log(res);

                            })
                        })
                    }
                })
            }
            else if (user.usr_admin === 1) {
                if (bl_video === null || bl_author === '') {
                    setNoData(true);
                }
                else {
                    let formData = new FormData();
                    formData.append('bl_title', rec_title);
                    formData.append('bl_txt', rec_txt);
                    formData.append('bl_healthy', rec_healthy);
                    formData.append('bl_img', rec_img);
                    formData.append('bl_author', bl_author);
                    formData.append('bl_video', bl_video);
                    formData.append('sid', localStorage.getItem('sid'));

                    axios.post(bUrl + 'blog', formData).then(res => {
                        console.log(res)
                        setTitle('');
                        setTxt('');
                        setHealthy('');
                        let triggerNum = resetIngrdnts;
                        setImg(null);
                        setVideo(null);
                        setAuthor('');
                        setReset(triggerNum += 1);
                        let id = res.data.id;
                        setIsPending(false);
                        if (newIngrdnts.length > 0) {
                            newIngrdnts.forEach(e => {
                                let ingFormData = new FormData();
                                ingFormData.append('bl_id', id);
                                ingFormData.append('ing_name', e);
                                ingFormData.append('sid', localStorage.getItem('sid'));
                                axios.post(bUrl + 'ingredients', ingFormData).then(res => {
                                    console.log(res);

                                })
                            })
                        }
                    })
                }
            }
        }
    }
    const handleIngrdnts = (ingrdnts) => {
        setNewIngrdnts(ingrdnts);
    }

    useEffect(() => {
        function chckUser() {
            if(user === {}) {
                history.push('/');
            }
        }
        chckUser();
    }, [])

    return (
        <div className="profile">
            <div className="info">
                <h2>{user.usr_uname}</h2>
                <NavLink to="/usr_rec" className="prof-link">OBJAVLJENI RECEPTI</NavLink>
                <button className="prof-link" onClick={handleLogOut}>ODJAVI SE</button>
            </div>
            {noData && <Modal message={message} handleOk={handleOk}/>}
            <div className="add-new">
                <h1>NOVI RECEPT</h1>
                {user.usr_admin == 1 && (

                    <input className="admin-inpt"
                        onChange={(e) => { setAuthor(e.target.value) }}
                        type="text" placeholder="ORIGINALNI AUTOR" />

                )}
                <input
                    value={rec_title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    type="text" placeholder="NAZIV" />

                <Ingridients handleIngrdnts={handleIngrdnts} resetIngrdnts={resetIngrdnts} />

                <textarea
                    value={rec_txt}
                    onChange={(e) => { setTxt(e.target.value) }}
                    placeholder="TEKST RECEPTA"></textarea>
                <textarea
                    value={rec_healthy}
                    onChange={(e) => { setHealthy(e.target.value) }}
                    placeholder="ZAŠTO JE OVO JELO Z`RANA?"></textarea>
                <div className="fake-inpt">
                    <label htmlFor="inpt-img"><p className="fake-inpt"> {rec_img !== null ? 'Slika je dodata.' : 'Dodaj sliku'}</p> <p className="btn-search"><img src={plus_ico} alt="" /></p></label>
                    <input
                        onChange={(e) => { setImg(e.target.files[0]) }}
                        id="inpt-img" type="file" hidden />
                </div>
                {user.usr_admin == 1 && (
                    <div className="fake-inpt admin-fake-inpt">
                        <label htmlFor="inpt-video"><p className="fake-inpt"> {bl_video !== null ? 'Video je dodat.' : 'Dodaj video'}</p> <p className="btn-search"><img src={plus_ico} alt="" /></p></label>
                        <input
                            onChange={(e) => { setVideo(e.target.files[0]) }}
                            id="inpt-video" type="file" hidden />
                    </div>
                )}
                <button className="add-btn" onClick={handleSubmit}>{isPending ? 'Dodaje se...' : 'DODAJ'}</button>
            </div>
        </div>
    );
}

export default Profile;