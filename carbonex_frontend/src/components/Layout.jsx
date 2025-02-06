import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaProjectDiagram,
  FaCogs,
  FaUser,
  FaArchive,
} from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiMoreVertical } from "react-icons/fi";

import "./Layout.css"; // Import CSS

const SidebarContext = createContext();

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout-container">
      {/* Top Bar */}
      <header className="topbar">
        <img src="/logo.png" alt="Logo" className="topbar-logo" />
        <h1 className="topbar-title">CarbonX</h1>
      </header>

      {/* Sidebar + Main Content */}
      <div className="body-container">
        <aside className={`sidebar ${sidebarOpen ? "expanded" : "collapsed"}`}>
          <div className="sidebar-top">
            <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
            </button>
          </div>

          <SidebarContext.Provider value={{ sidebarOpen }}>
            <ul className="sidebar-nav">
              <SidebarItem to="/appwelcome" icon={<FaHome />} text="Dashboard" />
              <SidebarItem to="/projets" icon={<FaProjectDiagram />} text="Projets" />
              <SidebarItem to="/trade" icon={<GrTransaction />} text="Trade" />
              <SidebarItem to="/mes-projets" icon={<GoGraph />} text="Mes Projets" />
              <SidebarItem to="/rapports" icon={<HiOutlineDocumentReport />} text="Rapports" />
              <hr />
              <SidebarItem to="/historique" icon={<FaArchive />} text="Historique" />
              <SidebarItem to="/utilisateurs" icon={<FaUser />} text="Utilisateurs" />
              <SidebarItem to="/settings" icon={<FaCogs />} text="Settings" />
            </ul>
          </SidebarContext.Provider>

          {/* User Section */}
          <div className="sidebar-user">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt="User Avatar"
              className="user-avatar"
            />
            {sidebarOpen && (
              <div className="user-info">
                <div>
                  <h4 className="user-name">John Doe</h4>
                  <span className="user-email">test@yahoo.com</span>
                </div>
                <FiMoreVertical size={20} />
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

/**
 * Sidebar Item Component
 */
function SidebarItem({ to, icon, text }) {
  const { sidebarOpen } = useContext(SidebarContext);

  return (
    <li className="sidebar-item">
      <Link to={to} className="sidebar-link">
        {icon}
        <span className={`sidebar-text ${sidebarOpen ? "" : "hidden"}`}>{text}</span>
      </Link>
    </li>
  );
}


