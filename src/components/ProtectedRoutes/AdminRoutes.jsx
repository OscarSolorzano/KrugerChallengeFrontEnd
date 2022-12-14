import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    if(user.role === 'admin'){
        return <Outlet />
    } else { 
        return <Navigate to='/profile' />
    } 
};    

export default AdminRoutes;