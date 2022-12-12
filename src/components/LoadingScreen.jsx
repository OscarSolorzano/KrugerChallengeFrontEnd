import React from 'react';
import '../styles/componentsStyles/loading.style.css';

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <div class="lds-roller">
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
