import React from "react";
import "../components/LivePreview/PreviewPane.css"; // Reusing profile card styles

const AboutPage = () => {
  return (
    <div className="page-container about-page">
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
};

export default AboutPage;
