import React from "react";
// import './App.css';
// import './App.css';
// import './Footer.css';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerColumnsStyle}>
        <div style={columnStyle}>
          <h4>Explore</h4>
          <a href="/discover" style={linkStyle}>Discover Books</a><br />
          <a href="/authors" style={linkStyle}>Authors</a><br />
          <a href="/categories" style={linkStyle}>Categories</a>
        </div>
        <div style={columnStyle}>
          <h4>Help</h4>
          <a href="/support" style={linkStyle}>Support</a><br />
          <a href="/faq" style={linkStyle}>FAQs</a><br />
          <a href="/contact" style={linkStyle}>Contact Us</a>
        </div>
        <div style={columnStyle}>
          <h4>Legal</h4>
          <a href="/terms" style={linkStyle}>Terms of Use</a><br />
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
        </div>
      </div>
      <p style={{display:'flex', justifyContent:'center'}}>© 2024 Book Reader | All Rights Reserved</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "40px 0",
};

const footerColumnsStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "20px",
};

const columnStyle = {
  textAlign: "center",
};

const linkStyle = {
  color: "#61dafb",
  textDecoration: "none",
};

export default Footer;
