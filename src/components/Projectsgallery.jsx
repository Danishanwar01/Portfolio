import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projectsgallery.css";

import img1 from "../images/crypto.jpg";
import img2 from "../images/s1.jpg";
import img3 from "../images/ecommerce2.jpg";
import img4 from "../images/e1.jpg";
import img5 from "../images/service2.jpg";
import img6 from "../images/ecommerce5.jpg";
import img7 from "../images/crypto1.jpg";

export default function Projectsgallery() {
  const projects = [
    {
      type: "img",
      src: img1,
      alt: "Crypto Project Screenshot",
      title: "Crypto Wallet UI",
      subtitle: "React + Node.js implementation",
      link: "https://reliwell-finance-j6cg.vercel.app/",
    },
    {
      type: "img",
      src: img6,
      alt: "E-Commerce Project 1",
      title: "E-Commerce Platform",
      subtitle: "MERN Stack with Backend Admin Panel + Order Tracking Via Backend Update",
      link: "https://e-frontend-seven.vercel.app/", 
    },
    {
      type: "img",
      src: img5,
      alt: "Serevice CodeQalb",
      title: "IT Startup web",
      subtitle: "Responsive Design With The Functionality They Rwquire ",
      link: "https://code-qalb.vercel.app/", 
    },
    {
      type: "img",
      src: img4,
      alt: "e-commerce",
      title: "Shopping Web",
      subtitle: "Dynamic Routing & Redux + Sagas ",
      link: "https://danwar-eshop.vercel.app/", 
    },
  
    {
      type: "img",
      src: img2,
      alt: "Home Service Booking Web ",
      title: "Home Service Booking Web",
      subtitle: "Dual Authentication With Vendor Location Filter And Node.js + MongoDB Backend",
      link: "https://service-app-frontend.vercel.app/", 
    },
       {
      type: "img",
      src: img7,
      alt: "Crypto Project Screenshot",
      title: "Crypto Wallet UI",
      subtitle: "React + Node.js implementation",
      link: "https://corpus-git-main-danishanwar01s-projects.vercel.app/",
    },
  ];

  return (
    <div className="gallery-container">
      {/* Top Traffic-Light Bar */}
      <div className="top-bar">
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
      </div>

      {/* Photo Gallery “Window” */}
      <div className="photo-window">
        {/* Title Bar */}
        <div className="photo-titlebar">
          <div className="titlebar-left">
            <div className="circle circle--purple"></div>
            <div className="circle circle--white"></div>
            <div className="circle circle--white"></div>
          </div>
          <div className="title-text">Projects Photo Gallery</div>
          <div className="titlebar-right">
            <button className="ctrl-btn" aria-label="Maximize">▢</button>
            <button className="ctrl-btn" aria-label="Restore">❐</button>
            <button className="ctrl-btn" aria-label="Close">✕</button>
          </div>
        </div>

      

        {/* Responsive Grid Content */}
        <div className="photo-content">
          {projects.map((proj, idx) => {
            return (
              <div key={idx} className="grid-item grid-item--image">
                <div className="image-container">
                  <img src={proj.src} alt={proj.alt} />
                </div>
                <div className="image-caption">
                  <div className="img-title">{proj.title}</div>
                  <div className="img-subtitle">{proj.subtitle}</div>
                  {/* 
                    If you're linking to an external website, use <a> with target="_blank" 
                    If you prefer using React Router for internal navigation, swap <a> for <Link> 
                  */}
                  <a
                    href={proj.link}
                    className="img-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
