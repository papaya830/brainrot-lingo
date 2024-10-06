import React, { useState } from 'react';

const Dictionary: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen((prev) => !prev);
    }

    return <div className="dropdown">
            <button className="dropdown-button" onClick={onClick}>
                A - names...
                </button>
                {isOpen && (
                    <div className="dropdown-content">
                        <h3>Dropdown Content</h3>
                        <p>This dropdown appears on button click.</p>
                        <p>More information can be added here.</p>
                    </div>
                )}
  </div>
  };
  
  export default Dictionary;
  