
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSun, FaHome, FaCheckSquare} from "react-icons/fa";
import "./LandingSection.css"; 
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const HomePage = () => {

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        if (currentIndex < avantages.length - 3) { // ✅ Stops at the last slide
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const prevSlide = () => {
        if (currentIndex > 0) { // ✅ Stops at the first slide
            setCurrentIndex(currentIndex - 1);
        }
    };
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); 
    const styles = {
        container: {
            position: 'relative',
            width: '100vw',
            minHeight: '100vh', // Allows the page to grow based on content
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/homepage_background.jpg)', // Change to actual image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
            zIndex: 0,
        },
        hero: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            color: '#fff',
            padding: '0 10%',
            zIndex: 1,
        },
        heroSection: {
            position: 'relative',
            width: '100%',
            height: '100vh', // ✅ Background is limited to this section
            backgroundImage: 'url(/homepage_background.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        sectionsContainer: {
            backgroundColor: '#ffffff', // ✅ Ensures a white background after hero section
            padding: '5em 5%',
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
          color: '#fff', // Couleur du texte (optionnel)
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
            border: '2px solid #fff',
            borderRadius: '30px',
            backgroundColor: isHovered ? '#fff' : 'transparent', // Change on hover
            color: isHovered ? '#213D30' : '#fff', // Change on hover
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
        }, 
        services: {
          padding: '2rem 5%',
         
        },
        serviceItem: {
            display: "grid",
            gridTemplateColumns: "1fr 1.65fr",  // ✅ Title on the left, text on the right
            gap: "2rem",
            alignItems: "center",
            padding: "1.5rem 0",
            borderBottom: "1px solid #ddd",
        },
        firstServiceItem: { 
            borderTop: "1px solid #ddd", // ✅ Add line above the first service
        },
        serviceTitle: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: '#213D30',
            maxWidth: "400px", // ✅ Forces line break for long titles
            wordWrap: "break-word",
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
        }, 
        sectionTitle: {
            color: '#213D30',
            fontSize: '2.7rem',
            fontWeight: 'bold',
            marginBottom: '2.5rem', // ✅ Increased spacing below title
            padding: "1.5rem 0",
        },
        subsectionTitle:{
            fontWeight: 'bold',
            color: '#213D30',
            marginBottom: '1rem', 

        }, 
        carouselContainer: {
            position: 'relative',
            width: '100%',
            height: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        slide: {
            position: 'absolute',
            opacity: 0,
            transition: 'opacity 1s ease-in-out',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        activeSlide: {
            opacity: 1,
        },
        slideImage: {
            width: '60%',
            borderRadius: '10px',
        },
        slideTitle: {
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginTop: '1rem',
            textAlign: 'center',
        },
        slideText: {
            fontSize: '1rem',
            color: '#333',
            textAlign: 'center',
            maxWidth: '600px',
        },
        arrowButton: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            padding: '0.8rem',
            borderRadius: '50%',
            fontSize: '1.5rem',
        },
        leftArrow: {
            left: '10px',
        },
        rightArrow: {
            right: '10px',
        },
        dotsContainer: {
            position: 'absolute',
            bottom: '10px',
            display: 'flex',
            gap: '5px',
        },
        dot: {
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ccc',
            cursor: 'pointer',
        },
        activeDot: {
            backgroundColor: '#213D30',
        },
        newSection: {
            textAlign: 'center',
            padding: '4rem 5%',
        },
        newSectionTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
        },
        newSectionGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            alignItems: 'center',
        },
        featureCard: {
            backgroundColor: '#f5f5f5',
            padding: '1.5rem',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
        },
        card: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#fff",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            maxWidth: "350px",
            margin: "0 auto",
        },
        cardImage: {
            width: "100%",
            borderRadius: "10px",
        },
        cardTitle: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginTop: "1rem",
        },
        cardText: {
            fontSize: "1rem",
            color: "#333",
            marginTop: "0.5rem",
        },
        featureImage: {
            width: '100%',
            borderRadius: '10px',
        },
        featureTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginTop: '1rem',
        },
        featureText: {
            fontSize: '1rem',
            color: '#333',
            marginTop: '0.5rem',
        }, 
        serviceText: {
            fontSize: "1rem",
            color: "#333",
        },
        testimonialsSection: {
            backgroundColor: "#213D30", // ✅ Use your accent color
            padding: "4rem 5%",
            textAlign: "center",
        },
        AvantagesTitle: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#fff", // ✅ Ensures contrast against the dark background
            marginBottom: "2rem",
        },
        testimonialsWrapper: {
            display: "flex", // ✅ Align testimonials in a row
            transition: "transform 0.5s ease-in-out",
        },
        
        arrowButton: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        },
        
        leftArrow: {
            left: "10px",
        },
        
        rightArrow: {
            right: "10px",
        },
        testimonialCard: {
            backgroundColor: "#fff",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
        },
        quote: {
            fontSize: "1.2rem",
            fontStyle: "italic",
            color: "#333",
        },
        author: {
            marginTop: "1rem",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#213D30",
        },
        company: {
            fontSize: "0.9rem",
            color: "#777",
        },
      };
      const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        { img: "/iceberg.jpg", title: "Suivi des Transactions", text: "Analysez l'achat et la vente de vos crédits carbones en temps réel." },
        { img: "/road.jpg", title: "Tableau de Bord", text: "Visualisez vos émissions compensées et le marché carbone." },
        { img: "/waterfall.jpg", title: "Optimisation des Achats", text: "Maximisez votre impact environnemental grâce à des recommandations intelligentes." }
    ];


    const avantages = [
        { titre: "Blockchain & Traçabilité", text: "Nous utilisons la blockchain pour garantir une transparence totale des transactions carbone, en évitant la double comptabilisation et en assurant un suivi infalsifiable des crédits." },
        { titre: "Une Solution Sur-Mesure", text: "Notre plateforme propose un accompagnement personnalisé pour aider les entreprises à structurer leur stratégie carbone et accéder aux meilleurs crédits certifiés." },
        { titre: "Conformité & Rapports Automatisés", text: "Nous facilitons la mise en conformité CSRD et RSE grâce à des rapports automatisés et des données auditées, directement intégrables aux bilans carbone."},
        { titre: "Des Projets à Impact Réel", text: "Nos crédits proviennent exclusivement de projets de séquestration carbone rigoureusement contrôlés, garantissant un impact mesurable et durable."},
        { titre: "Sensibilisation & Accompagnement", text: "Nous mettons à disposition des guides pédagogiques, webinaires et conseils stratégiques pour aider les entreprises à mieux comprendre et optimiser leur engagement climatique."},
    ];



    return (
        <div style={styles.container}>
        <div style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
        <div style={styles.hero}>
            <h1 style={styles.heroTitle}>CarbonX, votre plateforme d'échanges de Crédits Carbones</h1>
            <p style={styles.heroText}>
                Carbone X est une plateforme innovante utilisant la blockchain pour le trading de crédits carbones. 
                Notre objectif est de révolutionner le marché en facilitant les échanges de manière transparente.
            </p>
            <button style={styles.ctaButton} 
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate('/a-propos')}
        >En savoir plus</button>
        </div>
        </div>
        </div> 
        {/* Section Title */}
        <section className="landing-section">
      {/* Section Title */}
      <div className="title-container">
        <h4 className="subtitle">🌱 Une révolution pour le marché</h4>
        <h2 className="main-title">Une compensation carbone simple et responsable</h2>
      </div>

      {/* Grid Content */}
      <div className="grid-container">
        {/* Left Image */}
        <div
          className="grid-item image-card"
          style={{ backgroundImage: "url('/forest.jpg')" }}
        >
            <div className="card-overlay">
            <h3 className="overlay-title"> Des crédits carbone traçables et vérifiés. </h3>
            <p className='card-text'>Grâce à la blockchain, chaque crédit carbone que vous achetez est enregistré de 
                manière transparente et infalsifiable. Fini le greenwashing, chaque transaction est 100% vérifiable.</p>
         
          </div>
        </div>

        <div className="grid-item text-card">
        <FaSun className="card-icon" />
        <div className = "text-content"> 
          <h3 className="card-title">Achetez des crédits carbone en toute confiance</h3>
          <p className="card-text">
          Tous les crédits disponibles sur CarbonX sont issus de projets audités, sélectionnés selon des critères stricts (reforestation, énergies renouvelables, captation de CO₂). 
          Compensation fiable et impact réel garantis.
          </p>
          </div>
          </div>

        <div className="grid-item text-card">
        <FaHome className="card-icon" />
        <div className = "text-content"> 
          <h3 className="card-title">Un suivi simplifié pour votre conformité ESG</h3>
          <p className="card-text">
          CarbonX génère automatiquement des rapports conformes aux réglementations CSRD et ESRS, 
          facilitant la déclaration de votre compensation carbone et intégration dans votre stratégie RSE.
          </p>
          </div> 
        </div>
      </div>
    </section>
    <div className="why-wrapper">
  <section className="why-carbonx">
    <div className="why-container">
      <div className="text-card wide-text-card">
        <h3 className="why-title">Pourquoi CarbonX?</h3>
        <p className="why-description">
          Aujourd’hui, 90% des entreprises peinent à trouver des crédits carbone de qualité conformes aux normes européennes (CSRD, EU ETS). Le manque de transparence et la double comptabilisation 
          fragilisent la confiance dans le marché volontaire. CarbonX apporte une solution innovante en garantissant une compensation carbone sécurisée, 
          traçable et conforme grâce à la blockchain et un audit rigoureux. :
        </p>
        <ul className="why-list">
          <li><FaCheckSquare className="check-icon" /> Traçabilité totale grâce à la blockchain publique : Chaque crédit est enregistré sur une blockchain publique, éliminant tout risque de fraude. </li>
          <li><FaCheckSquare className="check-icon" /> Crédits carbone de haute qualité, audités et vérifiés: Sélection rigoureuse et double audit indépendant pour assurer un impact réel.</li>
          <li><FaCheckSquare className="check-icon" /> Conformité aux normes ESG européennes : Aligné avec les exigences CSRD, EU ETS et taxonomie verte.</li>
          <li><FaCheckSquare className="check-icon" /> Reporting automatisé pour simplifier la gestion des émissions: Génération de rapports ESG conformes, facilitant la gestion des émissions.</li>
        </ul>

      </div>
      <div className="why-image" style={{ backgroundImage: "url('/chamonix.jpg')" }}></div>
    </div>
  </section>
</div>

        <div style={styles.sectionsContainer}>
            <h2 style={styles.sectionTitle}> Services </h2>
            <div style = {{...styles.serviceItem,...styles.firstServiceItem}}>
                <h4 style={styles.serviceTitle}>Une plateforme tout-en-un</h4>
                <p style={styles.serviceText}>Gérez vos crédits carbones sur un seul espace. Que ce soit sur la marché volontaire (VCM) ou le marché réglementé (compliance), notre plateforme vous permet d'acheter
                    , vendre et gérer vos crédits en toute transpacrece. Finissez avec la fragmentation et suivew vos engagements climatiques depuis un unique tableau de bord. 
                </p>
                </div>
                <div style={styles.serviceItem}>
                <h4 style={styles.serviceTitle}>Rapports automatisés pour la CSRD & RSE</h4>
                <p style={styles.serviceText}> Facilitez votre conformité régmentation. Nous générons automatiquement des rapports détaillés pour répondre aux exigences de la CSRD et aux stratégies RSE. 
                    Accédez à des données précises sur vos compensations et simplifiez votre communication auprès des parties prenantes.  </p>
                </div>
                <div style={styles.serviceItem}>
                <h3 style={styles.serviceTitle}>Éducation & Sensibilisation pour un impact durable</h3>
                <p style={styles.serviceText}> Comprenez mieux la compensation carbone
                Nous proposons des ressources éducatives, webinaires et guides interactifs 
                pour aider entreprises et citoyens à comprendre comment fonctionne la compensation carbone et comment maximiser leur impact positif.</p>
            </div>
            <div style={styles.serviceItem}>
                <h3 style={styles.serviceTitle}>Outils analytiques & stratégies carbone</h3>
                <p style={styles.serviceText}> Prenez des décisions basées sur les données
                Avec nos tableaux de bord intelligents, analysez l'évolution de votre empreinte carbone, évaluez vos efforts de compensation et 
                ajustez votre stratégie climatique en temps réel.</p>
            </div>
            <div style={styles.serviceItem}>
                <h3 style={styles.serviceTitle}>Certificats de qualité & transparence blockchain</h3>
                <p style={styles.serviceText}> Évitez le greenwashing, certifiez vos crédits
                Chaque crédit carbone sur notre plateforme est audité et certifié selon les standards internationaux (Gold Standard, Verra, Label Bas Carbone, etc.). 
                Grâce à la blockchain, nous assurons une traçabilité totale, évitant la double comptabilisation et garantissant une véritable réduction d’émissions.</p>
            </div>
            
        </div>

      
      <Testimonials />
      <div className = "footer-wrapper"> 
  <Footer />
  </div>
    </div>

  );
};




export default HomePage;