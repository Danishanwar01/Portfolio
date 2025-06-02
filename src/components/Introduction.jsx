// src/components/Introduction.jsx
import React from "react";
import "../styles/Introduction.css";
// import Portrait from "../assets/portrait.jpg"; 


export default function Introduction() {
  return (
    <div className="intro-container">
      {/* --------------- Top Pink Menu Bar --------------- */}
      <div className="intro-header">
        <div className="circle circle--left" />
        <div className="circle circle--center" />
        <div className="circle circle--right" />
      </div>


      {/* --------------- Browser Window (“Hi, I’m Danish!”) --------------- */}
      <div className="browser-window">
        <div className="browser-titlebar">
          <span className="browser-tab">Name</span>
          <span className="browser-add">＋</span>
        </div>
        <div className="browser-content">
          <h1 className="browser-heading">Hi, I’m Danish!</h1>
        </div>
      </div>

      {/* --------------- Magic Pic Editor Window --------------- */}
      <div className="editor-window">
        {/* Title Bar */}
        <div className="editor-titlebar">
          <span className="editor-name">Introduction</span>
          <div className="editor-controls">
            <span className="control-btn">–</span>
            <span className="control-btn">☐</span>
            <span className="control-btn">✕</span>
          </div>
        </div>
        <div className="editor-main">
          <p>Hello! I’m Danish Anwar, a MERN-stack developer currently pursuing a B.Tech in Computer Science. Over the past three years, I’ve built responsive, full-stack applications using MongoDB, Express, React, and Node.js, turning designs into dynamic, user-friendly interfaces and solid back-end services. Beyond coding, I’m an avid cricketer—having represented my college in cricket and competed in three state-level school tournaments. I thrive on balancing technical challenges with teamwork, both on the field and in collaborative projects.</p>

        </div>
      </div>


      {/* --------------- Document2 – Macrostuff Board Window --------------- */}
      <div className="doc-window">
        <div className="doc-titlebar">
          <span className="doc-name">Introduction</span>
          <div className="doc-controls">
            <span className="control-btn">–</span>
            <span className="control-btn">☐</span>
            <span className="control-btn">✕</span>
          </div>
        </div>

        <div className="doc-content">
          <p>
            Hello! I’m a web developer with nearly three years of experience building responsive, user-friendly applications. On the front end, I turn HTML/CSS designs into dynamic React components—everything from navigation bars and sliders to product cards and blog sections—while optimizing assets for fast load times. On the back end, I use Node.js, Express, and MongoDB to create robust APIs, implement JWT-based authentication, and manage data flows. I’ve built features like full user signup/login systems and an order-tracking system complete with event logging and courier information. I also led a migration from a MERN-stack e-commerce platform to WordPress/WooCommerce with Dokan—using Elementor and the July theme to transfer products, users, and orders, and crafting custom templates so clients can update content without coding. What I enjoy most is collaborating closely with clients—whether they’re small business owners or established enterprises—to understand their goals, iterate quickly based on feedback, and deliver polished, scalable websites and applications that grow alongside their businesses.

          </p>
        </div>
      </div>


    </div>
  );
}
