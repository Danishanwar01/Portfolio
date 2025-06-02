// src/components/Contact.jsx
import React from "react";
import "../styles/Contact.css";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
          <div className="browser-tab">Social media</div>
          <div className="browser-add">＋</div>
        </div>
       <div className="browser-content">
      <div className="sm-content">
        <p>To see more of my work,</p>
        <p>visit my socials:</p>
        <div className="sm-icons">
          {/* GitHub */}
          <a
            href="https://github.com/Danishanwar01"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/danish_anwar_khan_07/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6389616657" 
           
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
      </div>

      <div className="window browser-window email-window">
        <div className="browser-titlebar">
          <div className="browser-left">
            <span className="nav-icon">{'<'}</span>
            <span className="nav-icon">{'>'}</span>
          </div>
          <div className="browser-tab">Email & Contact</div>
          <div className="browser-add">＋</div>
        </div>
        <div className="browser-content">
          <span className="browser-label">EMAIL</span>
          <p className="browser-info">danishkhan705010@gmail.com</p>
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
          <p className="browser-info">+91 6389616657</p>
        </div>
      </div>
{/* <SocialMedia/> */}
     
    </div>
  );
}
