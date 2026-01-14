import React from "react";
import "./TitleBar.css";

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="title-bar-controls">
        {/* Linux/Mac style buttons */}
        <div className="window-control close"></div>
        <div className="window-control minimize"></div>
        <div className="window-control maximize"></div>
      </div>

      <div className="title-bar-text">
        Vitória Pistori - Portfolio [React] - Visual Studio Code
      </div>

      <div className="linux-actions">
        {/* Placeholder for standard window controls if needed, but the left ones are fine for "Linux-like" aesthetic */}
      </div>
    </div>
  );
};

export default TitleBar;
