/* src/components/Background.jsx */
import React from "react";
import "../styles/Background.css";

export default function Background() {
  return (
    <div className="background-container">
      {/* ---------------- Top Purple Bar ---------------- */}
      <div className="bg-header">
        <div className="circle circle--1" />
        <div className="circle circle--2" />
        <div className="circle circle--3" />
      </div>

      {/* -------------- Partially Visible Word Window (Top‐Left) -------------- */}
      <div className="word-window">
        <div className="word-titlebar">
          <span className="word-close">×</span>
        </div>
        <div className="word-content">
          <h2 className="word-heading">Education & EXPERIENCE</h2>
        </div>
        <div className="word-footer">
          <span className="word-info">Page 1  |  Words: 88</span>
        </div>
      </div>

      {/* ------------------- Experience Window ---------------- */}
      <div className="browser-window exp-window">
        <div className="browser-titlebar">
          <span className="nav-btn">{'<'}</span>
          <span className="nav-btn">{'>'}</span>
          <span className="globe-icon">🌐</span>
          <input
            className="browser-url"
            type="text"
            placeholder=" "
            readOnly
          />
          <span className="star-icon">★</span>
          <span className="window-close">×</span>
        </div>
        <div className="browser-section-label">EXPERIENCE</div>
        <div className="browser-content">
          <h3 className="exp-company">ReliWell Technologies Pvt Ltd</h3>
          <p className="exp-role">Lead Web-Developer</p>
        </div>
      </div>

      {/* ---------------- Education Window ---------------- */}
      <div className="browser-window edu-window">
        <div className="browser-titlebar">
          <span className="nav-btn">{'<'}</span>
          <span className="nav-btn">{'>'}</span>
          <span className="globe-icon">🌐</span>
          <input
            className="browser-url"
            type="text"
            placeholder=" "
            readOnly
          />
          <span className="star-icon">★</span>
          <span className="window-close">×</span>
        </div>
        <div className="browser-section-label">EDUCATION </div>
        <div className="browser-content">
          <h3 className="edu-school">SHARDA UNIVERSITY</h3>
          <p className="edu-degree">B-Tech Computer Science [2019 – 2023]</p>
        </div>
      </div>

      {/* ---------------- Early Schooling Window ---------------- */}
      <div className="browser-window school-window">
        <div className="browser-titlebar">
          <span className="nav-btn">{'<'}</span>
          <span className="nav-btn">{'>'}</span>
          <span className="globe-icon">🌐</span>
          <input
            className="browser-url"
            type="text"
            placeholder=" "
            readOnly
          />
          <span className="star-icon">★</span>
          <span className="window-close">×</span>
        </div>
        <div className="browser-section-label">EARLY SCHOOLING</div>
        <div className="browser-content">
          <h3 className="edu-school">Major Dhyan Chand Sports College, Saifai Etawah</h3>
          <p className="edu-degree">Classes 6th – 12th</p>
        </div>
      </div>

      {/* ---------------- Placeholder for Additional Details ---------------- */}
      {/* To add more sections, copy one of the .browser-window blocks, adjust class and placement as needed */}

    </div>
  );
}
