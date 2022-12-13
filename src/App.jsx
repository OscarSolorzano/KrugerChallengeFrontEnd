import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, Users, CompleteProfile, AddUser } from './pages';
import {
  Navbar,
  ProtectedRoutes,
  AdminRoutes,
  LoadingScreen,
  ProtectedProfileRegister,
  ProtectedProfile,
} from './components';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      {isLoading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<ProtectedProfile />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<ProtectedProfileRegister />}>
            <Route path="/complete-profile" element={<CompleteProfile />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/users" element={<Users />} />
            <Route path="/add-user" element={<AddUser />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
