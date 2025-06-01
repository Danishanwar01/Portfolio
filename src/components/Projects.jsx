// src/components/Projects.jsx
import React from "react";
import "../styles/Projects.css";

// import img001 from "../assets/img001.jpg";
// import img002 from "../assets/img002.jpg";
// import img003 from "../assets/img003.jpg";
// import img004 from "../assets/img004.jpg";
// import img005 from "../assets/img005.jpg";
// import img006 from "../assets/img006.jpg";

export default function Projects() {
  return (
    <div className="projects-container">
      {/* -------------- Top Purple Bar (“Traffic Lights”) -------------- */}
      <div className="proj-header">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>

      {/* -------------- “my Projects” Title (Left‐side) -------------- */}
      <div className="projects-title">my Projects</div>

      {/* -------------- Small Text Window (Left‐side) -------------- */}
      <div className="projects-text-window">
        <div className="text-titlebar">
          <span className="text-menu">File</span>
          <span className="text-menu">Edit</span>
          <span className="text-menu">View</span>
          <span className="text-menu">Help</span>
        </div>
        <div className="text-content">
          <p>
            In these projects, I created the official website to show my
            skills.
          </p>
        </div>
      </div>

      {/* -------------- File Viewer Window (Right‐side) -------------- */}
      <div className="file-viewer-window">
        {/* Title Bar (Gradient Purple→Orange) */}
        <div className="file-titlebar">
          <span className="file-title">File Viewer</span>
          <div className="file-controls">
            <span className="control-btn">—</span>
            <span className="control-btn">☐</span>
            <span className="control-btn">✕</span>
          </div>
        </div>

        {/* Toolbar Row */}
        <div className="file-toolbar">
          <span className="nav-btn">{'<'}</span>
          <span className="nav-btn">{'>'}</span>
          <span className="nav-btn">⭯</span>
          <select className="path-select" value="My PC &gt; Documents &gt; Photos">
            <option>My PC &gt; Documents &gt; Photos</option>
          </select>
          <span className="reload-btn">⟳</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search Photos..."
          />
        </div>

        <div className="file-body">
          {/* Left Sidebar */}
          <div className="file-sidebar">
            <ul>
              <li>
                <span className="sidebar-icon">★</span>
                <span className="sidebar-label">Favorites</span>
              </li>
              <li>
                <span className="sidebar-icon">☁️</span>
                <span className="sidebar-label">Cloud Drive</span>
              </li>
              <li>
                <span className="sidebar-icon">🖥️</span>
                <span className="sidebar-label">My PC</span>
              </li>
              <li>
                <span className="sidebar-icon">📁</span>
                <span className="sidebar-label">Documents</span>
              </li>
              <li>
                <span className="sidebar-icon">⬇️</span>
                <span className="sidebar-label">Downloads</span>
              </li>
            </ul>
          </div>

          {/* Middle: Thumbnail Grid */}
          <div className="thumb-container">
            <div className="thumb-grid">
              <div className="thumb-item">
                {/* <img src={img001} alt="img001" /> */}
                <span className="thumb-label">img001</span>
              </div>
              <div className="thumb-item">
                {/* <img src={img002} alt="img002" /> */}
                <span className="thumb-label">img002</span>
              </div>
              <div className="thumb-item">
                {/* <img src={img003} alt="img003" /> */}
                <span className="thumb-label">img003</span>
              </div>
              <div className="thumb-item">
                {/* <img src={img004} alt="img004" /> */}
                <span className="thumb-label">img004</span>
              </div>
              <div className="thumb-item">
                {/* <img src={img005} alt="img005" /> */}
                <span className="thumb-label">img005</span>
              </div>
              <div className="thumb-item">
                {/* <img src={img006} alt="img006" /> */}
                <span className="thumb-label">img006</span>
              </div>
            </div>

            {/* Instruction Bubble */}
            <div className="instruction-bubble">
              Drag and drop your photo or video! Click the sample photo or video
              and delete. Select yours from the uploads tab, drag and then drop
              inside the frame!
            </div>
          </div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="file-footer" />
      </div>

      {/* -------------- Back Button (Bottom‐Left) -------------- */}
      {/* <button className="back-button">Back to Agenda Page</button> */}
    </div>
  );
}
