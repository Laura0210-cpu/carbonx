import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
    
      <div className="footer-overlay">
        <div className="footer-container">
          {/* Section Newsletter */}
          <div className="footer-newsletter">
            <h2 className="footer-title">Newsletter</h2>
            <div className="newsletter-input">
              <input type="email" placeholder="Votre Email ici" />
              <button>→</button>
            </div>
          </div>

          {/* Section Liens et Informations */}
          <div className="footer-content">
            <div className="footer-brand">
              <h3>CarbonX </h3>
              <p>Suivez-nous sur les réseaux! </p>
              <div className="social-icons">
                <FaTwitter />
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>

            {/* Liens rapides */}
            <div className="footer-links">
              <h4>Liens Rapides</h4>
              <ul>
                <li><a href = "/" className = "nav-link">Menu</a></li>
                <li><a href = "/a-propos" className = "nav-link" >Offre</a></li>
                <li><a href = "/Entreprise" className = "nav-link">Entreprise</a></li>
                <li><a href = "/blog" className = "nav-link">Blog</a></li>
                <li><a href = "/contact" className = "nav-link">Contact</a></li>
              </ul>
            </div>
            
            {/* Informations */}
            <div className="footer-links">
              <h4>Informations</h4>
              <ul>
                <li>Carrières</li>
                <li>Mentions Légales</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Découverte */}
            <div className="footer-links">
              <h4>Découvrez</h4>
              <ul>
                <li> <Link to = "/a-propos" className = "nav-link" > Notre Solution </Link> </li>
                <li><a href = "/contact" className = "nav-link">Contact</a> </li>
                <li><a href = "/blog" className = "nav-link">Blog</a></li>
                <li><a href = "/Entreprise" className = "nav-link">Entreprise</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>Copyright ©2025 CarbonX - Droits Réservés.</p>
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;
