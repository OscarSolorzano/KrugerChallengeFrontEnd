import React from 'react';
import '../styles/pagesStyles/completeProfile.styles.css';
import completeSVG from '../assets/complete.svg';
import CompleteRegisterForm from '../components/CompleteRegister/CompleteRegisterForm';

const CompleteProfile = () => {
  return (
    <section className="complete-profile-container">
      <div className="complete-profile">
        <CompleteRegisterForm />
        <div>
          <div className="img-container">
            <img src={completeSVG} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteProfile;
