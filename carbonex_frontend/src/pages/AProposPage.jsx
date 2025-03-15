import React,{ useState, useEffect, useRef } from "react";
import "./style_test.css";
import Footer from "../components/Footer";
import { FaCheckSquare } from "react-icons/fa";

export const AProposPage = () => {


    const [scrolled, setScrolled] = useState(false);
    const [textDark, setTextDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 100);

            // ✅ Change text color when reaching white section
            setTextDark(scrollPosition > 2140); // Adjust 600 to match when white section appears
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        
        <div>
            

   
        
        <div className="projet-page-de-garde">
            
            <div className="overlap-group">
                
                <div className="text-wrapper-3">Notre Offre</div>
                <p className="p">
                    CarbonX propose une solution innovante et structurée pour répondre aux défis du marché des crédits carbone. 
                    Cette section détaille la vision, la stratégie et les étapes clés du projet, visant à garantir 
                    transparence, traçabilité et conformité pour une compensation carbone efficace et crédible.
                </p>
                <div className="text-wrapper-4">Découvrez CarbonX</div>
                <p className="text-wrapper-5">
                CarbonX est une plateforme de compensation carbone nouvelle génération, qui met fin aux pratiques opaques grâce à une technologie blockchain transparente et un double audit indépendant. Aujourd’hui, le marché des crédits carbone volontaires est complexe, peu régulé et sujet à la double comptabilisation. CarbonX garantit des crédits de haute qualité, certifiés et traçables, tout en aidant les entreprises à respecter les normes CSRD, EU ETS et ESG.

Les crédits carbone nécessitent des contrôles stricts et la confiance de chaque partie prenante pour assurer la traçabilité et l'impact réel.
                </p>

                <div className="text-wrapper-6">Un marché carbone plus fiable et accessible à tous</div>
                <p className="text-wrapper-7">
                La compensation carbone doit être un outil efficace pour réduire les émissions mondiales, et non un simple exercice de communication. Malheureusement, trop d’entreprises peinent à trouver des crédits carbone authentiques, conformes et impactants. CarbonX a été conçu pour répondre à ces défis avec :
                <ul className = "whyListStyles" > 
                       <li >Une traçabilité totale → Tous les crédits sont inscrits sur la blockchain publique, assurant une transparence absolue.
                       </li> 
                       <li >Un double audit indépendant → Vérification stricte des projets pour éviter le greenwashing et garantir un impact réel.
                       </li> 
                       <li >Un reporting automatisé et conforme aux normes ESG → Simplifie la déclaration des crédits carbone pour répondre aux exigences réglementaires européennes.
                       </li> 
                      </ul>
                      </p>

                <div className="text-wrapper-8">Nos Engagements et Valeurs</div>
                <p className="text-wrapper-9">
                Chez CarbonX, nous sommes convaincus que la compensation carbone ne doit pas être un simple acte administratif ou un outil marketing, mais un levier concret pour lutter contre le changement climatique. Notre mission est de rendre ce marché plus fiable, plus transparent et plus efficace, en offrant aux entreprises et aux investisseurs une plateforme sécurisée et alignée avec les meilleures pratiques environnementales.</p>
                <p className = "text-wrapper-10">Favoriser un Impact Réel</p>
                <p className= "text-wrapper-9" style={{ top: "74%"}}>Nous sélectionnons uniquement des projets certifiés et audités qui garantissent une réduction ou une séquestration effective des émissions de CO₂. Chaque crédit carbone acheté sur CarbonX finance un projet tangible, suivi dans le temps, avec des indicateurs clairs sur son efficacité environnementale.</p>
                <p className = "text-wrapper-10" style ={{ top : "78%"}}>Assurer une transparence totale grâce à la blockchain </p>
                <p className= "text-wrapper-9" style={{ top: "80%"}}>Le marché de la compensation carbone souffre de double comptabilisation et de manque de traçabilité. CarbonX élimine ces risques en enregistrant chaque transaction sur une blockchain publique. Cela signifie que chaque crédit acheté est unique, inviolable et vérifiable en temps réel, garantissant une compensation carbone crédible et sans ambiguïté.</p>
                <p className = "text-wrapper-10" style ={{ top : "84%"}}> Simplifier la conformité et l’alignement réglementaire</p>
                <p className= "text-wrapper-9" style={{ top: "86%"}}>Les entreprises doivent aujourd’hui se conformer à des réglementations strictes comme la CSRD (Corporate Sustainability Reporting Directive), l’EU ETS (Système d’échange de quotas d’émission de l’UE) et la taxonomie verte européenne. CarbonX facilite cette transition en offrant des outils de reporting automatisés, garantissant une traçabilité et une conformité simplifiée pour nos utilisateurs.</p>
                <p className = "text-wrapper-10" style ={{ top : "90.5%"}}>Innover pour un avenir durable </p>
                <p className= "text-wrapper-9" style={{ top: "92.5%"}}>Nous croyons en l’innovation comme moteur de transformation environnementale. CarbonX intègre des technologies avancées, comme l’intelligence artificielle et l’analyse satellite, pour améliorer la qualité des crédits carbone, affiner les vérifications et identifier de nouveaux projets à fort impact. Notre engagement est d’évoluer constamment pour offrir les meilleures solutions aux entreprises et aux acteurs du climat.</p>
            </div>
            
        </div>
        <div className="parallax-wrapper">
            <div className="white-section"> 
        <div className="split-section">
        <div className="left-column">
          <h2 style= {{fontSize : "38px"}}>Comment ça marche? </h2>
          <p className="text-container">
          <b>Étape 1:</b> Sélectionnez des crédits carbone certifiés. Tous les projets sont validés via un double audit indépendant et conformes aux standards internationaux (Verra, Gold Standard, etc.).
           </p>
           <p className="text-container" style ={{marginTop: "15px"}}>
          <b>Étape 2:</b> Achetez et stockez vos crédits en toute sécurité. Chaque crédit carbone est enregistré sur la blockchain, garantissant zéro fraude et zéro double comptabilisation.
           </p>
           <p className="text-container" style ={{marginTop: "15px"}} >
            <b>Étape 3:</b> Suivez et Reportez vos achats facilement.Notre outil génère des rapports automatisés et conformes aux réglementations européennes, facilitant la déclaration ESG des entreprises.
            </p> 
                    </div>
        
        <div className="right-column">
          <img
            className="split-image"
            alt="Project"
            src="/road.jpg" // replace with your image path
          />
        </div>
        </div>
        
      </div>
      </div>
      <Footer />
        </div>
    
    );
};
export default AProposPage;

