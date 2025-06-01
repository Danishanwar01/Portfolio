// src/components/ProjectsGallery.jsx
import React from "react";
import "../styles/Projectsgallery.css";


// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";

export default function Projectsgallery() {
  return (
    <div className="gallery-container">
      {/* ---------------- Top Traffic Lights Bar ---------------- */}
      <div className="top-bar">
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
      </div>

      {/* ---------------- Photo Gallery Window ---------------- */}
      <div className="photo-window">
        {/* Title Bar */}
        <div className="photo-titlebar">
          <div className="titlebar-left">
            <div className="circle circle--purple"></div>
            <div className="circle circle--white"></div>
            <div className="circle circle--white"></div>
          </div>
          <div className="title-text">Photo Gallery</div>
          <div className="titlebar-right">
            <span className="ctrl-btn">▢</span>
            <span className="ctrl-btn">❐</span>
            <span className="ctrl-btn">✕</span>
          </div>
        </div>

        {/* Toolbar Row */}
        <div className="photo-toolbar">
          <div className="toolbar-icons-left">
            <span className="toolbar-btn">☷</span>
            <span className="toolbar-btn">☰</span>
            <span className="toolbar-btn">☲</span>
            <span className="toolbar-btn">★</span>
          </div>
          <div className="toolbar-icons-right">
            <span className="toolbar-btn">☁️</span>
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="photo-content">
          <div className="grid-item large-item">
            <div className="white-card">
              <div className="project-title">Campaign for</div>
              <div className="project-subtitle">Skin Calm and Co.</div>
              <div className="project-dates">| July – August 2019</div>
            </div>
          </div>
          <div className="grid-item medium-item">
            {/* <img src={img1} alt="img1" /> */}
          </div>
          <div className="grid-item medium-item">
            {/* <img src={img2} alt="img2" /> */}
          </div>
          <div className="grid-item medium-item">
            {/* <img src={img3} alt="img3" /> */}
          </div>
          <div className="grid-item medium-item">
            {/* <img src={img4} alt="img4" /> */}
          </div>
          <div className="grid-item large-item">
            {/* <img src={img5} alt="img5" /> */}
          </div>
          <div className="grid-item large-item">
            {/* <img src={img6} alt="img6" /> */}
          </div>
        </div>
      </div>

      {/* ---------------- Vertical Scrollbar Stub ---------------- */}
      <div className="scrollbar-vertical"></div>

      {/* ---------------- Hourglass Cursor ---------------- */}
      <div className="hourglass-icon">⌛</div>

      {/* ---------------- Brush Settings Panel ---------------- */}
      <div className="brush-panel">
        <div className="brush-header">
          <div className="brush-draggable"></div>
          <span className="brush-close">✕</span>
        </div>
        <div className="brush-content">
          <div className="slider-row">
            <label className="slider-label">Size</label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="60"
              className="slider"
            />
            <span className="slider-value">60 px</span>
          </div>
          <div className="slider-row">
            <label className="slider-label">Hardness</label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              className="slider"
            />
            <span className="slider-value">100 %</span>
          </div>
          <div className="brush-shapes">
            {/** Nine brush‐shape icons */}
            <div className="shape-row">
              <div className="shape shape--circle-small"></div>
              <div className="shape shape--circle-medium"></div>
              <div className="shape shape--circle-large"></div>
            </div>
            <div className="shape-row">
              <div className="shape shape--soft-small"></div>
              <div className="shape shape--soft-medium"></div>
              <div className="shape shape--soft-large"></div>
            </div>
            <div className="shape-row">
              <div className="shape shape--square-small"></div>
              <div className="shape shape--square-medium"></div>
              <div className="shape shape--square-large"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
