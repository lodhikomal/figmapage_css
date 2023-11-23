import React from "react";
import "../style/footerStyle.css";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import indeed from "../assets/indeed.png";
import youtube from "../assets/youTube.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <p className="footer-name"> &#169; 2023 Your company</p>
        <p className="landing">Landing</p>
        <button className="footer-btn">Purchase Now</button>
      </div>
      <div className="footer-bottom">
        <ul className="footer-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-icon">
          <img src={facebook}></img>
          <img src={twitter}></img>
          <img src={youtube}></img>
          <img src={indeed}></img>
          <img src={instagram}></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
