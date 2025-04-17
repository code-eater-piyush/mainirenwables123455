import React from 'react';
import './404.css'; // Import the CSS for the 404 page

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="error-container">
        <h1 className="error-heading">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-description">The page you're looking for doesn't exist.</p>
        <a href="/" className="go-home-btn">Go to Homepage</a>
      </div>
    </div>
  );
}

export default PageNotFound;
