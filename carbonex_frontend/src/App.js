import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AProposPage from './pages/AProposPage';
import Entreprise from './pages/Entreprise';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login'; 
import ProtectedPage from './components/ProtectedPage';
import AppWelcome from './pages/AppWelcome.js';
import Projets from './pages/Projets.js'; 


function App() {
  const location = useLocation();

  // Define routes where the Navbar should not be shown
  const noNavbarRoutes = [ '/protected', '/appwelcome', '/projets'];

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
        <Route path="/appwelcome" element={<AppWelcome />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </>
  );
}

export default App;