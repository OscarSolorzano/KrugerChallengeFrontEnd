import React from 'react';
import addUserSVG from '../assets/undraw_forms_re_pkrt.svg';
import EditUserForm from '../components/EditUser/EditUserForm';

const EditUser = () => {
    return (
<section className="login-container">
        <div className="login">
            <EditUserForm />
          <div>
            <div className="img-container">
              <img src={addUserSVG} />
            </div>
          </div>
        </div>
      </section>
    );
};

export default EditUser;