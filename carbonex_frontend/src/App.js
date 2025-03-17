import React from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Entreprise from './pages/Entreprise';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login'; 
import AppWelcome from './pages/AppWelcome.js';
import Projets from './pages/Projets.js'; 
import ProjectDetails from './pages/ProjetDetails.js';
import ProtectedRoute from "./components/ProtectedRoute";
import UnauthorizedPage from './pages/UnauthorizedPage.js';
import RegisterProject from './pages/seller/RegisterProject.js';
import SellerDashboard from './pages/seller/SellerDashboard.js';
import SellerMyProjects from './pages/seller/SellerMyProjects.js';
import ReportSeller from './pages/seller/ReportSeller.js';
import { useAuth } from './context/AuthContext.js';
import AProposPage from './pages/AProposPage';
import BlogPage from './pages/BlogPage';
import ContactForm from './pages/ContactForm';
import TradeForm from './pages/TradeForm';


function App() {
  const location = useLocation();
  const {user, loading} = useAuth();

  //Here we are waiting for the user to load, otherwise causes problems to determine which page to show
  if (loading) { 
    console.log("app.js: waiting for user data ...")
    return <div> loading...</div> 
  }
  // Define routes where the Navbar should not be shown
  const noNavbarRoutes = [ '/protected', '/appwelcome', '/projets', '/test-layout', '/mes-projets', '/rapports', '/trade',];

  // Check if the current route is in the list of noNavbarRoutes
  const hideNavbar = noNavbarRoutes.includes(location.pathname)|| 
  matchPath("/projets/:id", location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/Entreprise" element={<Entreprise />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/appwelcome" element={<ProtectedRoute>
          {user?.role === "seller"? <SellerDashboard /> : <AppWelcome />}
          </ProtectedRoute>} />
        <Route path="/projets" element={<ProtectedRoute>
          {user?.role === "seller"? <SellerMyProjects /> : <Projets />}
          </ProtectedRoute>} />
        <Route path= "/projets/:id" element= {<ProtectedRoute><ProjectDetails /> </ProtectedRoute>} />
        <Route path ="/unauthorized" element={<UnauthorizedPage />}/> 
        <Route path="/mes-projets" element ={<SellerMyProjects/>}/> 
        <Route path="/new-project" element = {<RegisterProject/>}/> 
        <Route path ="/rapports" element ={<ReportSeller/> } />
        <Route path="/blog" element={<BlogPage/> } /> 
        <Route path = "/contact" element ={<ContactForm />} />
        <Route path = "/trade" element ={<ProtectedRoute><TradeForm /></ProtectedRoute>} />
        
      </Routes>
    </>
  );
}

export default App;