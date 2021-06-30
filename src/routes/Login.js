import { useState } from 'react';
import axios from 'axios';
import './style/LogReg.css'
import { useHistory } from 'react-router-dom';
import Modal from '../components/Modal';
const Login = ({ bUrl, setLoggedIn, setUser }) => {
    const [usr_uname, setUname] = useState('');
    const [usr_pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const handleOk = () => {
        setError(false);
    }
    const history = useHistory();
    const handleSubmit = () => {
        if (usr_uname === '' || usr_pass === '') {
            setMessage('Korisničko ime ili lozinka nisu uneti!');
            setError(true);
        }
        else {
            let formData = new FormData();
            formData.append('username', usr_uname);
            formData.append('password', usr_pass);
            axios.post(bUrl + 'login', formData).then(res => {
                console.log(res);
                if (res.data.msg === 'OK') {
                    history.push('/profile');
                    setLoggedIn(true);
                    localStorage.setItem('sid', res.data.sid);
                    setUser(res.data.user)
                    
                }
                else {
                    setMessage('Korisničko ime ili lozinka su neispravni!');
                    setError(true);
                }
            }).catch(error => {
                console.log(error);
                setMessage('Korisničko ime ili lozinka su neispravni!');
                setError(true);
            })
        }
    }

    return (
        <div className="login-reg-div">
            <div className="login-reg" style={error ? { opacity: .1 } : { opacity: 1 }}>
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
                    <h1>LOGIN</h1>
                    <input type="text"
                        value={usr_uname}
                        onChange={(e) => setUname(e.target.value)}
                        placeholder="KORISNIČKO IME" />
                    <input type="password"
                        value={usr_pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="LOZINKA" onKeyPress={(e) => { if (e.key === 'Enter') { handleSubmit() } }} />
                    <button onClick={handleSubmit} >LOGIN</button>
                </div>
            </div>
            {error && <Modal message={message} handleOk={handleOk} />}
        </div>
    );
}

export default Login;