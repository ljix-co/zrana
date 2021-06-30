import './style/Modal.css';
const Modal = ({message, handleOk}) => {
    return ( 
        <div className="modal">
            <h2>{message}</h2>
            <button onClick={handleOk}>OK</button>
        </div>
     );
}
 
export default Modal;