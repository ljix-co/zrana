import { useHistory } from "react-router-dom";

const NotFound = () => {
    const history = useHistory();
    const handleGoHome = () => {
        history.push('/')
        window.location.reload();
    }
    return ( 
        <div className="not-found">
            <h1>Stranica koju tražite ne postoji.</h1>
            <h3  onClick={handleGoHome}>Idi na početnu</h3>
        </div>
     );
}
 
export default NotFound;