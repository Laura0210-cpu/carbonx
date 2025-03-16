import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";
import { default as SellerLayout } from "../components/LayoutSeller.jsx" ;
import { useAuth } from "../context/AuthContext";

const API_URL = process.env.REACT_APP_BACKEND_URL || "https://carbonx-4jbn.onrender.com/api";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project UUID from URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTrading, setIsTrading] = useState(false);
  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${id}/`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
        setError("Project not found");
        setLoading(false);
      });
  }, [id]);

  // Mapping SDG numbers to logo image paths
const sdgLogos = {
  1: "/goal1.png",
  2: "/goal2.png",
  3: "/goal3.png",
  4: "/goal4.png",
  5: "/goal5.png",
  6: "/goal6.png",
  7: "/goal7.png",
  8: "/goal8.png",
  9: "/goal9.png",
  10: "/goal10.png",
  11: "/goal11.png",
  12: "/goal12.png",
  13: "/goal13.png",
  14: "/goal14.png",
  15: "/goal15.png",
  16: "/goal16.png",
  17: "/goal17.png",
};
const { user, loading: userLoading } = useAuth(); // assuming you also have a loading state in your Auth context

  // Handle the loading state for user data
  if (userLoading) {
    console.log("app.js: waiting for user data ...");
    return <div>Loading user data...</div>; // Show loading indicator until the user is loaded
  }
const userRole = user?.role;
const SelectedLayout = userRole === "seller" ? SellerLayout : Layout; 

const map ={
  "34bbcdf6-fab5-48fa-b1c8-8021670eda00" : "/map_projet1.png",
  "1df9eaa2-d4dc-4f70-ae54-5fd1eddcbc20" : "/map_projet2.png", 
  "4af5227b-0652-4ea5-83b2-cd8a00988158": "/map_projet3.png",
};


  // Insert the handleTrade function here:
  const handleTrade = async () => {
    
    setIsTrading(true);
    try {
    
          // Simulate a trade by using a dummy transaction hash.
          const dummyTxHash = "0xMANUAL_TRADE_FOR_MVP";
          // Send the dummy transaction hash to your Django backend.
          await axios.post(`${API_URL}/projects/${id}/record_trade/`, {
            tx_hash: dummyTxHash,
          });
          alert("Trade recorded successfully (manual simulation)!");
        } catch (error) {
          console.error("Trade error:", error);
          alert("Trade failed. Check console for details.");
        } finally {
          setIsTrading(false);
        }
      
      };
    

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  const mapImage = map[project.id] || "/project1.png";
  return (
    <SelectedLayout>

      
      <div style={styles.pageContainer}>
      <div style={styles.imageContainer}>
      <img src={project.medias || "/default-project.jpg"} alt={project.name} style={styles.image} />
      <h1 style={styles.imageTitle}>{project.name}</h1>
      </div> 
        

        {/* Top Section: Image + Project Summary */}
        <div style={styles.topSection}>
          <div style={styles.projectColumn}>
          <h3 style={styles.sectionTitle}>Project Location</h3>
          <div style={{ display: "flex",  width: "100%" }}>
          <img src={mapImage} alt="Project Map" style={{ width: "280px", height: "280px", objectFit: "cover" , marginTop: "10px"}} />
          </div>
    
          </div>
          <div style={styles.projectColumn}>
          <h3 style={styles.sectionTitle}>Détails Projet</h3>
            <p><strong>Sector:</strong> {project.sector}</p>
            <p><strong>Type:</strong> {project.project_type}</p>
            <p><strong>Status:</strong> <span style={styles.status}>{project.status}</span></p>
            <p><strong>Estimated Mitigation:</strong> {project.estimated_annual_mitigations} tCO₂</p>
            <p><strong>Country:</strong> {project.country}, {project.city}</p>
            <p><strong>Methodology:</strong> {project.methodology}</p>
            <p><strong>Credits Available:</strong> {project.number_of_credits}</p>
           </div>
          <div style={{...styles.projectColumn, ...styles.lastColumn}}>
          <h3 style={styles.sectionTitle}>Certified SDG Impacts</h3>
          <div style={styles.sdgIcons}>
          {project.sdg && project.sdg.length > 0 ? (
                project.sdg.map((sdgNumber) => (
                  <img 
                    key={sdgNumber} 
                    src={sdgLogos[sdgNumber]} 
                    alt={`SDG ${sdgNumber}`} 
                    style={styles.sdgIcon} 
                  />
                ))
              ) : (
                <p style={styles.noSdg}>No SDG goals assigned</p>
              )}
          </div>
          <h3 style={styles.sectionTitle}>Product Issuance</h3>
          <p><strong>PER Issued:</strong> 72,000</p>
          <p><strong>VER Issued:</strong> 100,000</p>
         
  
        </div>
        </div>
        <div style={styles.bottomSection}>
          <h2 style = {styles.sectionTitle}>Description</h2>
          <p>{project.description}</p>
        </div>


        {/* Issuance List Table */}
        <div style={styles.issuanceList}>
          <h2 style={styles.sectionTitle}>Issuance List</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Vintage</th>
                <th>Quantity</th>
                <th>Product</th>
                <th>Issuance Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020</td>
                <td>20000</td>
                <td>VER</td>
                <td>July 26, 2024</td>
                <td><button style={styles.viewButton}>View</button></td>
              </tr>
              <tr>
                <td>2019</td>
                <td>20000</td>
                <td>VER</td>
                <td>July 26, 2024</td>
                <td><button style={styles.viewButton}>View</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Trade Button */}
        <button onClick={handleTrade} disabled={isTrading} style={styles.tradeButton}>
          {isTrading ? "Trading..." : "Trade"}
        </button>
      </div>
    </SelectedLayout>
  );
};
const styles = {
  pageContainer: {
    width: "90vw",
    minHeight: "100vh", 
    margin: "0", 
    padding: "0",
    display:  "flex", 
    flexDirection: "column", 
    align: "center",
    backgroundColor: "#fff",
    position: "relative", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    paddingBottom: "20px",
    borderBottom: "2px solid #ddd",
  },
  title: { fontSize: "2.5rem", color: "#213D30" },

  topSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Three equal columns
    gap: "20px",
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    alignItems: "flex-start", 
    textAlign: "center",
  },
  projectColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "left",
    textAlign: "left",
    flex: 1,
    padding: "20px",
    borderRight: "2px solid #ccc", // Grey vertical line
    minHeight: "100%", 
    
    
  },
  lastColumn: {
    borderRight: "none",  // ✅ Vertical divider
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", 
    borderRadius: "10px 10px 0 0",
  },
  imageTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black background
    padding: "10px 20px",
    borderRadius: "5px",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "300px",
  },
  details: {
    width: "50%",
  },
  status: {
    fontWeight: "bold",
    color: "#d9534f",
  }
  ,icon: {
    width: "50px",
    height: "50px",
  },
  certification: {
    textAlign: "center",
    padding: "20px 0",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#213D30",
    marginBottom: "25px",
    marginTop: "5px", 
  },
  sdgIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop : "10px", 
  },
  sdgIcon: {
    width: "50px",
    height: "50px",
  },
  noSdg:{
    fontSize: "0.9rem", 
    color: "#999", 
    fontStyle: "italic", 
  },
  issuanceList: {
    padding: "50px", 
    justifyContent: "center", 
  },
  middleColumn: {
    borderRight: "2px solid #ddd",  // ✅ Vertical divider
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  tableHead: {
    backgroundColor: "#213D30",
    color: "#fff",
  },
  viewButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tradeButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#213D30",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    width: "100%",
  },
  bottomSection: {
    "padding": "10px",
    "textAlign": "left",
    "width": "95%",  // Adjust width to be slightly shorter than full width
    "borderTop": "2px solid #ccc",
    "borderBottom": "10px",
    "margin": "0 auto" // Centers the line
  },
};

export default ProjectDetails;
