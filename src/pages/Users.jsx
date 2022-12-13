import React, { useEffect, useState } from 'react';
import '../styles/pagesStyles/completeProfile.styles.css';
import '../styles/pagesStyles/users.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../components/Users/UserCard';
import Select from 'react-select';
import { getUsersThunk } from '../store/slices/users.slice';

const Users = () => {


const [filteredUsers, setfilteredUsers] = useState();

  const [isVaccinated, setIsVaccinated] = useState();

  const [vaccine, setVaccine] = useState(null);

  const [fromDate, setFromDate] = useState('');

  const [toDate, setToDate] = useState('');


  const dispatch = useDispatch();


  const isVaccinatedOptions = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
  ];

  const vaccineOptions = [
    { value: 'Sputnik', label: 'Sputnik' },
    { value: 'AstraZeneca', label: 'AstraZeneca' },
    { value: 'Pfizer', label: 'Pfizer' },
    { value: 'Jhonson&Jhonson', label: 'Jhonson&Jhonson' },
  ];

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  let users = useSelector(state => state.users)


  const filter = () => {

    if(vaccine!== null){
        users = users.filter((user) => {
            if (user.profile.vaccine === vaccine.value) return user;
          })
          if(toDate !==''){
            let toDateObj = new Date(toDate);
            let fromDateObj = new Date(fromDate)
            users = users.filter((user) => {
                let userDate = new Date(user.profile.vaccinationDate)
                if((userDate>fromDateObj)&&(userDate<toDateObj)) return user
              })
            setfilteredUsers(users)
        }
            else{
                setIsClear(false)
                setfilteredUsers(users)
            }

    }
    else if (isVaccinated !== null) {
        users = users.filter((user) => {
            if (user.profile.isVaccinated === isVaccinated.value) return user;
          })
          if(toDate !==''){
            let toDateObj = new Date(toDate);
            let fromDateObj = new Date(fromDate)
            users = users.filter((user) => {
                let userDate = new Date(user.profile.vaccinationDate)
                if((userDate>fromDateObj)&&(userDate<toDateObj)) return user
              })
            setfilteredUsers(users)
        }
            else{
                setIsClear(false)
                setfilteredUsers(users)
            }
  }
}

const clear = () =>{
    setfilteredUsers(users)
  }

  const clearDates = () =>{
    setFromDate('')
    setToDate('')
  }


  return (
    <section className="complete-profile-container">
      <div className="users">
        <div className="filters">
          <div className="filter">
            <h4>Vaccination Status:</h4>
            <Select
              isClearable={true}
              options={isVaccinatedOptions}
              onChange={setIsVaccinated}
            />
          </div>
          <div className="filter">
            <h4>Vaccine:</h4>
            <Select
              isClearable={true}
              options={vaccineOptions}
              onChange={setVaccine}
            />
          </div>
          <div className="filter date-filter">
            <h4>Date of Vaccination:</h4>
            <div>
              <input
                type={'date'}
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <input
                type={'date'}
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                disabled={!fromDate && true}
                min={fromDate}
              />
              <button onClick={clearDates}>
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          </div>
          <div className='filter-btn-cntr'>
          <button className='filter-btn' onClick={filter}>Filter</button>
          <button className='filter-btn' onClick={clear}>Clear</button>
          </div>
        </div>

        {(filteredUsers)?(
        filteredUsers?.map((user) => (
            <UserCard user={user} key={user.id} 
            />
          ))
        ):(
            users?.map((user) => (
                <UserCard user={user} key={user.id} 
                />
              ))
        )
    }

        
      </div>
    </section>
  );
};

export default Users;
