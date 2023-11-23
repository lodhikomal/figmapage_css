import React from "react";
import "../style/navStyle.css";

function nav() {
  return (
    <div className="nav-container">
      <div className="nav-items">
        <div className="nav-menu">
          <li className="menu-items">Home</li>
          <li className="menu-items">About</li>

          <li className="menu-items">Contact</li>
        </div>

        <div className="nav-logo">
          <p>Landing</p>
        </div>
        <button className="nav-button">Buy Now</button>
      </div>
    </div>
  );
}

export default nav;
