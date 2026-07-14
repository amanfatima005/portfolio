import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Aman Fatima. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer"> https://www.linkedin.com/in/aman-fatima-b024b331a</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">https://www.linkedin.com/in/aman-fatima-b024b331a</a>
      </div>
    </footer>
  );
}

export default Footer;
