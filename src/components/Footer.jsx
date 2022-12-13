import React from 'react';
import '../styles/componentsStyles/footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="description">
        <h4>This is a techincal Challenge for Kruger</h4>
      </div>
      <div className="author">
        <div className="name">
          <h4>Author</h4>
          <p>Oscar Solorzano</p>
        </div>
        <div className="social-media">
          <a href='https://github.com/OscarSolorzano'>
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href='mailto:oscar.solorzano98@gmail.com'>
          <i className="fa-solid fa-envelope fa-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
