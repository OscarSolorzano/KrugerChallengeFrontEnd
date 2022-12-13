import React , { useState } from 'react';
import '../../styles/componentsStyles/completeRegisterForm.styless.css';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../store/slices/isLoading.slice';
import Modal from '../Modal';
import axios from 'axios';



const CompleteRegisterForm = () => {
  const { register, handleSubmit, reset , control } = useForm();

  const [selectedVaccine, setSelectedVaccine] = useState({ value: 'Sputnik', label: 'Sputnik' });

  const [isVaccinated, setIsVaccinated] = useState({ value: false, label: 'No' });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [message, setMessage] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const setLoadingScreen = (isLoading) => dispatch(setIsLoading(isLoading));


  const isVaccinatedOptions = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
  ]

  const vaccineOptions = [
    { value: 'Sputnik', label: 'Sputnik' },
    { value: 'AstraZeneca', label: 'AstraZeneca' },
    { value: 'Pfizer', label: 'Pfizer' },
    { value: 'Jhonson&Jhonson', label: 'Jhonson&Jhonson' },
  ];

  const submit = (data) => {

    setLoadingScreen(true);

    data.isVaccinated = isVaccinated.value;

    if(isVaccinated.value) data.vaccine = selectedVaccine.value

    axios
      .post(
        'https://kruggerchallengebackend-production.up.railway.app/api/v1/users/profile',
        data,
        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
      )
      .then((res) => {
        const user = res.data.data.user
        localStorage.setItem('userInfo', JSON.stringify(user));
        navigate('/profile')
      })
      .catch((error) => {
        let errorMessage = error.response.data.error.errors?.[0].message;
        setMessage(errorMessage)
        setIsModalOpen(true);

      }).finally(()=>setLoadingScreen(false))
    reset();
  };



  return (
    <>
          <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} title={'Error'} message={message} />

      <div className="form-container">
        <form onSubmit={handleSubmit(submit)}>
          <label>Mobile Phone</label>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input
              type="tel"
              pattern="[0][89][0-9]{8}"
              className="login__input"
              placeholder="098 225 9813"
              required
              {...register('phone')}
            />
          </div>
          <label>Address</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="text"
              className="login__input"
              placeholder="Address"
              required
              {...register('address')}
            />
          </div>
          <label>Birthday</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="date"
              className="login__input"
              required
              {...register('birthday')}
            />
          </div>
          <label>Are you vaccinated?</label>
          <div className="login__field">
            <Select 
            options={isVaccinatedOptions}
            onChange={setIsVaccinated}
            defaultValue={isVaccinatedOptions[1]}
            />
          </div>
          {isVaccinated.value &&(
            <>
             <label>Which vaccine?</label>
                        <Select 
            options={vaccineOptions}
            onChange={setSelectedVaccine}
            defaultValue={vaccineOptions[0]}
            />
                      <label className='doses-label'>Number of doses</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="number"
              min="1" max="9"
              className="login__input"
              required
              {...register('numberOfDoses')}
            />
          </div>
          <label>Date of last dose</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="date"
              className="login__input"
              required
              {...register('vaccinationDate')}
            />
          </div>
            </>
          )}
          <div className="button-container">
            <button type="sumbmit" className="complete-registration-button">
              Complete Registration
            </button>
          </div>
        </form>
      </div>
      </>
  );
};

export default CompleteRegisterForm;
