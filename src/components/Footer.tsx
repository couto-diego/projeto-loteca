import React from 'react';
import '../styles/global.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Criado por Diego Couto © 2025</p>
      <div className="social-links">
        <a href="https://github.com/couto-diego" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://couto-diego.github.io/portfolio-diego-couto/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-briefcase"></i>
        </a>
        <a href="https://www.linkedin.com/in/couto-diego/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;