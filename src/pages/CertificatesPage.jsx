import React from "react";
import { certificatesData } from "../data/certificates";
import "../components/LivePreview/CertificatesView.css";

const CertificatesPage = () => {
  return (
    <div className="page-container certificates-view">
      <h2>Certifications</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="cert-header">
              <h3>{cert.title}</h3>
              <span className="cert-date">{cert.date}</span>
            </div>
            <p className="cert-issuer">{cert.issuer}</p>
            <div className="cert-skills">
              {cert.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
