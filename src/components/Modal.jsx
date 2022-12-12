import React from 'react';
import '../styles/componentsStyles/modal.styless.css'

const Modal = ({isModalOpen, setIsModalOpen}) => {
    return (
        <div className={`modal-bkg ${isModalOpen && 'open'}`}>
            <div className='modal'>
                {/* <button className='modal-close' onClick={()=>setIsModalOpen(false)}><i className="fa-solid fa-x"></i></button> */}
                <div className='modal-title'>
                    <h2>Error</h2>
                </div>
                <div className='modal-body'>
                    <p>Wrong username or password</p>
                </div>
                <div className='modal-footer'>
                    <button onClick={()=>setIsModalOpen(false)}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;