import React, { useState } from 'react';

const Dictionary: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen((prev) => !prev);
    };

    const buttonPlacement: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        flexDirection: "column",
        height: '100vh',
        width: '100%',
    };

    const bgStyle = {
        backgroundImage: 'url("images/jh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    return <div className="dropdown" style={bgStyle}>
        <div style={buttonPlacement}>
        <button 
            className="dropdown-button" 
            onClick={onClick} 
            style={{
            padding: "10px 20px", // Padding for the button
            backgroundColor: "#4CAF50", // Button background color
            color: "white", // Text color
            border: "none", // No border
            borderRadius: "5px", // Rounded corners
            cursor: "pointer", // Pointer cursor on hover
            }}
        >
            A - names... {/* Text inside the button */}
        </button>
        {isOpen && (
            <div className="dropdown-content">
            <h3>Dropdown Content</h3>
            <p>This dropdown appears on button click.</p>
            <p>More information can be added here.</p>
            </div>
        )}
        </div>
    </div>
  };
  
  export default Dictionary;
  