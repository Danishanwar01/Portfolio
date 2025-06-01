import React from "react";
import "../styles/SocialMedia.css"; 


export default function SocialMedia() {
  return (
    <div className="social-media-window">
      {/* Title Bar */}
      <div className="sm-titlebar">
        <span className="sm-nav-icon">{'<'}</span>
        <span className="sm-nav-icon">{'>'}</span>
        <div className="sm-tab">Party Media Player</div>
        <div className="sm-controls">
          <span className="sm-btn">▢</span>
          <span className="sm-btn">❐</span>
          <span className="sm-btn">✕</span>
        </div>
      </div>

      {/* Content (social icons + handle) */}
      <div className="sm-content">
        <p>To see more of my work,</p>
        <p>visit my socials:</p>
        <div className="sm-icons">
          <span className="icon">🅕</span>
          <span className="icon">🅘</span>
          <span className="icon">🐦</span>
        </div>
        <p className="sm-handle">@reallygreatsite</p>
      </div>

      {/* Footer (playback bar) */}
      <div className="sm-footer">
        <div className="sm-player-row">
          <span className="sm-player-btn">⏮</span>
          <span className="sm-player-btn">⏯</span>
          <span className="sm-player-btn">⏭</span>
          <span className="sm-time">0:00</span>
          <div className="sm-volume">
            <div className="sm-vol-level"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
