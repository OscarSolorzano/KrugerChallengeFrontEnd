import React, { useState } from 'react';
import '../styles/componentsStyles/navbar.styles.css';
import logo from '../assets/logo_kruger.png';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogged } from '../store/slices/isLogged.slice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleshow = (state) => setShow(state);

  const isLogged = useSelector((state) => state.isLogged);

  let user

  if(isLogged) user = JSON.parse( localStorage.getItem('userInfo'))

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const singOut = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('userInfo', {});
    dispatch(setIsLogged(false));
    handleshow(false);
    navigate('/');
  };

  const logIn = () =>{
    handleshow(false)
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img src={logo} />
      </a>
      <div className={`nav-links ${show && 'open'}`}>
        <ul>
          {isLogged && (
            <>
              <li>
                <button onClick={singOut}>Sing out</button>
              </li>
            </>
          )}
          {!isLogged && (
            <>
              <li>
                <button onClick={logIn }>Log in</button>
              </li>
            </>
          )}
          {
            isLogged && user?.role === 'admin' &&(
              <>
              <li>
                <button onClick={()=> {
                  navigate('/add-user')
                  handleshow(false)
                 }}
                  >Add User</button>
              </li>
            </>
            )
          }
        </ul>
      </div>
      <div className={`icon hamburguer ${show && 'open'}`} onClick={() =>handleshow(!show)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
