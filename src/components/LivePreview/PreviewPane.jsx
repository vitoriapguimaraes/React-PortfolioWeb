import React from "react";
import "./PreviewPane.css";
import ResumePage from "../../pages/ResumePage";
import ProjectPage from "../../pages/ProjectPage";
import CertificatesPage from "../../pages/CertificatesPage";
import AboutPage from "../../pages/AboutPage";

const PreviewPane = ({ activeFile }) => {
  if (activeFile === "about_me.js") {
    return (
      <div className="preview-content scrollable">
        <AboutPage />
      </div>
    );
  }

  if (activeFile === "resume.json" || activeFile === "resume.html") {
    return (
      <div className="preview-content scrollable">
        <ResumePage />
      </div>
    );
  }

  if (activeFile === "certificates.json") {
    return (
      <div className="preview-content scrollable">
        <CertificatesPage />
      </div>
    );
  }

  // It's a project
  return (
    <div className="preview-content scrollable">
      <ProjectPage fileName={activeFile} />
    </div>
  );
};

export default PreviewPane;
