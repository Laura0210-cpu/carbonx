import React from 'react';

const AppWelcome = () => {
  // For now, we’ll hardcode data. In a real app, you'd fetch from your backend
  const creditData = [
    {
      vintage: '2022-29',
      project: "Thordur's Turtle Farm",
      type: 'Ex-post',
      category: 'Avoidance / Reduction',
    },
    {
      vintage: '2024-29',
      project: 'Sea faring creatures',
      type: 'Ex-post',
      category: 'Avoidance / Reduction',
    },
    // ...
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>Logo / Gear Icon</div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navListItem}>Overview</li>
            <li style={styles.navListItem}>Projects</li>
            <li style={styles.navListItem}>Apps</li>
            <li style={styles.navListItem}>Users</li>
            <li style={styles.navListItem}>Settings</li>
            <hr style={{ margin: '1rem 0' }} />
            <li style={styles.navListItem}>Credits</li>
            <ul style={{ paddingLeft: '1rem' }}>
              <li style={styles.navListItem}>Transactions</li>
              <li style={{ ...styles.navListItem, fontWeight: 'bold' }}>Inventory</li>
              <li style={styles.navListItem}>Retirements</li>
              <li style={styles.navListItem}>Warehouse</li>
            </ul>
            <hr style={{ margin: '1rem 0' }} />
            <li style={styles.navListItem}>Integrations</li>
            <li style={styles.navListItem}>API</li>
            <li style={styles.navListItem}>Installations</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <h1 style={styles.title}>Inventory</h1>
        <p>
          An overview of your entire carbon credit inventory, including both ex-post and ex-ante credits
        </p>

        {/* Stats row */}
        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <div style={styles.statValue}>96,634.92 tCO2-e</div>
            <div style={styles.statLabel}>Ex-post Credits</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>0 tCO2-e</div>
            <div style={styles.statLabel}>Ex-ante Credits</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>-</div>
            <div style={styles.statLabel}>Retired Credits</div>
          </div>
        </div>

        {/* Search / Filter row */}
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            style={styles.searchInput}
          />
          <button style={styles.typeButton}>Type</button>
        </div>

        {/* Table of credits */}
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeaderRow}>
              <th>Vintages</th>
              <th>Project</th>
              <th>Category</th>
              <th>Types</th>
            </tr>
          </thead>
          <tbody>
            {creditData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.vintage}</td>
                <td>{item.project}</td>
                <td>{item.category}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

// Example inline styles
const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#f8f8f8',
    borderRight: '1px solid #ddd',
    padding: '1rem',
  },
  sidebarHeader: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  nav: {
    marginTop: '1rem',
  },
  navList: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  navListItem: {
    margin: '0.5rem 0',
    cursor: 'pointer',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
    background: '#fff',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  statsRow: {
    display: 'flex',
    gap: '1rem',
    margin: '1rem 0',
  },
  statBox: {
    flex: 1,
    padding: '1rem',
    background: '#f4f4f4',
    borderRadius: '5px',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '0.3rem',
  },
  statLabel: {
    color: '#555',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 0',
  },
  searchInput: {
    flex: 1,
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '1rem',
  },
  typeButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: '#eee',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  tableHeaderRow: {
    background: '#fafafa',
    borderBottom: '2px solid #ddd',
  },
};

export default AppWelcome;
