import React from 'react';
import addUserSVG from '../assets/undraw_forms_re_pkrt.svg';
import AddUserForm from '../components/AddUser/AddUserForm';
// import '../styles/pagesStyles/addUser.styles.css'

const AddUser = () => {
    return (
        <section className="login-container">
        <div className="login">
            <AddUserForm />
          <div>
            <div className="img-container">
              <img src={addUserSVG} />
            </div>
          </div>
        </div>
      </section>
    );
};

export default AddUser;