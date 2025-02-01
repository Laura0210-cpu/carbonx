import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center', 
      padding: '1rem 5%',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Inter', sans-serif",
    },
    logo: {
      display: 'flex',
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#213D30', // Purple color
      textDecoration: 'none',
      alignItems: 'center', 
      marginRight: 'auto', 
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: '#213D30', // Purple on hover
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      marginLeft: '2rem',
    },
    signUpButton: {
      backgroundColor: '#213D30', // Purple background
      color: '#fff',
      padding: '0.8rem 1.6rem',
      borderRadius: '30px',
      fontWeight: 'bold',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    signUpButtonHover: {
      backgroundColor: '#213D30', // Darker purple on hover
    },
    logInButton: {
      backgroundColor: 'transparent', // Transparent background
      color: '#213D30', // Purple text
      padding: '0.8rem 1.6rem',
      borderRadius: '30px',
      border: '2px solid #213D30',
      fontWeight: 'bold',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    logInButtonHover: {
      backgroundColor: '#213D30',
      color: '#fff',
    },
  };

  return (
    <header style={styles.navbar}>
      {/* Logo */}
      <img
        src="/Logo.png"
        alt="Logo"
        style={{ height: '130px', marginRight: '10px' }}
      />
      <Link to="/" style={styles.logo}>
        <span>CarbonX</span>
      </Link>

      {/* Navigation Links */}
      <nav style={styles.navLinks}>
        <Link to="/a-propos" style={styles.navLink}>
          Offre
        </Link>
        <Link to="/Entreprise" style={styles.navLink}>
          Entreprise
        </Link>
        <Link to="/ressources" style={styles.navLink}>
          Ressources
        </Link>
        <Link to="/contact" style={styles.navLink}>
          Contact
        </Link>
      </nav>

      {/* Buttons */}
      <div style={styles.buttonGroup}>
        {/* Log In Button */}
        <Link
          to="/login"
          style={styles.logInButton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.logInButtonHover.backgroundColor;
            e.target.style.color = styles.logInButtonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.logInButton.backgroundColor;
            e.target.style.color = styles.logInButton.color;
          }}
        >
          Log In
        </Link>

        {/* Sign Up Button */}
        <Link
          to="/signup"
          style={styles.signUpButton}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#1f2d28')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#213D30')}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
