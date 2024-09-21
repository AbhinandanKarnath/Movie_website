import React from "react";
import "../css/Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Movie Adda. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
