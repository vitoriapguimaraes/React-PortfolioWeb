import React from "react";
import { resumeData } from "../../data/resume";
import "./ResumeView.css";

const ResumeView = () => {
  return (
    <div className="resume-view">
      <div className="resume-header">
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.role}</h2>
        <div className="resume-links">
          <a href={`mailto:${resumeData.contact.email}`}>
            {resumeData.contact.email}
          </a>
          <span>•</span>
          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a href={resumeData.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <section>
        <h3>Professional Summary</h3>
        <p>{resumeData.summary}</p>
      </section>

      <section>
        <h3>Experience</h3>
        {resumeData.experience.map((job, i) => (
          <div key={i} className="resume-entry">
            <div className="entry-header">
              <h4>{job.role}</h4>
              <span className="date">{job.period}</span>
            </div>
            <p className="company">{job.company}</p>
            <p className="description">{job.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Education</h3>
        {resumeData.education.map((edu, i) => (
          <div key={i} className="resume-entry">
            <div className="entry-header">
              <h4>{edu.degree}</h4>
              <span className="date">{edu.period}</span>
            </div>
            <p className="company">{edu.institution}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Skills</h3>
        <div className="skills-grid">
          <div>
            <b>Languages:</b> {resumeData.skills.languages.join(", ")}
          </div>
          <div>
            <b>Frameworks:</b> {resumeData.skills.frameworks.join(", ")}
          </div>
          <div>
            <b>Tools:</b> {resumeData.skills.tools.join(", ")}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeView;
