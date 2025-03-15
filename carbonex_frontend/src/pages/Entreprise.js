import React from 'react';
import Footer from '../components/Footer';

const Entreprise = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column', 
            padding: '2rem 5%',
            fontFamily: "'Inter', sans-serif",
          },
        textContent: {
          flex: 2, 
          paddingLeft: '2rem', 
        },
        subtitle: {
          color: '#213D30', 
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
          lineHeight: '2',
          color: '#555',
        },
        hero: {
            padding: '80px 5%',
            textAlign: 'center',
            
          },
    };
    return (
      <div>
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
        <p style= {styles.paragraph}>
        Nous croyons en un avenir où la durabilité est au cœur des préoccupations
         de toutes les entreprises. CarbonX vise à devenir un levier de transformation,
          permettant aux acteurs économiques de compenser leurs émissions et d'investir 
          dans des solutions durables. En mettant l'innovation au service de la planète, 
          nous voulons contribuer à un marché carbone plus fluide, équitable et accessible.
        </p>
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            Notre Mission et Vision
        </h2>
        <p style= {styles.paragraph}>
        Mission : Accompagner les entreprises et les individus dans leur démarche de réduction et de
         compensation des émissions de carbone en proposant une plateforme intuitive et fiable.

        Vision : Faire de CarbonX le partenaire de référence pour les acteurs engagés dans la transition
         écologique et économique, en intégrant des outils technologiques avancés pour un impact positif et mesurable.
        </p>
        
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            Notre Histoire
        </h2>
        <p style= {styles.paragraph}>
        L’équipe fondatrice de CarbonX s’est formée autour d’une volonté commune de révolutionner le marché des crédits carbone en y intégrant la technologie blockchain. Trois étudiantes et amies, rencontrées lors de leur master à l’ESSEC, ont réuni des compétences complémentaires et une passion pour la finance, la transition écologique et l’innovation.

L’idée a émergé lorsque Laura a découvert l’usage de la blockchain dans la supply chain et envisagé son application aux crédits carbone. Après des recherches approfondies, l’équipe a constaté les limites actuelles du marché et a décidé de développer une solution innovante. Leur participation au concours FIFG leur a permis d’affiner leur projet et de bénéficier du soutien de coachs et d’experts du secteur qui les ont aidées à mieux comprendre les enjeux des entreprises sur le marché du carbone.

En parallèle, CarbonX a bénéficié de l’accompagnement de plusieurs coachs obtenus grâce à sa participation au concours FIFG. Ces mentors ont apporté un regard extérieur précieux sur le développement du projet, aidant à affiner le positionnement et la stratégie de mise en marché. Par ailleurs, des experts du secteur ont également contribué à enrichir la compréhension du marché du carbone. Certains spécialistes des marchés carbone et de la réglementation associée ont partagé leur expertise et permis d’approfondir l’analyse des besoins des entreprises, ainsi que les défis réglementaires et économiques auxquels elles sont confrontées. Cette interaction avec des professionnels du secteur a joué un rôle clé dans la structuration du modèle économique de CarbonX et continue d’orienter certaines décisions stratégiques.



        </p>
        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginTop: '2rem' }}>
            L'équipe
        </h2>
           <p style= {styles.paragraph}>
           Ana : Forte d'un background en business, Ana est la visionnaire stratégique de l'équipe. Son expertise internationale 
           et son esprit entrepreneurial permettent à CarbonX de rester connectée aux réalités du marché mondial.
        </p>
        <p style= {styles.paragraph}>
            Emilie : La benjamine du groupe, Émilie est une passionnée d'écologie.
            Elle apporte sa perspective novatrice et son engagement pour l'environnement, 
            rendant chaque projet aligné avec les objectifs de durabilité.
        </p>
        <p style= {styles.paragraph}>
            Laura : Intéressée par les mathématiques, la technologie et la finance, 
            Laura est la technicienne de l'équipe. Son intérêt pour les données 
            et la blockchain garantit la robustesse technique de la plateforme CarbonX.
           </p>
           
        </div> 
        <Footer/>
        </div> 
    );

}; 
export default Entreprise;
