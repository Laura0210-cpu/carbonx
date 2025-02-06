import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project UUID from URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${id}/`)
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>{project.name}</h1>
        <img src={project.medias || "/default-project.jpg"} alt={project.name} style={styles.image} />
        <p><strong>Sector:</strong> {project.sector}</p>
        <p><strong>Type:</strong> {project.project_type}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Estimated Mitigation:</strong> {project.estimated_annual_mitigations} tCO₂</p>
        <p><strong>Country:</strong> {project.country}, {project.city}</p>
        <p><strong>Methodology:</strong> {project.methodology}</p>
        <p><strong>Credits Available:</strong> {project.number_of_credits}</p>
        <p><strong>Description:</strong> {project.description}</p>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: { fontSize: "2rem", marginBottom: "1rem", color: "#213D30" },
  image: { width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" },
};

export default ProjectDetails;
