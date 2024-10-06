import React, { useState } from 'react';

// Reusable DropdownButton Component
const DropdownButton: React.FC<{ buttonText: string; dropdownContent: React.ReactNode }> = ({ buttonText, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px", // Padding for the button
    backgroundImage: 'url("images/jh.jpg")', // Set the button's background image
    backgroundSize: 'cover', // Make sure the image covers the button
    backgroundPosition: 'center', // Center the image
    borderRadius: "5px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
    width: '1000px', // Width for the button
    height: '100px', // Height for the button
    border: '2px solid #000000',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '40px',
    textAlign: 'left',
    fontWeight: "bold"
  };

  const dropdownContentStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#000F24',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginTop: '10px', // Space between button and content
    transition: 'max-height 0.3s ease', // Smooth transition
    maxHeight: isOpen ? '200px' : '0', // Max height for the dropdown
    overflow: 'hidden', // Hide content while collapsing
    color: "#F0EAD6"
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClick}>
        {buttonText}
      </button>
      <div style={dropdownContentStyle}>
        {isOpen && dropdownContent}
      </div>
    </div>
  );
};

export default DropdownButton;
