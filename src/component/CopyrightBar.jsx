import React from 'react';
import './CopyrightBar.css'; // Import the CSS file

const CopyrightBar = () => {
  return (
    <div className="copyright-bar">
      <p>
      Shreem Steel Co © 2024 
        <a href="/privacy-policy" className="privacy-policy-link">Privacy policy</a>
      </p>
    </div>
  );
};

export default CopyrightBar;
