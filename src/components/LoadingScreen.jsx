import React from 'react';
import '../styles/componentsStyles/loading.style.css';

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
