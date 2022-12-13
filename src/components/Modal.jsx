import React from 'react';
import '../styles/componentsStyles/modal.styless.css'

const Modal = ({isModalOpen, setIsModalOpen, title ,message ,optionalMessage}) => {
    return (
        <div className={`modal-bkg ${isModalOpen && 'open'}`}>
            <div className='modal'>
                <div className='modal-title'>
                    <h2>{title}</h2>
                </div>
                <div className='modal-body'>
                    <p>{message}</p>
                    <p>{optionalMessage}</p>
                </div>
                <div className='modal-footer'>
                    <button onClick={()=>setIsModalOpen(false)}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;