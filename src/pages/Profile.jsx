import React from 'react';
import '../styles/pagesStyles/profile.styles.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));

  console.log(user);

  return (
    <div className="profile-container">
      <div className="profile">
        <h1>Your Profile</h1>
        <div className="user-profile">
          <div>
            <h3>Full Name:</h3>
            <p>
              {user.names} {user.lastNames}
            </p>
            <h3>Goverment Id:</h3>
            <p>{user.govId}</p>
            <h3>E-mail:</h3>
            <p>{user.email}</p>
            <h3>Phone:</h3>
            <p>{user.profile.phone}</p>
            <h3>Address:</h3>
            <p>{user.profile.address}</p>
            <h3>Birthday:</h3>
            <p>{user.profile.birthday}</p>
          </div>
          <div className="vaccination-info">
            <h3>Vaccination information</h3>
            {user.profile.isVaccinated ? (
              <>
                <p>
                  <span>Vaccine: </span>
                  {user.profile.vaccine}
                </p>
                <p>
                  <span>Number of Doses: </span>
                  {user.profile.numberOfDoses}
                </p>
                <p>
                  <span>Date of last dose: </span>
                  {user.profile.vaccinationDate}
                </p>
              </>
            ) : (
              <p>Not Vaccinated</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
