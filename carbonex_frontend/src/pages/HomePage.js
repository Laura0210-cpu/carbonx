
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

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
        <section style={styles.testimonialsSection}>
        <h2 style={styles.AvantagesTitle}>Nos avantages</h2>
        <button onClick={prevSlide} style={{ ...styles.arrowButton, ...styles.leftArrow }}>◀</button>

<div style={styles.carouselContainer}>
    <div style={{ ...styles.testimonialsWrapper, transform: `translateX(-${currentIndex * 370}px)` }}>
        {avantages.map((avantages, index) => (
            <div key={index} style={styles.testimonialCard}>
                <p style={styles.quote}>“{avantages.titre}”</p>
                <p style={styles.author}>{avantages.text}</p>
                
            </div>
        ))}
    </div>
</div>

{/* Right Arrow */}
<button onClick={nextSlide} style={{ ...styles.arrowButton, ...styles.rightArrow }}>▶</button>
        {/* Left Arrow */}

    </section>

        <div style={styles.carouselContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.slide,
                            ...(index === currentSlide ? styles.activeSlide : {}),
                        }}
                    >
                        <img src={slide.img} alt={slide.title} style={styles.slideImage} />
                        <h3 style={styles.slideTitle}>{slide.title}</h3>
                        <p style={styles.slideText}>{slide.text}</p>
                        <div style={styles.card}>
                        <img src={slide.img} alt={slide.title} style={styles.cardImage} />
                        <h3 style={styles.cardTitle}>{slide.title}</h3>
                        <p style={styles.cardText}>{slide.text}</p>
    </div>
                    </div>
                ))}
                <button onClick={prevSlide} style={{ ...styles.arrowButton, ...styles.leftArrow }}>‹</button>
                <button onClick={nextSlide} style={{ ...styles.arrowButton, ...styles.rightArrow }}>›</button>
                <div style={styles.dotsContainer}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            style={{
                                ...styles.dot,
                                ...(index === currentSlide ? styles.activeDot : {}),
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* New Section Below Carousel */}
            <div style={styles.newSection}>
                <h2 style={styles.newSectionTitle}>
                    Gérez vos crédits carbones avec transparence
                </h2>
                
                <div style={styles.newSectionGrid}>
                    <div style={styles.featureCard}>
                        <img src="/chart1.jpg" alt="Graphique dépenses" style={styles.featureImage} />
                        <h3 style={styles.featureTitle}>Suivi des Transactions</h3>
                        <p style={styles.featureText}>
                            Analysez l'achat et la vente de vos crédits carbones en temps réel.
                        </p>
                    </div>

                    <div style={styles.featureCard}>
                        <img src="/chart2.jpg" alt="Statistiques carbone" style={styles.featureImage} />
                        <h3 style={styles.featureTitle}>Tableau de Bord</h3>
                        <p style={styles.featureText}>
                            Visualisez vos émissions compensées et le marché carbone.
                        </p>
                    </div>

                    <div style={styles.featureCard}>
                        <img src="/chart3.jpg" alt="Statistiques entreprise" style={styles.featureImage} />
                        <h3 style={styles.featureTitle}>Optimisation des Achats</h3>
                        <p style={styles.featureText}>
                            Maximisez votre impact environnemental grâce à des recommandations intelligentes.
                        </p>
                    </div>
                </div>
            </div>
         <section style={styles.sectionsContainer}>
        <h2 style ={styles.sectionTitle} >Avantages</h2>
        <div style={styles.serviceItem}>
          <h3 style ={styles.subsectionTitle}>Transparence Accrue</h3>
          <p>
            Chaque transaction est publique et immuable, augmentant la confiance des utilisateurs. Pas de double comptabilisation. 
          </p>
        </div>
        <div style={styles.serviceItem}>
          <h3 style ={styles.subsectionTitle} >Interopérabilité Mondiale</h3>
          <p>
            Permet aux entreprises de participer au marché global.
          </p>
        </div>
        <div style={styles.serviceItem}>
          <h3 style ={styles.subsectionTitle} >Sécurité et traçabilité</h3>
          <p>
            Grâce aux fonctions de hachage cryptographique et au mécanisme de consensus, les transactions sont diffusées et enregistrées sur l'ensemble du réseau sans possibilité de modification privée. Chaque transaction est enregistrée de façon permanente et forme une chaîne irréversible, permettant de retracer l'historique avec précision.
          </p>
        </div>
        <div style={styles.serviceItem}>
          <h3 style ={styles.subsectionTitle} >Efficacité</h3>
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