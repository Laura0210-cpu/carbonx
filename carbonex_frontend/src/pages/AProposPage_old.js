import React from 'react';
import ReasonsToTradeCarbonCredits from '../components/ReasonsToTradeCarbonCredits';
import Footer from '../components/Footer';
import { FaCheckSquare} from "react-icons/fa";

const AProposPage = () => {
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column', // <-- Add this so contents stack vertically
        padding: '2rem 5%',
        fontFamily: "'Inter', sans-serif",
      },
       whyListStyles : {
        marginTop: "25px",
        marginBottom: "25px", 
        listStyle: "none",
        padding: 0,
        marginLeft: "auto",
        width: "95%",
      },
      checkIconStyles : {
        fontSize: "22px",
        marginRight: "10px",
        color: "#0f3d21",
        
      },
      
      whyListItemStyles :{
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        marginBottom: "12px", // ✅ Add spacing between list items
      },
    firstSection: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '4rem 5%',
      },
    imageWrapper: {
      flex: 1, // Take up 1 part of the space
      display: 'flex',
      justifyContent: 'center', // Center the image horizontally
    },
    image: {
      maxWidth: '100%', // Make the image responsive
      height: 'auto',
    },
    textContent: {
      flex: 2, // Take up 2 parts of the space
      paddingLeft: '2rem', // Add space between the image and text
    },
    subtitle: {
      color: '#213D30', // Accent color
      textTransform: 'uppercase',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1.5rem',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#555',
    },
    secondSectionWrapper: {
        padding: '0.5rem 5%',
        clear: 'both', 
      },
  };

  return (
    <div style={styles.container}>
      {/* Left Side: Image */}
      <div style={styles.firstSection}>
      <div style={styles.imageWrapper}>
        <img
          src="/Trees_watercolor.png" // Replace with your tree image path
          alt="Tree Illustration"
          style={styles.image}
        />
      </div>

      {/* Right Side: Text Content */}
      <div style={styles.textContent}>
        <h3 style={styles.subtitle}>Découvrez notre offre</h3>
        <h1 style={styles.title}>
        Révolutionner la compensation carbone avec transparence et impact réel.
        </h1>
        <p style={styles.paragraph}>
        CarbonX est une plateforme de compensation carbone nouvelle génération, qui met fin aux pratiques opaques grâce à une technologie blockchain transparente et un double audit indépendant.

          Aujourd’hui, le marché des crédits carbone volontaires est complexe, peu régulé et sujet à la double comptabilisation. CarbonX garantit des crédits de haute qualité, certifiés et traçables, 
          tout en aidant les entreprises à respecter les normes CSRD, EU ETS et ESG.
        </p>
        </div>
        
        <div style ={{ padding: '2rem 5%'}}> 
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
        Un marché carbone plus fiable et accessible à tous.
        </h2>
        <p style={styles.paragraph}>
        La compensation carbone doit être un outil efficace
         pour réduire les émissions mondiales, et non un simple exercice de communication.
          Malheureusement, trop d’entreprises peinent à trouver des crédits carbone authentiques,
           conformes et impactants.
           CarbonX a été conçu pour répondre à ces défis avec :
           <ul style={styles.whyListStyles} > 
            <li style ={styles.whyListItemStyles}><FaCheckSquare style={styles.checkIconStyles} /> Une traçabilité totale → Tous les crédits sont inscrits sur la blockchain publique, assurant une transparence absolue.
            </li> 
            <li style ={styles.whyListItemStyles}><FaCheckSquare style={styles.checkIconStyles} /> Un double audit indépendant → Vérification stricte des projets pour éviter le greenwashing et garantir un impact réel.
            </li> 
            <li style ={styles.whyListItemStyles}><FaCheckSquare style={styles.checkIconStyles} />  Un reporting automatisé et conforme aux normes ESG → Simplifie la déclaration des crédits carbone pour répondre aux exigences réglementaires européennes.
            </li> 

           </ul>
          
              
💡 Notre mission ? Créer un marché carbone fiable, accessible et aligné avec la transition écologique mondiale.
        </p>
       
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
        Nos engagements et valeurs
        </h2>
        <p style={styles.paragraph}>
        Chez CarbonX, nous avons la conviction que la compensation carbone doit être fiable, mesurable et accessible. Nous nous engageons à :
        🌱 Favoriser l’impact réel → Chaque crédit carbone acheté finance un projet vérifié et suivi dans le temps.
        🔗 Assurer une transparence totale → Fini la double comptabilisation, tout est inscrit sur une blockchain publique.
        📜 Simplifier la conformité des entreprises → Nous facilitons l’alignement avec la CSRD, EU ETS et la taxonomie verte européenne.
        🚀 Innover pour un avenir durable → Intégration de l’IA, des données satellites et de nouvelles technologies pour améliorer l’efficacité des crédits carbone.

📢 CarbonX, c’est la garantie d’un marché carbone responsable et tourné vers l’avenir.
        </p>
      </div>
      </div>
      <div style= {styles.secondSectionWrapper}>
      <ReasonsToTradeCarbonCredits />
      </div>
      <div style={{ margin: 0, padding: 0 }}>
    <Footer />
</div>
      </div>
    
    
    
  );
};

export default AProposPage;
