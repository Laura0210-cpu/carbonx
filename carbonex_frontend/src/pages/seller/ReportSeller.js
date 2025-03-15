import React, { useEffect, useRef, useState} from "react";
import Chart from "chart.js/auto";
import Layout from "../../components/LayoutSeller.jsx";

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
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Market Price ($/ton)",
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
          labels: ["Renewable Energy", "Reforestation", "Carbon Capture"],
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
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Trading Volume (in tons)",
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
  
    return (
        <Layout>
      <div style={{ padding: "20px", backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Dashboard Overview */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "30px" }}>
          <div style={cardStyle}>
            <h3>Total Carbon Credits Traded</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#123B19" }}>{totalCredits} tCO₂</p>
            <p style={{ color: trendPercentage > 0 ? "green" : "red" }}>{trendPercentage}% this month</p>
          </div>
  
          <div style={cardStyle}>
            <h3>Market Price</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#123B19" }}>${marketPrice}/ton</p>
          </div>
  
          <div style={cardStyle}>
            <h3>Your Portfolio Value</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#123B19" }}>${portfolioValue}</p>
          </div>
  
          <div style={cardStyle}>
            <h3>Recent Transactions</h3>
            <p>Last buy: 50 credits @ $2.8</p>
            <p>Last sell: 30 credits @ $3.0</p>
          </div>
        </div>
  
        {/* Charts Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "30px" }}>
          <div style={chartCardStyle}>
            <h3>Carbon Credit Price Trends</h3>
            <canvas ref={lineChartRef}></canvas>
          </div>
  
          <div style={chartCardStyle}>
            <h3>Market Volume & Liquidity</h3>
            <canvas ref={barChartRef}></canvas>
          </div>
  
          <div style={chartCardStyle}>
            <h3>Your Portfolio Summary</h3>
            <canvas ref={pieChartRef}></canvas>
          </div>
        </div>
  
        {/* Sustainability Impact */}
        <div style={cardStyle}>
          <h3>Your Environmental Contribution</h3>
          <p>You have helped offset <b>200 metric tons of CO₂</b> 🌍</p>
          <h3>Projected Impact Forecast</h3>
          <p>Estimated offset next year: <b>+15%</b></p>
        </div>
  
        {/* Notifications & Insights */}
        <div style={cardStyle}>
          <h3>Market Alerts & News</h3>
          <p>🔔 Carbon credits surged by 5% today!</p>
          <p>📢 New sustainability regulations announced.</p>
        </div>
  
        {/* Filter & Reports Section */}
        <div style={cardStyle}>
          <h3>Generate Reports</h3>
          <button style={buttonStyle}>Export as PDF</button>
          <button style={buttonStyle}>Export as CSV</button>
        </div>
  
        {/* Documents Table */}
        <h3 style={{ marginTop: "30px" }}>Download Reports</h3>
        <table style={tableStyle}>
          <thead>
            <tr style ={tableHeaderStyle}>
              <th style ={{textAlign: "left"}}>Document Name</th>
              <th style ={{textAlign: "left"}}>Size</th>
              <th style ={{textAlign: "left"}}>Date Published</th>
              <th style ={{textAlign: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CO₂ Market Report</td>
              <td>1.2 MB</td>
              <td>March 5, 2025</td>
              <td style = {{textAlign : "center"}} ><button style={buttonStyle}>Download</button></td>
            </tr>
            <tr>
              <td>Carbon Credit Compliance</td>
              <td>850 KB</td>
              <td>March 3, 2025</td>
              <td style = {{textAlign : "center"}}><button style={buttonStyle}>Download</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      </Layout>
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
