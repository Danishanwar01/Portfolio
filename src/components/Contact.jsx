// src/components/Contact.jsx
import React from "react";
import "../styles/Contact.css";
import SocialMedia from "./SocialMedia";


// import CheckerImage from "../assets/checkerboard.jpg";

export default function Contact() {
  return (
    <div className="contact-container">
      {/* ---------- 1) Top Purple Title Bar (“Traffic Lights”) ---------- */}
      <div className="contact-header">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

     

      {/* ---------- 3) “Your ideas and dreams…” Window (Behind) ---------- */}
      <div className="window ideas-window">
        <div className="ideas-content">
          <p>Your ideas and dreams deserve to be seen.</p>
          <p>Let’s design them.</p>
          <h2 style={{marginTop:'10px'}}>Work With Me</h2>
        </div>
        <div className="ideas-footer">
          <span className="status-label">100%</span>
          <div className="nav-buttons">
            <span className="nav-icon">◀</span>
            <span className="nav-icon">▶</span>
            <span className="page-number">1</span>
            <span className="nav-icon">◀</span>
            <span className="nav-icon">▶</span>
          </div>
        </div>
      </div>

     

      {/* ---------- 5) Floating “Brush Preview” Window (Right‐Bottom) ---------- */}
    

      {/* ---------- 6) Checkerboard‐Style Image Editor Window (Left‐Bottom) ---------- */}
  

      {/* ---------- 7) Three “New Tab” Browser Windows (Right Column) ---------- */}
      <div className="window browser-window website-window">
        <div className="browser-titlebar">
          <div className="browser-left">
            <span className="nav-icon">{'<'}</span>
            <span className="nav-icon">{'>'}</span>
          </div>
          <div className="browser-tab">New Tab</div>
          <div className="browser-add">＋</div>
        </div>
        <div className="browser-content">
          <span className="browser-label">WEBSITE</span>
          <p className="browser-info">www.reallygreatsite.com</p>
        </div>
      </div>

      <div className="window browser-window email-window">
        <div className="browser-titlebar">
          <div className="browser-left">
            <span className="nav-icon">{'<'}</span>
            <span className="nav-icon">{'>'}</span>
          </div>
          <div className="browser-tab">New Tab</div>
          <div className="browser-add">＋</div>
        </div>
        <div className="browser-content">
          <span className="browser-label">EMAIL</span>
          <p className="browser-info">hello@reallygreatsite.com</p>
        </div>
      </div>

      <div className="window browser-window phone-window">
        <div className="browser-titlebar">
          <div className="browser-left">
            <span className="nav-icon">{'<'}</span>
            <span className="nav-icon">{'>'}</span>
          </div>
          <div className="browser-tab">New Tab</div>
          <div className="browser-add">＋</div>
        </div>
        <div className="browser-content">
          <span className="browser-label">PHONE</span>
          <p className="browser-info">123-456-7890</p>
        </div>
      </div>
<SocialMedia/>
     
    </div>
  );
}
