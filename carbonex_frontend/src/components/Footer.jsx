import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'; 
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
                <li><Link to  = "/" className = "nav-link">Menu</Link></li>
                <li><Link to  = "/a-propos" className = "nav-link" >Offre</Link></li>
                <li><Link to  = "/Entreprise" className = "nav-link">Entreprise</Link></li>
                <li><Link to  = "/blog" className = "nav-link">Blog</Link></li>
                <li><Link to  = "/contact" className = "nav-link">Contact</Link></li>
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
                <li><Link to = "/contact" className = "nav-link">Contact</Link> </li>
                <li><Link to = "/blog" className = "nav-link">Blog</Link></li>
                <li><Link to = "/Entreprise" className = "nav-link">Entreprise</Link></li>
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
