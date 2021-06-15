import './style/LogReg.css'
const Registration = () => {
    return (
        <div className="login-reg">
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
                <input type="text" placeholder="E-MAIL" />
                <input type="text" placeholder="KORISNIČKO IME" />
                <input type="text" placeholder="LOZINKA" />
                <button>POTVRDI</button>
            </div>
        </div>
    );
}

export default Registration;