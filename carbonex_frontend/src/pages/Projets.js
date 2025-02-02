import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaHome, FaProjectDiagram, FaCogs, FaUser, FaArchive } from 'react-icons/fa';
import { GrTransaction } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import {Link} from 'react-router-dom';


const Projets = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={styles.container}>
      {/* Upper Bar */}
      <div style={styles.upperBar}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
        <h1 style={styles.logo_text}>CarbonX</h1>
      </div>

      {/* Sidebar */}
      <aside style={{ ...styles.sidebar, width: sidebarOpen ? '165px' : '45px' }}>
        <div style={styles.sidebarHeader}>
          <button onClick={toggleSidebar} style={styles.toggleButton}>
            {sidebarOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
          </button>
        </div>
        <nav>
        <ul style={styles.navList}>
            <li style={styles.navListItem}><Link to= "/appwelcome" style ={styles.link}> <FaHome /><span style={sidebarOpen ? styles.navText : styles.hidden}>Dashboard</span></Link></li>
            <li style={styles.navListItem}><Link to= "/projets" style ={styles.link}> <FaProjectDiagram /><span style={sidebarOpen ? styles.navText : styles.hidden}>Projets</span></Link></li>
            <li style={styles.navListItem}><GrTransaction/><span style={sidebarOpen ? styles.navText : styles.hidden}>Trade</span></li>
            <li style={styles.navListItem}><GoGraph/><span style={sidebarOpen ? styles.navText : styles.hidden}>Mes Projets</span></li>
            <li style={styles.navListItem}><HiOutlineDocumentReport/><span style={sidebarOpen ? styles.navText : styles.hidden}>Rapports</span></li>
            <hr style={styles.hr} />
            <li style={styles.navListItem}><FaArchive /><span style={sidebarOpen ? styles.navText : styles.hidden}>Historique</span></li>
            <li style={styles.navListItem}><FaUser /><span style={sidebarOpen ? styles.navText : styles.hidden}>Utilisateurs</span></li>
            <li style={styles.navListItem}><FaCogs /><span style={sidebarOpen ? styles.navText : styles.hidden}>Settings</span></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ ...styles.mainContent, marginLeft: sidebarOpen ? '165px' : '45px' }}>
        <h1 style={styles.title}>Project</h1>
      </main>
    </div>
  );
};

const styles = {
  container: { display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', transition: 'margin-left 0.3s' },
  upperBar: { backgroundColor: '#ffffff', height: '60px', display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: '1px solid #ddd', position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 1000, justifyContent: 'flex-start' },
  logo: { height: '90px',marginLeft: '0px', position: 'absolute', left: '0px'},
  sidebar: { backgroundColor: '#ffffff', color: '#213D30', padding: '1rem', transition: 'width 0.3s', minHeight: '100vh', marginTop: '60px', borderRight: '1px solid #ddd', position: 'fixed', left: 0, top: 0 },
  sidebarHeader: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' },
  toggleButton: { background: 'none', border: 'none', color: '#213D30', cursor: 'pointer' },
  navList: { listStyleType: 'none', paddingLeft: 0 , fontSize: '20px'},
  navListItem: { fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0', cursor: 'pointer', padding: '10px', whiteSpace: 'nowrap' },
  navText: { display: 'inline' },
  hidden: { display: 'none' },
  hr: { border: '1px solid gray', margin: '10px 0' },
  mainContent: { flex: 1, padding: '5rem', background: '#f9f9f9', marginTop: '20px', transition: 'margin-left 0.3s' },
  title: { fontSize: '2rem', marginBottom: '1rem', color: '#213D30' },
  statsRow: { display: 'flex', gap: '1rem', margin: '1rem 0' },
  statBox: { flex: 1, padding: '1rem', background: '#ffffff', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' },
  statValue: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.3rem' },
  logo_text: {
    display: 'flex',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#213D30', // Green Color
    textDecoration: 'none',
    alignItems: 'center', 
    marginRight: 'auto', 
    marginLeft: '75px'
  },
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
  },

  link: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px', 
    textDecoration: 'none', 
    color: 'inherit'  // Keeps the original text color
  }
  
};

export default Projets;