import React from "react";
import "../css/AboutUs.css"; // CSS file for styling
import abhinandanImg from "../img/abhinandan.jpg"; // Adjust the filename
import elvisImg from "../img/elvis.jpg"; // Adjust the filename
import shashiImg from "../img/shashi.jpg"; // Adjust the filename

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>Movie Adda</h1>
      <h2>Group 12</h2>
      <h3>Contributors:</h3>
      <div className="contributors">
        <div className="contributor">
          <img src={abhinandanImg} alt="Abhinandan" />
          <div className="contributor-info">
            <p>Abhinandan</p>
            <p>Registration Number: 2447101</p>
            <a
              href="https://github.com/AbhinandanKarnath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github-btn">
                <i className="fab fa-github"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="contributor">
          <img src={elvisImg} alt="Elvis" />
          <div className="contributor-info">
            <p>Elvis</p>
            <p>Registration Number: 2447129</p>
            <a
              href="https://github.com/elvislobo472"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github-btn">
                <i className="fab fa-github"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="contributor">
          <img src={shashiImg} alt="Shashi" />
          <div className="contributor-info">
            <p>Shashi</p>
            <p>Registration Number: 2447137</p>
            <a
              href="https://github.com/shashi1910"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github-btn">
                <i className="fab fa-github"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
