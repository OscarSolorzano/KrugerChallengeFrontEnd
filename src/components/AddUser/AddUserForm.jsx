import React, { useState } from 'react';
import '../../styles/componentsStyles/completeRegisterForm.styless.css';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import Modal from '../Modal';
import axios from 'axios';

const AddUserForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const [selectedRole, setSelectedRole] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState();

  const [message, setMessage] = useState();

  const [optionalMessage, setOptionalMessage] = useState();

  const dispatch = useDispatch();

  const setLoadingScreen = (isLoading) => dispatch(setIsLoading(isLoading));

  const roleOptions = [
    { value: 'admin', label: 'Administrator' },
    { value: 'user', label: 'User' },
  ];

  const submit = (data) => {
    setLoadingScreen(true);

    data.role = selectedRole?.value || 'user';

    axios
      .post(
        'https://kruggerchallengebackend-production.up.railway.app/api/v1/users',
        data,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      .then((res) => {
        const userInfo = res.data.data;
        setMessage(`username: ${userInfo.userName}`);
        setOptionalMessage(`password:  ${userInfo.password}`);
        setTitle('User created Succesfully');
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.log(error);
        let errorMessage = error.response.data.error.errors?.[0].message;
        setTitle('Error');
        setMessage(errorMessage);
        setIsModalOpen(true);
      })
      .finally(() =>{ 
      setOptionalMessage('')
      setLoadingScreen(false)});

    console.log('title' + title, message);
    reset();
  };

  return (
    <>
      <Modal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        title={title}
        message={message}
        optionalMessage={optionalMessage}
      />

      <div className="form-container">
        <form onSubmit={handleSubmit(submit)}>
          <label>Names</label>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input
              type="text"
              pattern="[a-zA-Z\s]+$"
              className="login__input"
              placeholder="No Special Characters"
              required
              {...register('names')}
            />
          </div>
          <label>Lastnames</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="text"
              pattern="[a-zA-Z\s]+$"
              className="login__input"
              placeholder="No Special Characters"
              required
              {...register('lastNames')}
            />
          </div>
          <label>E-mail</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="email"
              className="login__input"
              placeholder="Only Valid E-mails"
              required
              {...register('email')}
            />
          </div>
          <label>C.I</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="text"
              pattern="[0-2][0-9]{9}"
              className="login__input"
              placeholder="10 digit ID"
              required
              {...register('govId')}
            />
          </div>
          <label>Role</label>
          <div className="login__field">
            <Select options={roleOptions} onChange={setSelectedRole} />
          </div>
          <div className="button-container">
            <button type="sumbmit" className="complete-registration-button">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUserForm;
