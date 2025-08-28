import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Ashish Kumar. All rights reserved.</p>
      <div className="footer-links">
        <a href="tel:+919931343026">+919931343026</a>
        <a href="mailto:ashishhktr9576@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/ashish-kumar-05912930b"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AshishSingh9931"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
