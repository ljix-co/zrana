import './style/LogReg.css'
import axios from 'axios';
import { useState } from 'react';
import Modal from '../components/Modal';
import { useHistory } from 'react-router-dom';
const Registration = ({ bUrl }) => {
    const [usr_email, setEmail] = useState('');
    const [usr_uname, setUname] = useState('');
    const [usr_pass, setPass] = useState('');
    const [success, setSuccess] = useState(false);
    const [message] = useState('Čestitamo, uspešno ste se registrovali!')
    const history = useHistory();
    const handleOk = () =>  {
        setSuccess(false);
        history.push('/login');
    }
    // const store = useStore();
    const handleSubmit = () => {
        // const value = store.getState()
        let formData = new FormData()
        formData.append('usr_email', usr_email);
        formData.append('usr_uname', usr_uname);
        formData.append('usr_pass', usr_pass);
        axios.post(bUrl + 'registration', formData).then(res => {
            console.log(res)
           setSuccess(true);
        })
    }
    return (
        <div className="login-reg-div">
            <div className="login-reg" style={success ? {opacity: .1} : {opacity: 1}}>
            <div className="line-up-r">
                <div className="line-up-r-inner"></div>
            </div>
            <div className="line-up-l">
                <div className="line-up-l-inner"></div>
            </div>
            <div className="line-d-r">
                <div className="line-d-r-inner"></div>
            </div>
            <div className="line-d-l-lng">
                <div className="line-d-l-shrt"></div>
            </div>
            <div className="login-reg-form">
                <h1>REGISTRACIJA</h1>
                <input type="text"
                    value={usr_email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-MAIL" />
                <input type="text"
                    value={usr_uname}
                    onChange={(e) => setUname(e.target.value)}
                    placeholder="KORISNIČKO IME" />
                <input type="password"
                    value={usr_pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="LOZINKA" />
                <button onClick={handleSubmit}>POTVRDI</button>
            </div>
            </div>
            {success && <Modal message={message} handleOk={handleOk}/>}
        </div>
    );
}

export default Registration;