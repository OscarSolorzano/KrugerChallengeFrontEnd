import React , { useState } from 'react';
import '../../styles/componentsStyles/completeRegisterForm.styless.css';
import { useForm } from 'react-hook-form';
import Select from 'react-select';


const CompleteRegisterForm = () => {
  const { register, handleSubmit, reset , control } = useForm();

  const [selectedVaccine, setSelectedVaccine] = useState();
  const [isVaccinated, setIsVaccinated] = useState(false);

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
    console.log(data);
    console.log(isVaccinated.value)
  };

  return (
      <div className="form-container">
        <form onSubmit={handleSubmit(submit)}>
          <label>Phone</label>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input
              type="text"
              className="login__input"
              placeholder="Phone"
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
              {...register('numberOfDoses')}
            />
          </div>
          <label>Date of last dose</label>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input
              type="date"
              className="login__input"
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
  );
};

export default CompleteRegisterForm;
