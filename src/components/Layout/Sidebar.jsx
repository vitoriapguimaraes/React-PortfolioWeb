import React, { useState } from "react";
import "./Sidebar.css";
import { projectsData } from "../../data/projects";

const FileItem = ({ name, active, onClick, depth = 0 }) => (
  <div
    className={`file-item ${active ? "active" : ""}`}
    onClick={onClick}
    style={{ paddingLeft: `${depth * 15 + 20}px` }}
  >
    <span className="file-icon">{"{}"}</span>
    {name}
  </div>
);

const FolderItem = ({ name, children, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="folder-item">
      <div
        className="folder-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{ paddingLeft: `${depth * 15 + 10}px` }}
      >
        <span className={`arrow ${isOpen ? "open" : ""}`}>▶</span>
        <span className="folder-icon">📂</span>
        {name}
      </div>
      {isOpen && <div className="folder-children">{children}</div>}
    </div>
  );
};

const Sidebar = ({ activeFile, onFileSelect }) => {
  const fullStackProjects = projectsData.filter(
    (p) => p.category === "Full Stack"
  );
  const dataScienceProjects = projectsData.filter(
    (p) => p.category === "Data Science"
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">EXPLORER</div>
      <div className="sidebar-content">
        <div className="section-header">PORTFOLIO</div>

        <FileItem
          name="about_me.js"
          active={activeFile === "about_me.js"}
          onClick={() => onFileSelect("about_me.js")}
        />
        <FileItem
          name="resume.json"
          active={activeFile === "resume.json"}
          onClick={() => onFileSelect("resume.json")}
        />
        <FileItem
          name="certificates.json"
          active={activeFile === "certificates.json"}
          onClick={() => onFileSelect("certificates.json")}
        />

        <FolderItem name="Full Stack Projects">
          {fullStackProjects.map((project) => (
            <FileItem
              key={project.id}
              name={project.fileName}
              active={activeFile === project.fileName}
              onClick={() => onFileSelect(project.fileName)}
              depth={1}
            />
          ))}
        </FolderItem>

        <FolderItem name="Data Science">
          {dataScienceProjects.map((project) => (
            <FileItem
              key={project.id}
              name={project.fileName}
              active={activeFile === project.fileName}
              onClick={() => onFileSelect(project.fileName)}
              depth={1}
            />
          ))}
        </FolderItem>
      </div>
    </div>
  );
};

export default Sidebar;
