// src/components/ProjectsList.jsx
import React from "react";

const ProjectsList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h3>{project.name}</h3>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Estimated Annual Mitigations:</strong> {project.estimated_annual_mitigations} tCO₂</p>
          <p><strong>Project Type:</strong> {project.project_type}</p>
          <p><strong>Sector:</strong> {project.sector}</p>
          <p><strong>Methodology:</strong> {project.methodology}</p>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Country:</strong> {project.country}, {project.city}</p>
          <p><strong>Credits:</strong> {project.number_of_credits}</p>
          {project.medias && (
            <p><a href={project.medias} target="_blank" rel="noopener noreferrer">View Media</a></p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
