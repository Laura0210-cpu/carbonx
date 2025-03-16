import React, { useEffect, useRef, useState} from "react";
import Chart from "chart.js/auto";
import { default as SellerLayout } from "../../components/LayoutSeller.jsx";
import Layout from "../../components/Layout.jsx";
import { useAuth } from "../../context/AuthContext.js";

import DownloadButton from "../../components/Download_button_seller.jsx";

const ReportSeller = () => {
    const lineChartRef = useRef(null);
    const barChartRef = useRef(null);
    const pieChartRef = useRef(null);
  
    
    const [totalCredits, setTotalCredits] = useState(25390);
    const [trendPercentage, setTrendPercentage] = useState(3.2);
    const [portfolioValue, setPortfolioValue] = useState(12500);
    const [marketPrice, setMarketPrice] = useState(2.9);
  
    useEffect(() => {
      // Line Chart - Carbon Credit Price Trends
      const lineChart = new Chart(lineChartRef.current, {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul"],
          datasets: [
            {
              label: "Prix du marché($/ton)",
              data: [2.1, 2.3, 2.8, 3.0, 3.2, 3.5, 3.8],
              borderColor: "#123B19",
              backgroundColor: "rgba(31, 120, 49, 0.2)",
              borderWidth: 2,
            },
          ],
        },
      });
  
      // Pie Chart - Portfolio Breakdown
      const pieChart = new Chart(pieChartRef.current, {
        type: "pie",
        data: {
          labels: ["Énergie renouvelable", "Reforestation", "Capture de carbone"],
          datasets: [
            {
              data: [45, 35, 20],
              backgroundColor: ["#123B19", "#A7D397", "#5DAE8B"],
            },
          ],
        },
      });
  
      // Bar Chart - Market Volume
      const barChart = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"],
          datasets: [
            {
              label: "Volume des transactions (en tonnes)",
              data: [100, 120, 150, 180, 200, 220, 250],
              backgroundColor: "#123B19",
            },
          ],
        },
      });
  
      return () => {
        lineChart.destroy();
        pieChart.destroy();
        barChart.destroy();
      };
    }, []);
    const { user, loading: userLoading } = useAuth(); // assuming you also have a loading state in your Auth context
    
      // Handle the loading state for user data
      if (userLoading) {
        console.log("app.js: waiting for user data ...");
        return <div>Loading user data...</div>; // Show loading indicator until the user is loaded
      }
    const userRole = user?.role;
    const SelectedLayout = userRole === "seller" ? SellerLayout : Layout; 
    
  
    return (
        <SelectedLayout>
      <div style={{ padding: "20px", backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Dashboard Overview */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "30px" }}>
          <div style={cardStyle}>
            <h3>Total des crédits carbone échangés</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#123B19" }}>{totalCredits} tCO₂</p>
            <p style={{ color: trendPercentage > 0 ? "green" : "red" }}>{trendPercentage}% this month</p>
          </div>
  
          <div style={cardStyle}>
            <h3>Prix du marché</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#123B19" }}>${marketPrice}/ton</p>
          </div>
  
          <div style={cardStyle}>
            <h3>Valeur de votre portefeuille</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#123B19" }}>${portfolioValue}</p>
          </div>
  
          <div style={cardStyle}>
            <h3>Transactions récentes: </h3>
            <p>Dernier achat : 50 crédits @ $2.8</p>
            <p>Dernière vente : 30 crédits @ $3.0</p>
          </div>
        </div>
  
        {/* Charts Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "30px" }}>
          <div style={chartCardStyle}>
            <h3>Tendances des prix des crédits carbone</h3>
            <canvas ref={lineChartRef}></canvas>
          </div>
  
          <div style={chartCardStyle}>
            <h3>Volume du marché & Liquidité</h3>
            <canvas ref={barChartRef}></canvas>
          </div>
  
          <div style={chartCardStyle}>
            <h3>Résumé de votre portefeuille</h3>
            <canvas ref={pieChartRef}></canvas>
          </div>
        </div>
  
        {/* Sustainability Impact */}
        <div style={cardStyle}>
          <h3>Votre contribution environnementale</h3>
          <p>Vous avez contribué à compenser <b>200 tonnes métriques de CO₂</b> 🌍</p>
          <h3>Prévision d'impact projetée</h3>
          <p>Estimation de compensation pour l'année prochaine : <b>+15%</b></p>
        </div>
  
        {/* Notifications & Insights */}
        <div style={cardStyle}>
          <h3>Alerte de Marché et Actualité</h3>
          <p>🔔 Les crédits carbone ont augmenté de 5% aujourd'hui !</p>
          <p>📢 De nouvelles réglementations en matière de durabilité ont été annoncées.</p>
        </div>
  
        {/* Filter & Reports Section */}
        <div style={cardStyle}>
          <h3>Générer des Rapports</h3>
          <button style={buttonStyle}>Exporter en PDF</button>
          <button style={buttonStyle}>Exporter en CSV</button>
        </div>
  
        {/* Documents Table */}
        <h3 style={{ marginTop: "30px" }}>Télécharger les Rapports</h3>
        <table style={tableStyle}>
          <thead>
            <tr style ={tableHeaderStyle}>
              <th style ={{textAlign: "left"}}>Nom du Document</th>
              <th style ={{textAlign: "left"}}>Taille</th>
              <th style ={{textAlign: "left"}}>Date de Publication</th>
              <th style ={{textAlign: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rapport du Marché CO₂</td>
              <td>1.2 MB</td>
              <td>5 Mars, 2025</td>
              <td style = {{textAlign : "center"}} ><button style={buttonStyle}>Télecharger</button></td>
            </tr>
            <tr>
              <td>Conformité des Crédits Carbone</td>
              <td>850 KB</td>
              <td>3 Mars, 2025</td>
              
              <td style={{ textAlign: "center" }}>
  <button
    style={buttonStyle}
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/rapport_trading_carbone_seller.xlsx"; // Ensure the file is accessible
      link.setAttribute("download", "rapport_trading_carbone_seller.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    Télécharger
  </button>
</td>            </tr>
          </tbody>
        </table>
        <DownloadButton />
      </div>
      </SelectedLayout>
    );
  };
  
  const cardStyle = {
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    textAlign: "center",
  };
  
  const chartCardStyle = {
    ...cardStyle,
    textAlign: "center",
  };
  
  const buttonStyle = {
    padding: "8px 15px",
    backgroundColor: "#123B19",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  };
  
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };
  const tableHeaderStyle = {
    
    padding: "12px",
    textAlign: "left",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
  };
  

export default ReportSeller;
