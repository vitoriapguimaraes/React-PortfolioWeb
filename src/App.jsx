import React, { useState } from "react";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import EditorArea from "./components/Editor/EditorArea";

function App() {
  const [activeFile, setActiveFile] = useState("about_me.js");

  const handleFileSelect = (fileName) => {
    setActiveFile(fileName);
  };

  return (
    <MainLayout activeFile={activeFile} onFileSelect={handleFileSelect}>
      <EditorArea activeFile={activeFile} />
    </MainLayout>
  );
}

export default App;
