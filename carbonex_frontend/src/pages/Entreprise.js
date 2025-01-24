import React from 'react';

const Entreprise = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column', // <-- Add this so contents stack vertically
            padding: '2rem 5%',
            fontFamily: "'Inter', sans-serif",
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
        hero: {
            padding: '80px 5%',
            textAlign: 'center',
            
          },
    };
    return (
        <div style={styles.hero}>
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            Introduction
        </h2>
        <p style= {styles.paragraph}>
        CarbonX est née d'une ambition : simplifier le trading de crédits carbone tout en contribuant 
        à un avenir plus durable. Grâce à la technologie blockchain, nous voulons créer 
        une plateforme transparente et efficace qui permet aux entreprises et aux individus
         de participer activement à la transition écologique. Notre mission est d'être un acteur 
         clé dans la lutte contre le changement climatique, en favorisant des échanges responsables 
         et accessibles à tous. 
        </p> 
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            Vers Un Nouveau Future
        </h2>
        <p>
        Nous croyons en un avenir où la durabilité est au cœur des préoccupations
         de toutes les entreprises. CarbonX vise à devenir un levier de transformation,
          permettant aux acteurs économiques de compenser leurs émissions et d'investir 
          dans des solutions durables. En mettant l'innovation au service de la planète, 
          nous voulons contribuer à un marché carbone plus fluide, équitable et accessible.
        </p>
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            Notre Mission et Vision
        </h2>
        <p>
        Mission : Accompagner les entreprises et les individus dans leur démarche de réduction et de
         compensation des émissions de carbone en proposant une plateforme intuitive et fiable.

        Vision : Faire de CarbonX le partenaire de référence pour les acteurs engagés dans la transition
         écologique et économique, en intégrant des outils technologiques avancés pour un impact positif et mesurable.
        </p>
        
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            Notre Histoire
        </h2>
        <p>
        CarbonX est l'histoire d'un groupe d'étudiantes passionnées et déterminées,
        qui se sont rencontrées à l'Essec. Avec des parcours internationaux et des perspectives variées, 
        elles ont décidé de s'associer pour répondre à un défi commun.
         L'idée de CarbonX est née lors d'un concours organisé par le FIFG, 
         où leur projet a rapidement pris forme. Ce mélange unique de cultures 
         et de compétences est au cœur de la force de CarbonX.
        </p>
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            L'équipe
        </h2>
           <p>
           Ana : Forte d'un background en business, Ana est la visionnaire stratégique de l'équipe. Son expertise internationale 
           et son esprit entrepreneurial permettent à CarbonX de rester connectée aux réalités du marché mondial.
        </p>
        <p>
            Emilie : La benjamine du groupe, Émilie est une passionnée d'écologie.
            Elle apporte sa perspective novatrice et son engagement pour l'environnement, 
            rendant chaque projet aligné avec les objectifs de durabilité.
        </p>
        <p>
            Laura : Intéressée par les mathématiques, la technologie et la finance, 
            Laura est la technicienne de l'équipe. Son intérêt pour les données 
            et la blockchain garantit la robustesse technique de la plateforme CarbonX.
           </p>
        </div>  
    );

}; 
export default Entreprise;
