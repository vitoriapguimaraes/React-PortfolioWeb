import React from "react";
import { projectsData } from "../../data/projects";
import "./ProjectView.css";

const ProjectView = ({ fileName }) => {
  const project = projectsData.find((p) => p.fileName === fileName);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-detail-view">
      <div className="project-header-section">
        <h1>{project.name}</h1>
        <div className="project-badges">
          <span className="badge category">{project.category}</span>
          <span className="badge status">{project.status}</span>
        </div>
      </div>

      {project.imgUrl && (
        <div className="project-image-container">
          <img src={project.imgUrl} alt={project.name} />
        </div>
      )}

      <div className="project-description">
        <h3>About</h3>
        <p>{project.longDescription}</p>
      </div>

      <div className="project-tech-stack">
        <h3>Technologies</h3>
        <div className="tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="project-actions">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            View Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectView;
