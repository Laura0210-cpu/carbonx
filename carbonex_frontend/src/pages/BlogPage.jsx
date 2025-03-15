import React from "react";
import "./BlogPage.css"; // Fichier CSS séparé pour le style
import Footer from "../components/Footer";

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      category: "Explicatif",
      title: "Qu'est ce que le marché du carbone",
      description:
        "Comprendre le marché réglementé ou marché de conformité et le marché volontaire, permettant de compenser volontairement ses émissions de GES",
      date: "30 Jan 2025",
      readTime: "10 mins lecture",
      author: "Emilie Brunelle",
      image: "/waterfall.jpg",
    },
    {
      id: 2,
      category: "Actualité",
      title: "COP29: l'accord sur le marché des crédits carbone crée la politique",
      description:
        "On vous explique ce que la COP29 implique pour le marché carbone. ",
      date: "15 Nov 2024",
      readTime: "5 mins read",
      author: "Laura Doledec",
      image: "/iceberg.jpg",
    },
    {
      id: 3,
      category: "Analyse",
      title: "Le marché carbone volontaire en 2025: à quoi s'attendre",
      description:
        "À quoi pouvons-nous nous attendre sur le marché VCM en Europe et à l'international en 2025? ",
      date: "26 Jan 2025",
      readTime: "15 mins lecture",
      author: "Ana Maria Ochoa Restrpo",
      image: "/forest.jpg",
    },
    {
        id: 4,
        category: "Analyse" , 
        title: "Blockchain et crédits carbone: une révolution pour la transparence? ",
        description:
          "Le marché des crédits carbone souffre d'un manque de traçabilité et de double comptabilitsation. Découovrew comment la blockchain permet d'assurer transparence.  ",
        date: "26 Jan 2025",
        readTime: "15 mins lecture",
        author: "Ana Maria Ochoa Restrepo",
        image: "/riz.jpg",
      },
      {
        id: 5,
        category: "Actualité", 
        title: "CSRD, EU ETS, taxonomie verte : comment les entreprises doivent s’adapter ?",
        description:
          " Avec l’entrée en vigueur de la CSRD et des nouvelles régulations carbone européennes, les entreprises doivent repenser leur stratégie ESG. Cet article explique les obligations réglementaires et comment CarbonX simplifie leur mise en conformité.",
        date: "26 Dec 2024",
        readTime: "15 mins lecture",
        author: "Emilie Brunelle",
        image: "/mer.jpg",
      },
      {
        id: 6,
        category: "Explicatif", 
        title: "Crédits carbone : Comment distinguer un projet de qualité d’un greenwashing ?",
        description:
          " Toutes les compensations carbone ne se valent pas. Apprenez à identifier les critères d’un crédit carbone efficace, les labels de confiance (Verra, Gold Standard…) et les pièges à éviter pour une compensation réellement impactante.",
        date: "21 Jan 2025",
        readTime: "15 mins lecture",
        author: "Laura Doledec",
        image: "/le_jp.jpg",
      },


  ];

  return (
    <div>
    <div className="blog-container">
      {/* Section Principale */}
      <div className="hero-section">
        <img src="/Chamonix.jpg" alt="Hero" className="hero-image" />
        <div className="hero-content">
          <span className="category-tag">Analyse</span>
          <h1 className="hero-title">L'impact de la compensation carbone sur la transition écologique : mythe ou réalité ?</h1>
          <p className="hero-description">
          La compensation carbone est parfois critiquée comme une solution de façade. Mais peut-elle réellement accélérer la décarbonation de notre économie ? Analyse des limites, opportunités et innovations dans le domaine.
          </p>
          <div className="author-info">
            <img src="/grand_canyon.jpg" className="author-image" alt="author" />
            <span className="author-name">Laura Doledec</span>
            <span className="date-info">12 Fev 2025 • 10 mins lecture</span>
          </div>
        </div>
      </div>

      {/* Section Blog */}
      <div className="blog-content">
        <h2 className="blog-title">Découvrez Notre Blog</h2>
        <p className="blog-subtitle">
        Sur notre blog, explorez les dernières tendances, analyses et bonnes pratiques pour une compensation carbone plus efficace, transparente et alignée avec vos objectifs ESG. Restez informé. Agissez pour le climat.
        </p>

        {/* Catégories */}
        <div className="categories">
          {["Tout", "Actualité", "Analyse", "Explicatif", "Autre"].map((cat) => (
            <button key={cat} className="category-button">{cat}</button>
          ))}
        </div>

        {/* Grille des articles */}
        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <span className="category-tag">{article.category}</span>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <div className="article-footer">
                <span>{article.date} • {article.readTime}</span>
              </div>
              <div className="article-author">{article.author}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
        <Footer />
    </div>
  );
};

export default BlogPage;
