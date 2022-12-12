import React from 'react';
import '../styles/pagesStyles/home.styles.css';
import doctors from '../assets/undraw_doctors.svg';
import logo from '../assets/logo_kruger.png';

const Home = () => {
  return (
    <section className="home-containter">
      <div className="home">
        <div className="home-information">
          <h2>Welcome  to </h2> 
          <div className='information-logo'>
          <img src={logo} />
          <h1 className='text-next-to-logo'>
              employees
          </h1>
          </div>
          <h1>Vaccination Register</h1>
          <ul>
            <li>
              <i class="fa-solid fa-circle fa-2xs"></i> Here employees can
              complete their vaccination  information
            </li>
            <li>
              <i class="fa-solid fa-circle fa-2xs"></i> Admins can view, filter,
              and modify  employees  credentials and information
            </li>
            <li>
              <i class="fa-solid fa-circle fa-2xs"></i> If you do not have your
              credentials please contact your IT administrator
            </li>
          </ul>
          <div className='home-button-container'>
          <a href='/#/login' className='home-login-button'>Log in</a>
          </div>
          
        </div>
        <div className="img-container">
          <img src={doctors} />
        </div>
      </div>
    </section>
  );
};

export default Home;
