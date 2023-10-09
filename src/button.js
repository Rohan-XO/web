import React, { useState } from 'react';
import './button.css'; // Import the CSS for styling

function PentagonButton({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`pentagon-button ${isHovered ? 'hovered' : ''} ${
        isActive ? 'active' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span>{children}</span>
    </button>
  );
}

export default PentagonButton;