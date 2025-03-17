import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_BACKEND_URL || "https://carbonx-4jbn.onrender.com/api";


const TradeForm = () => {
  // Simulation de projets
  const [projects, setProjects] = useState([]);

  // Initialisation de l'état avec le premier projet par défaut
  const [selectedProject, setSelectedProject] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const price = 100;

  useEffect(() => {
    const token_test = localStorage.getItem("token"); // Récupérer le token depuis le Local Storage
    axios
      .get(`${API_URL}/projets/`, {
        headers: {
          Authorization: `Token ${token_test}`, // Passage du token dans le header Authorization
        },
      })
      .then((response) => {
        setProjects(response.data);
        if (response.data.length > 0) {
          setSelectedProject(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = price * quantity;
    console.log('Trade simulé', {
      project: selectedProject,
      projectId: selectedProject ? selectedProject.id : null,
      price,
      quantity,
      total,
    });
    alert(
      `Trade simulé : Projet ${selectedProject ? selectedProject.name : ''} (ID ${selectedProject ? selectedProject.id : ''}), Quantité ${quantity}, Total ${total}`
    );
  };

  return (
    <div>
      <h2>Simuler un Trade</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="project">Projet : </label>
          <select
            id="project"
            value={selectedProject ? selectedProject.id : ''}
            onChange={(e) => {
              const project = projects.find(
                (p) => p.id === parseInt(e.target.value, 10)
              );
              setSelectedProject(project);
            }}
          >
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>ID Projet : </label>
          <input type="text" value={selectedProject ? selectedProject.id : ''} readOnly />
        </div>
        <div>
          <label>Prix : </label>
          <input type="text" value={price} readOnly />
        </div>
        <div>
          <label htmlFor="quantity">Quantité : </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
          />
        </div>
        <button type="submit">Simuler Trade</button>
      </form>
      <br />
      <Link to="/">
        <button>Retour à l'accueil</button>
      </Link>
    </div>
  );
};

export default TradeForm;