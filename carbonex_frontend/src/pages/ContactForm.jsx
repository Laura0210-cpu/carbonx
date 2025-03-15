import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Parlez à notre équipe <span>amicale</span> de vente</h2>
      <p className="contact-subtitle">
      Nous vous aiderons à trouver la solution parfaite, quelle que soit la taille de votre entreprise.
      </p>

      <div className="contact-wrapper">
        {/* Formulaire de contact*/}
        <form className="contact-form">
          <div className="input-group">
            <div className="input-field">
              <label>Prénom *</label>
              <input type="text" placeholder="Prénom" required />
            </div>
            <div className="input-field">
              <label>Nom *</label>
              <input type="text" placeholder="Nom" required />
            </div>
          </div>

          <div className="input-field">
            <label>Email *</label>
            <input type="email" placeholder="you@company.com" required />
          </div>

          <div className="input-field">
            <label>Numéro de téléphone</label>
            <div className="phone-input">
              <select>
                <option value="US">US</option>
                <option value="FR">FR</option>
                <option value="UK">UK</option>
              </select>
              <input type="tel" placeholder="+33 (6) 00 00 00 00" />
            </div>
          </div>

          <div className="input-field">
            <label>Message *</label>
            <textarea placeholder="Laissez nous un message..." required></textarea>
          </div>

          <div className="services">
            <label>Services</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Marché Volontire</label>
              <label><input type="checkbox" /> Marché Non Volontaire</label>
              <label><input type="checkbox" /> Règlementation</label>
              <label><input type="checkbox" /> Autre</label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Envoyer le message</button>
        </form>

        {/* Right Side: Contact Info */}
        <div className="contact-info">
          <div className="info-section">
            <h3>Discutez avec nous</h3>
            <p>Parlez à notre équipe via le chat en direct.</p>
            <ul>
              <li>💬 <a href="#">Démarrer un chat en direct</a></li>
              <li>📧 <a href="#">Envoyez nous un e-mail</a></li>
              <li>✉️ <a href="#">Message sur X</a></li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Appelez-nous</h3>
            <p>Disponible du lundi au vendre de 9h à 18h. </p>
            <ul>
              <li>📞 <a href="#">136 366</a></li>
              <li>📞 <a href="#">+33 6 00 00 00 00  </a></li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Plus de 100 entreprises nous font confiance. </h3>
            <p>Rendez nous visite dans nos bureaux à Paris</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
