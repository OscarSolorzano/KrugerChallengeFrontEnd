import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, Users, CompleteProfile } from './pages';
import { Navbar, ProtectedRoutes, AdminRoutes, LoadingScreen } from './components';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {

  const isLoading = useSelector(state => state.isLoading)


  return (
    <HashRouter>
      {isLoading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route element={<AdminRoutes />} >
            <Route path="/users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
