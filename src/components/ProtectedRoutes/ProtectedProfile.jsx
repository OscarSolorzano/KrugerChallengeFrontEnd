import { Navigate, Outlet } from 'react-router-dom';

const ProtectedProfileRegister = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    if(user.profile){
        return <Outlet />
    } else { 
        return <Navigate to='/complete-profile' />
    } 
};    

export default ProtectedProfileRegister;