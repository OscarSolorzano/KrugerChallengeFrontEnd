import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import { getUsersThunk } from '../../store/slices/users.slice';
import '../../styles/componentsStyles/userCard.styles.css';

const UserCard = ({ user }) => {
  

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const setLoadingScreen = (isLoading) => dispatch(setIsLoading(isLoading));

    const deleteUser =(id) =>{
        setLoadingScreen(true);

        axios.delete(`https://kruggerchallengebackend-production.up.railway.app/api/v1/users/${id}`,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          .finally(() =>{ 
          setLoadingScreen(false)
          dispatch(getUsersThunk());
        });
    }
  
    return (
    <div className="user-card">
      <div className="user-card-info">
        <h2>Contact information</h2>
        <h3>Full Name:</h3>
        <p>
          {user?.names} {user?.lastNames}
        </p>
        <div>
          <div>
            {' '}
            <h3>Phone:</h3>
            <p>{user?.profile?.phone}</p>
          </div>
          <div>
            <h3>Goverment Id:</h3>
            <p>{user?.govId}</p>
          </div>
        </div>
        <h3>E-mail:</h3>
        <p>{user?.email}</p>
        <h3>Address:</h3>
        <p>{user?.profile?.address}</p>
        <h3>Birthday:</h3>
        <p>{user?.profile?.birthday}</p>
      </div>
      <div className="vaccination-info">
        <h2>Vaccination information</h2>
        <div>
          {user?.profile?.isVaccinated ? (
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
      <div className="button-containe">
          <button className="card-button edit-user">Edit Credentials</button>
        </div>
        <div className="button-containe">
          <button className="card-button delete-user" onClick={()=>deleteUser(user.id)}> Delete User</button>
        </div>
    </div>
  );
};

export default UserCard;
