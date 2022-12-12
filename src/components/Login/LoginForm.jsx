import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import {setIsLogged} from '../../store/slices/isLogged.slice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../styles/componentsStyles/loginForm.styles.css';
import Modal from '../Modal';

const LoginForm = () => {

  const { register, handleSubmit, reset } = useForm();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const setLoadingScreen = (isLoading) => dispatch(setIsLoading(isLoading));

  const setLogged = () => dispatch(setIsLogged(true))

  const submit = (data) => {
    setLoadingScreen(true);
    localStorage.setItem('token', '');
    localStorage.setItem('userInfo', {});
    axios
      .post(
        'https://kruggerchallengebackend-production.up.railway.app/api/v1/users/login',
        data
      )
      .then((res) => {
        const user = res.data.data.user
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('userInfo', JSON.stringify(user));
        setLogged()

        if(user.role === 'admin')  navigate('/users')
        else if (user.profile === null) navigate('/complete-profile')
        else navigate('/profile')
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          setIsModalOpen(true);
        } else {
          console.log(error.response);
        }
      }).finally(()=>setLoadingScreen(false))
    reset({
      userName: '',
      password: '',
    });
  };

  return (
    <>
      <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

      <div className="form-container">
        <form onSubmit={handleSubmit(submit)}>
          <label>Username</label>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input
              type="text"
              className="login__input"
              placeholder="Username"
              {...register('userName')}
            />
          </div>
          <label>Password</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="password"
              className="login__input"
              placeholder="Password"
              {...register('password')}
            />
          </div>
          <div>
            <button type="sumbmit" className="login-button">
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
