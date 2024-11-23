import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="back-home-link">Go Back Home</a>
    </div>
  );
}

export default NotFound;
