import React from 'react';
import '../styles/pagesStyles/login.styles.css';
import loginSVG from '../assets/login.svg';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <section className="login-container">
      <div className="login">
        <LoginForm />
        <div>
          <div className="img-container">
            <img src={loginSVG} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
