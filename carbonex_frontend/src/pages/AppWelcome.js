import React, { useState } from 'react';
import Layout from '../components/Layout.jsx';
import {useAuth} from "../context/AuthContext.js";
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'; 
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);


const AppWelcome = () => {

  const { user } = useAuth();
  const creditData = [
    { vintage: '2022-29', project: "Thordur's Turtle Farm", type: 'Ex-post', category: 'Avoidance / Reduction' },
    { vintage: '2024-29', project: 'Sea faring creatures', type: 'Ex-post', category: 'Avoidance / Reduction' },
  ];
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Projet 1',
        backgroundColor: '#85AE5F',
        data: [5, 7, 8, 10, 12, 14, 16, 18, 15, 12, 10, 9],
      },
      {
        label: 'Projet 2',
        backgroundColor: '#598753',
        data: [6, 8, 10, 12, 14, 16, 18, 20, 17, 14, 12, 10],
      },
      {
        label: 'Projet 3',
        backgroundColor: '#386244',
        data: [4, 6, 7, 9, 11, 13, 15, 17, 14, 11, 9, 8],
      },
    ],
  };

  const pieData = {
    labels: ['Autre', 'NVCM', 'VCM'],
    datasets: [
      {
        data: [11, 46, 32],
        backgroundColor: ['#386244', '#598753', '#85AE5F'],
      },
    ],
  };
  return (
    <Layout> 
    
      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style= {{marginBottom: '2rem'}} >Une vue d'ensemble de l'ensemble de votre inventaire de crédits carbone, y compris les crédits ex-post et ex-ante. </p>
        
        {/* Stats Section */}
        <div style={styles.statsRow}>
          <div style={styles.statBox}><p style={styles.statValue}>96,634.92 tCO2-e</p><p>Crédits Ex-post</p></div>
          <div style={styles.statBox}><p style={styles.statValue}>0 tCO2-e</p><p>Crédits Ex-ante</p></div>
          <div style={styles.statBox}><p style={styles.statValue}>5</p><p>Projets</p></div>
        </div>
        <div style={styles.chartContainer}>
          <div style={styles.chartBox}>
            <h3>Emissions Carbones évitées</h3>
            <Bar data={barData} />
          </div>
          <div style={styles.chartBox}>
            <h3>Types de Crédits Carbone Utilisés</h3>
            <Pie data={pieData} />
          </div>
        </div>
        </div>
    </Layout>
  );
};

const styles = {
  container: { display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', transition: 'margin-left 0.3s' },
  mainContent: { flex: 1, padding: '2rem', background: '#f9f9f9', marginTop: '20px', transition: 'margin-left 0.3s' },
  title: { fontSize: '2rem', marginBottom: '2.5rem', color: '#213D30' },
  statsRow: { display: 'flex', gap: '1rem', margin: '1rem 0' },
  statBox: { flex: 1, padding: '1rem', background: '#ffffff', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' },
  statValue: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.3rem' },
  chartContainer: { 
    display: 'flex', // Use flex instead of grid
    gap: '1rem', 
    justifyContent: 'space-between',  
    alignItems: 'stretch', // Stretch charts equally
    width: '100%', // Full width like top boxes
  },
  chartBox: { 
    background: 'white', 
    padding: '1rem', 
    borderRadius: '8px', 
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    flex: '1', // Equal size without unnecessary stretching
    display: 'flex',  
    flexDirection: 'column', 
    alignItems: 'center',
  }
  
};

export default AppWelcome;