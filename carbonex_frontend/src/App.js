import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AProposPage from './pages/AProposPage';
import Entreprise from './pages/Entreprise';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login'; 
import AppWelcome from './pages/AppWelcome.js';
import Projets from './pages/Projets.js'; 
import ProjectDetails from './pages/ProjetDetails.js';

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  // Define routes where the Navbar should not be shown
  const noNavbarRoutes = [ '/protected', '/appwelcome', '/projets', '/test-layout'];

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
        <Route path="/appwelcome" element={<ProtectedRoute><AppWelcome /></ProtectedRoute>} />
        <Route path="/projets" element={<ProtectedRoute><Projets /></ProtectedRoute>} />
        <Route path= "/projets/:id" element= {<ProtectedRoute><ProjectDetails /> </ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute> < Projets/></ProtectedRoute>}/>
      </Routes>
    </>
  );
}

export default App;