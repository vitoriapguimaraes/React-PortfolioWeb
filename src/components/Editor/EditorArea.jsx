import React from "react";
import "./EditorArea.css";
import PreviewPane from "../LivePreview/PreviewPane";
import { projectsData } from "../../data/projects";
import { resumeData } from "../../data/resume";

// Helper to generate code snippet based on file
const getCodeContent = (fileName) => {
  if (fileName === "about_me.js") {
    return `const developer = {
  name: "${resumeData.name}",
  role: "${resumeData.role}",
  contact: {
    email: "${resumeData.contact.email}",
    linkedin: "${resumeData.contact.linkedin}"
  },
  skills: [
    ${resumeData.skills.languages.map((s) => `"${s}"`).join(", ")}
  ]
};

function buildImpact() {
  while(coding) {
    creativity++;
    logic++;
  }
  return "Solutions Created";
}`;
  }

  if (fileName === "resume.json") {
    return JSON.stringify(resumeData, null, 2);
  }

  if (fileName === "certificates.json") {
    return `[
  {
    "title": "Backend Developer",
    "issuer": "Descomplica Faculdade Digital",
    "date": "Nov 2025"
  },
  {
    "title": "AWS Certificates",
    "issuer": "AWS",
    "date": "Nov 2025"
  },
  // ... more certificates
]`;
  }

  // Check if it's a project
  const project = projectsData.find((p) => p.fileName === fileName);
  if (project) {
    // Choose template based on file extension
    if (
      fileName.endsWith(".jsx") ||
      fileName.endsWith(".tsx") ||
      fileName.endsWith(".js")
    ) {
      return `import React from 'react';
import { ${project.tech.join(", ")} } from 'tech-stack';

export const ${project.name.replace(/\s/g, "")} = () => {
  // ${project.description}
  const status = "${project.status}";

  return (
    <ProjectLayout>
      <Header title="${project.name}" />
      <Description>
        ${project.longDescription}
      </Description>
      <TechStack 
        tools={[${project.tech.map((t) => `"${t}"`).join(", ")}]} 
      />
      {/* 
        TODO: Implement core features 
        Repo: ${project.repoUrl}
      */}
    </ProjectLayout>
  );
};`;
    }

    if (fileName.endsWith(".py")) {
      return `import pandas as pd
import ${project.tech[0]} as lib

class ${project.name.replace(/\s/g, "")}:
    """
    ${project.description}
    Status: ${project.status}
    """
    
    def __init__(self):
        self.tech_stack = [${project.tech.map((t) => `"${t}"`).join(", ")}]
        self.repo = "${project.repoUrl}"

    def run_analysis(self):
        # Implementation of ${project.name}
        print("Running ${project.name}...")
        
    def show_results(self):
        # ${project.longDescription}
        pass

if __name__ == "__main__":
    app = ${project.name.replace(/\s/g, "")}()
    app.run_analysis()`;
    }

    if (fileName.endsWith(".dart")) {
      return `import 'package:flutter/material.dart';

void main() {
  runApp(const ${project.name.replace(/\s/g, "")}());
}

class ${project.name.replace(/\s/g, "")} extends StatelessWidget {
  // ${project.description}
  // Status: ${project.status}

  const ${project.name.replace(/\s/g, "")}({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '${project.name}',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const HomePage(title: '${project.name} Home Page'),
    );
  }
}`;
    }

    // Default Fallback
    return `// Project: ${project.name}
// Description: ${project.description}
// Tech: ${project.tech.join(", ")}
// Status: ${project.status}`;
  }

  return `// File ${fileName} not found`;
};

const EditorArea = ({ activeFile }) => {
  return (
    <div className="editor-area">
      {/* Tabs */}
      <div className="editor-tabs">
        <div className="tab active">
          <span className="tab-icon">
            {activeFile.endsWith(".js") || activeFile.endsWith(".jsx")
              ? "JS"
              : activeFile.endsWith(".py")
              ? "PY"
              : activeFile.endsWith(".json")
              ? "{}"
              : "📄"}
          </span>
          {activeFile}
          <span className="close-tab">×</span>
        </div>
      </div>

      {/* Editor Content (Split View) */}
      <div className="editor-split-view">
        {/* Left: Code */}
        <div className="code-pane">
          <div className="line-numbers">
            {Array.from({ length: 40 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <pre className="code-content">{getCodeContent(activeFile)}</pre>
        </div>

        {/* Right: Preview */}
        <div className="preview-pane-container">
          <div className="preview-header">Live Preview</div>
          <PreviewPane activeFile={activeFile} />
        </div>
      </div>
    </div>
  );
};

export default EditorArea;
