import React from "react";
import "./MainLayout.css";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children, activeFile, onFileSelect }) => {
  return (
    <div className="main-layout">
      {/* 1. Activity Bar (Leftmost) */}
      <ActivityBar />

      {/* 2. Sidebar (Explorer) */}
      <Sidebar activeFile={activeFile} onFileSelect={onFileSelect} />

      {/* 3. Main Editor Area */}
      <div className="main-content">{children}</div>

      {/* 4. Status Bar (Bottom) - Optional but nice */}
      <div className="status-bar">
        <div className="status-item">main*</div>
        <div className="status-item">0 errors, 0 warnings</div>
        <div className="spacer"></div>
        <div className="status-item">Ln 11, Col 1</div>
        <div className="status-item">UTF-8</div>
        <div className="status-item">JavaScript React</div>
        <div className="status-item bell">🔔</div>
      </div>
    </div>
  );
};

export default MainLayout;
