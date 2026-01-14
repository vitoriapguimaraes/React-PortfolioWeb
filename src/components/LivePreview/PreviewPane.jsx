import React from "react";
import "./PreviewPane.css";
import ResumeView from "./ResumeView";
import ProjectView from "./ProjectView";
import CertificatesView from "./CertificatesView";

const PreviewPane = ({ activeFile }) => {
  if (activeFile === "about_me.js") {
    return (
      <div className="preview-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">VP</div>
            <h1>Vitória Pistori</h1>
            <h2>Software Developer</h2>
          </div>
          <p className="bio">
            Engenheira que virou dev.
            <br />
            Transformo café em código limpo e dados em insights.
          </p>
          <div className="skills-tags">
            <span>React</span>
            <span>Python</span>
            <span>Data Science</span>
          </div>
          <div className="actions">
            <button className="btn-primary">Connect</button>
          </div>
        </div>
      </div>
    );
  }

  if (activeFile === "resume.json" || activeFile === "resume.html") {
    return (
      <div className="preview-content scrollable">
        <ResumeView />
      </div>
    );
  }

  if (activeFile === "certificates.json") {
    return (
      <div className="preview-content scrollable">
        <CertificatesView />
      </div>
    );
  }

  // It's a project
  return (
    <div className="preview-content scrollable">
      <ProjectView fileName={activeFile} />
    </div>
  );
};

export default PreviewPane;
