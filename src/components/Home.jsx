// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Introduction from "./Introduction";
import Background from "./Background";
import Projects from "./Projects";
import Projectsgallery from "./Projectsgallery";

import Contact from "./Contact";
import PlaceholderImage from "../images/i1.jpg"; 


export default function Home() {
  return (
    <>
    <div className="desktop-container">
      {/* Top purple title bar */}
      <div className="desktop-header">
        <span className="desktop-title">Danish Anwar</span>
      
      </div>

      {/* Two windows side by side */}
      <div className="windows-wrapper">
        {/* Left: Image Viewer Window */}
        <div className="window image-window">
          <div className="window-titlebar window-titlebar--orange">
            <span className="window-filename">img000.jpg</span>
            <div className="window-controls">
              <span className="control-btn">–</span>
              <span className="control-btn">☐</span>
              <span className="control-btn">✕</span>
            </div>
          </div>
          <div className="window-content image-content">
            <img
              src={PlaceholderImage}
              alt="placeholder"
              className="image-viewer-img"
            />
          </div>
          <div className="image-toolbar">
            {/* simple placeholder icons (you can swap these out with SVGs) */}
            <span className="icon">🔍</span>
            <span className="nav-btn">◀️</span>
            <span className="nav-btn">▶️</span>
            <span className="icon">🔄</span>
            <span className="icon">⟳</span>
          </div>
        </div>

        {/* Right: TextEdit Window */}
        <div className="window text-window">
          <div className="window-titlebar window-titlebar--pink">
            <span className="window-filename">DETAILS</span>
            <div className="window-controls">
              <span className="control-btn">–</span>
              <span className="control-btn">☐</span>
              <span className="control-btn">✕</span>
            </div>
          </div>
          {/* Fake menu bar (“File Edit View Help”) */}
          <div className="text-menu-bar">
            <span className="menu-item">You Can Watch Separate Detail or Scroll Down for Complete Detail  </span>
            {/* <span className="menu-item">Edit</span>
            <span className="menu-item">View</span>
            <span className="menu-item">Help</span> */}
          </div>
          <div className="text-content">
            <ul className="link-list">
              <li>
                <span className="link-index">01</span>
                <Link to="/introduction" className="link-text">
                  Introduction
                </Link>
              </li>
              <li>
                <span className="link-index">02</span>
                <Link to="/background" className="link-text">
                  Background
                </Link>
              </li>
              <li>
                <span className="link-index">03</span>
                <Link to="/projects-gallery" className="link-text">
                  My Projects
                </Link>
              </li>
              <li>
                <span className="link-index">04</span>
                <Link to="/projects-gallery" className="link-text">
                  Projects Gallery
                </Link>
              </li>
             <li>
                <span className="link-index">5</span>
                <Link to="/contact" className="link-text">
                  Social Media
                </Link>
              </li>
              <li>
                <span className="link-index">5</span>
                <Link to="/contact" className="link-text">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Introduction/>
    <Background/>
    {/* <Projects/> */}
    <Projectsgallery/>
    
    <Contact/>
   
    </>
  );
}
