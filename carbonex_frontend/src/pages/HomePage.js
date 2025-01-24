
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const styles = {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem 5%',
          backgroundColor: '#fff',
          boxShadow: '0 0 5px rgba(0,0,0,0.1)'
        },
        logo: {
          fontWeight: 'bold',
          fontSize: '1.5rem'
        },
        nav: {
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        },
        hero: {
          padding: '80px 5%',
          textAlign: 'center',
          
        },
        heroTitle: {
          maxWidth: '900px', 
          fontSize: '4.5rem',
          fontWeight: 'bold',
          margin: '0 auto', 
          marginBottom: '50px',
        },
        heroText: {
          marginTop: '100px', 
          maxWidth: '600px', // Limite la largeur pour qu'il se répartisse en plusieurs lignes
          margin: '0 auto', // Centre horizontalement
          fontSize: '1.2rem', // Taille plus petite que le titre
          lineHeight: '1.5', // Espacement entre les lignes
          color: '#333', // Couleur du texte (optionnel)
        },
        heroImage: {
          marginTop: '50px',  // Space above the image
          width: '100%',      // Makes the image responsive
          height: '400px',
          objectFit: 'cover',
        },
        ctaButton: {
            marginTop: '2rem',
            padding: '0.8rem 1.6rem',
            border: '2px solid #213D30',
            borderRadius: '30px',
            backgroundColor: isHovered ? '#213D30' : 'transparent', // Change on hover
            color: isHovered ? '#fff' : '#213D30', // Change on hover
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
        }, 
        services: {
          padding: '2rem 5%',
         
        },
        serviceItem: {
          backgroundColor: '#fff',
          padding: '0.5rem',
          marginBottom: '0.5rem',
          borderRadius: '5px'
        },
        testimonials: {
          padding: '2rem 5%',
          backgroundColor: '#fff',
          textAlign: 'center'
        },
        contact: {
          padding: '2rem 5%',
          backgroundColor: '#f9f9f9'
        },
        footer: {
          textAlign: 'center',
          padding: '1rem 5%',
          backgroundColor: '#fff',
          color: '#777'
        }
      };

    return (
        <div>

      <section style={styles.hero}>
        <h1 style ={styles.heroTitle}>CarbonX, votre plateforme d'échanges de Crédits Carbones</h1>
        <p style= {styles.heroText}>
          Carbone X est une plateforme innovante utilisant la blockchain pour le trading de crédits carbones. 
          Notre objectif est de révolutionner le marcher en facilitant les échanges de manière transparente. 
        </p>      
        <button style={styles.ctaButton} 
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate('/a-propos')}
        >En savoir plus</button>
        <img
          src="/test_image.jpg"
          alt="Illustration"
          style={styles.heroImage}
        />
      </section>

      {/* Services Section */}
      <section style={styles.services}>
        <h2 style ={{color: '#213D30'}}>Avantages</h2>
        <div style={styles.serviceItem}>
          <h3 style ={{color: '#213D30'}}>Transparence Accrue</h3>
          <p>
            Chaque transaction est publique et immuable, augmentant la confiance des utilisateurs. Pas de double comptabilisation. 
          </p>
        </div>
        <div style={styles.serviceItem}>
          <h3 style ={{color: '#213D30'}} >Interopérabilité Mondiale</h3>
          <p>
            Permet aux entreprises de participer au marché global.
          </p>
        </div>
        <div style={styles.serviceItem}>
          <h3 style ={{color: '#213D30'}} >Sécurité et traçabilité</h3>
          <p>
            Grâce aux fonctions de hachage cryptographique et au mécanisme de consensus, les transactions sont diffusées et enregistrées sur l'ensemble du réseau sans possibilité de modification privée. Chaque transaction est enregistrée de façon permanente et forme une chaîne irréversible, permettant de retracer l'historique avec précision.
          </p>
        </div>
        <div style={styles.serviceItem}>
          <h3 style ={{color: '#213D30'}} >Efficacité</h3>
          <p>
          La blockchain supprime les intermédiaires, réduisant les délais et les couts de traitement. Elle utilise aussi des contrats intelligents qui automatisent l'éxécution des termes lorsque les conditions prédéfinies sont remplies. 
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <h2>Témoignages de Clients</h2>
        <blockquote>« Le trading de crédits carbones n'a jamais été aussi simple...»</blockquote>
        <p><strong>Laura Doledec </strong></p>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <h2>Nous Contacter</h2>
        <div>
          <p><strong>Adresse:</strong> 2 avenue Bernard Hirsch, 95000 Cergy</p>
          <p><strong>Email:</strong> contact@carbonex.com</p>
          <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
        </div>
      </section>

      <footer style={styles.footer}>
        &copy; 2025 Carbone X - Tous droits réservés
      </footer>
    </div>
  );
};




export default HomePage;