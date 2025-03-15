import React from "react";
import "./Testimonials.css"; // Assure-toi d'importer le bon fichier CSS

const testimonials = [
  {
    name: "Thomas Neuraz",
    role: "Cofondateur et CEO de SmartGarant",
    review:
      "Ce qui m’a convaincu, c'est la mission. Apporter de la simplicité grâce à un outil dans lequel tout est centralisé, à la façon d’un couteau suisse. Au-delà de ça, j’ai aimé le design de votre produit, et la place que vous donnez à l’UX. Le fait que vous replaciez l’utilisateur au centre de votre développement produit.",
    image: "/images/thomas.jpg",
  },
  {
    name: "François Desjardin",
    role: "Directeur de l’innovation et des nouvelles offres chez Nexity",
    review:
      "Ce que je préfère chez Ublo, c’est le côté innovant de la solution, l’ergonomie du produit qui facilite la prise en main et le partage avec les tiers, le système de paiement intégré et l’énergie de tous les collaborateurs de l’entreprise bien sûr à se mettre au service des clients.",
    image: "/images/francois.jpg",
  },
  {
    name: "Julie R.",
    role: "Responsable RSE chez GreenCorp",
    review:
      "Une expérience fluide et rassurante. CarbonX apporte une vraie solution aux entreprises soucieuses de leur impact écologique.",
    image: "/images/julie.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">Ils croient en nous</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-review">“{testimonial.review}”</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              <div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <span className="quote-icon">❝</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

