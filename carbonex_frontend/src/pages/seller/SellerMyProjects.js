import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/LayoutSeller.jsx";

const SellerMyProjects = () => {
    
    const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    country: "", 
    sector: "", 
    methodology: "", 
    status: "", 
  });
  const [dropdowns, setDropdowns] = useState({
    country: false, 
    sector: false, 
    methodology: false, 
    status: false, 
  });
  const availableFilters ={
    country: ["France", "US", "Mexico", "Turkey", "Saudi Arabia"], 
    sector: ["Construction", "Boisement", "Reboisement", "CarbonAgri"], 
    methodology: ["Verra", "Gold Standard", "ISO 14064"], 
    status: ["Planned", "Active", "Completed"], 
  };
  const toggleDropdown =(key) => {
    setDropdowns((prev) => ({...prev, [key]: !prev[key]}));

  };
  const applyFilter =(key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  
  

  useEffect(() => {
    const token_test = localStorage.getItem("token"); // get it from Local Storage
    axios
      .get("http://127.0.0.1:8000/api/my-projects/", {
        headers: {
          Authorization: `Token ${token_test}`, // <-- pass token in Authorization header
        },
      }).then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  // Country flags based on country codes
  const countryFlags = {
    IS: "🇮🇸",
    US: "🇺🇸",
    France: "🇫🇷",
    TR: "🇹🇷",
    SA: "🇸🇦",
    MX: "🇲🇽",
  };


  const [isHovered, setIsHovered]  = React.useState(false); 

  // Filter projects based on search input
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())&
  (filters.country ? project.country === filters.country : true) &&
  (filters.sector ? project.sector === filters.sector : true) &&
  (filters.methodology ? project.methodology === filters.methodology : true) &&
  (filters.status ? project.status === filters.status : true)
  );

    return (
      <Layout>
        <main style={styles.mainContent}>
          <div style={styles.container_project}>
            {/* Header Section */}
            <header style={styles.header}>
              <div>
                <h2 style={styles.title}>Tous les Projets Publiques</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  Explorer les projets, choisissez vos projets
                </p>
              </div>
              <button style={styles.registerButton}>Enregistrer son Projet →</button>
            </header>
  
            {/* Search & Filters */}
            <div style={styles.filters}>
              <input
                type="text"
                placeholder="🔍 Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.searchBar}
              />
              <div style={styles.filterWrapper}>
                <button style={styles.filterButton} onClick={() => toggleDropdown("country")}>
                  🌍 Pays {filters.country ? `(${filters.country})` : ""}
                </button>
                {dropdowns.country && (
                  <div style={styles.dropdown}>
                    {availableFilters.country.map((c) => (
                      <div key={c} style={styles.dropdownItem} onClick={() => applyFilter("country", c)}>
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Sector Filter */}
              <div style={styles.filterWrapper}>
                <button style={styles.filterButton} onClick={() => toggleDropdown("sector")}>
                  🏭 Secteur {filters.sector ? `(${filters.sector})` : ""}
                </button>
                {dropdowns.sector && (
                  <div style={styles.dropdown}>
                    {availableFilters.sector.map((s) => (
                      <div key={s} style={styles.dropdownItem} onClick={() => applyFilter("sector", s)}>
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Methodology Filter */}
              <div style={styles.filterWrapper}>
                <button style={styles.filterButton} onClick={() => toggleDropdown("methodology")}>
                  📜 Méthodologie {filters.methodology ? `(${filters.methodology})` : ""}
                </button>
                {dropdowns.methodology && (
                  <div style={styles.dropdown}>
                    {availableFilters.methodology.map((m) => (
                      <div key={m} style={styles.dropdownItem} onClick={() => applyFilter("methodology", m)}>
                        {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>
  
            {/* Status Filter */}
            <div style={styles.filterWrapper}>
                <button style={styles.filterButton} onClick={() => toggleDropdown("status")}>
                  🔄 Statut {filters.status ? `(${filters.status})` : ""}
                </button>
                {dropdowns.status && (
                  <div style={styles.dropdown}>
                    {availableFilters.status.map((s) => (
                      <div key={s} style={styles.dropdownItem} onClick={() => applyFilter("status", s)}>
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
  
            {/* Projects Grid */}
            <div style={styles.projectsGrid}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                <Link 
                    Key = {project.id} 
                    to= {`/projets/${project.id}`} 
                    style={styles.projectCard} 
                >
                    {/* Display the project media if available, else show a placeholder */}
                    <img
                      src={project.medias || "/projet1.jpg"} // Default image if none provided
                      alt={project.name}
                      style={styles.image}
                    />
                    <div style={styles.info}>
                      <span style={styles.flag}>{countryFlags[project.country] || "🌍"}</span>
                      <span style={styles.rating}>⭐ {project.number_of_credits}</span>
                    </div>
                    <h3 style={isHovered ? styles.projectNameHover: styles.projectName} 
                    onMouseEnter ={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} >{project.name}</h3>
                    <p style={styles.company}>{project.project_type}</p>
                    <p style={styles.description}>{project.description}</p>
                      </Link>
                 
                ))
              ) : (
                <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#666" }}>
                  Aucun projet trouvé.
                </p>
              )}
            </div>
          </div>
        </main>
      </Layout>
    );
  };
  
  const styles = {
    container_project: { padding: "0rem", maxWidth: "1200px", margin: "auto" },
    registerButton: {
      padding: "10px 20px",
      background: "#222",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    filters: { display: "flex", gap: "10px", marginBottom: "1rem" },
    searchBar: {
      padding: "10px",
      width: "250px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    filterButton: {
      padding: "10px 15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      cursor: "pointer",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    projectCard: {
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      textDecoration: "none", 
      color: "inherit", 
      display: "block", 
    },
    image: {
      width: "100%",
      height: "200px",
      borderRadius: "8px 8px 0 0",
      objectFit: "cover",
      display: "block",
      padding: "0",
      margin: "0",
    },
    info: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 0",
    },
    flag: { fontSize: "1rem", color: "#444" },
    rating: { fontSize: "1rem", color: "#444" },
    projectName: { fontSize: "1.2rem", fontWeight: "bold", transition: "color 0.3s ease", textDecoration: "none", },
    projectNameHover: {color: "#132B19",},
    company: { fontSize: "1rem", color: "#666" },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
    },
    mainContent: {
      flex: 1,
      padding: "2rem",
      background: "#f9f9f9",
      marginTop: "20px",
      transition: "margin-left 0.3s",
    },
    title: { fontSize: "2rem", marginBottom: "2rem", color: "#213D30" },
    description: {
      fontSize: "0.9rem",
      color: "#555",
      marginTop: "8px",
      lineHeight: "1.4",
      textAlign: "left",
      fontWeight: "400",
    },
    filters: { display: "flex", gap: "10px", marginBottom: "1rem", position: "relative" },
    searchBar: {
      padding: "10px",
      width: "250px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    filterWrapper: { position: "relative" },
    filterButton: {
      padding: "10px 15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      cursor: "pointer",
      background: "white",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: 0,
      background: "white",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "150px",
      zIndex: 1000,
    },
    dropdownItem: {
      padding: "8px",
      cursor: "pointer",
      borderBottom: "1px solid #ddd",
    },
    dropdownItemHover: {
      backgroundColor: "#f5f5f5",
    },
    projectsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" },
  };
export default SellerMyProjects;