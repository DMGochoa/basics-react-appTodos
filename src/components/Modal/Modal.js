import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

function Modal ({ isOpen, setOpen, children }) {
    return ReactDOM.createPortal(
        <div id="modal" className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span
                className="close"
                onClick = {() => {
                    setOpen(false);
                }}
                >&times;</span>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') // Asegúrate de que el ID corresponda con el del div en tu index.html
    );
}


export { Modal };