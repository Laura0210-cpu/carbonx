import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AProposPage from './pages/AProposPage';
import Entreprise from './pages/Entreprise';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login'; 
import ProtectedPage from './components/ProtectedPage';

function App() {
  const location = useLocation();

  // Define routes where the Navbar should not be shown
  const noNavbarRoutes = [ '/protected'];

  // Check if the current route is in the list of noNavbarRoutes
  const hideNavbar = noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/Entreprise" element={<Entreprise />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </>
  );
}

export default App;



