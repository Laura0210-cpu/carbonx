import React from 'react';
import ReasonsToTradeCarbonCredits from '../components/ReasonsToTradeCarbonCredits';

const AProposPage = () => {
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column', // <-- Add this so contents stack vertically
        padding: '2rem 5%',
        fontFamily: "'Inter', sans-serif",
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
          Simplifier le trading de crédits carbone et contribuer à un avenir
          durable avec CarbonX
        </h1>
        <p style={styles.paragraph}>
          Carbone X est une plateforme innovante conçue pour simplifier vos
          opérations. Nos solutions évolutives vous aident à optimiser votre
          flux de travail, réduire les tâches répétitives et automatiser vos
          processus. Notre objectif est de vous accompagner dans votre
          transition vers une gestion durable et efficace.
        </p>
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
          Qu'est-ce que les crédits carbone?
        </h2>
        <p style={styles.paragraph}>
          Les crédits carbone sont des instruments financiers qui représentent
          une tonne de CO2 évitée ou retirée de l'atmosphère. Chaque crédit
          représente une réduction de la quantité de CO2 émise dans
          l'atmosphère. Les entreprises et les organisations peuvent acheter
          ces crédits pour compenser leur propre empreinte carbone, tout en
          contribuant à la lutte contre le changement climatique.
        </p>
        <h3 style={{ ...styles.subtitle, marginTop: '2rem' }}>
          La certification et la fiabilité
        </h3>
        <p style={styles.paragraph}>
          Les crédits carbone sont généralement émis et certifiés par des
          organismes de vérification indépendants, assurant leur fiabilité et
          leur authenticité. La certification garantit que les réductions
          d'émissions ont été quantifiées et validées de manière indépendante,
          ce qui est essentiel pour la confiance et la crédibilité du marché du
          carbone.
        </p>
      </div>
      </div>
      <div style= {styles.secondSectionWrapper}>
      <ReasonsToTradeCarbonCredits />
      </div>
      </div>
    
    
    
  );
};

export default AProposPage;
