import React, { useState } from 'react';
import "./Dictionary.css"
// Reusable DropdownButton Component
const DropdownButton: React.FC<{ buttonText: string; dropdownContent: React.ReactNode }> = ({ buttonText, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="dropdown-container" 
      onMouseEnter={handleMouseEnter} // Activate dropdown on hover
      onMouseLeave={handleMouseLeave} // Deactivate dropdown when not hovered
    >
      <button className="dropdown-button">
        {buttonText}
      </button>

      {/* Apply CSS class for dropdown content */}
      <div className={`dropdown-content ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && dropdownContent}
      </div>
    </div>
  );
};

export default DropdownButton;
