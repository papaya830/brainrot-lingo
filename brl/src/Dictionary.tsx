import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DropdownButton from './DropdownButton.tsx';
import data from '../public/termDictionary.json'; // Import your JSON file

import "./App.css"

const Dictionary: React.FC = () => {
    const buttonPlacement: React.CSSProperties = {
        display: "flex",
        alignItems: "center", 
        flexDirection: "column",
        height: '100vh',
        width: '100%',
        paddingTop: '100px',
    };

    const bgStyle = {
        flex: 1,
        backgroundImage: 'url("images/jh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    return (

        <>
        <div style={bgStyle}>
        <header>
            <nav>
                {/* Logo on the left */}
                <Link to="/">
                        <img src="/images/default-logo.png" alt="Logo" className="logo-img" />
                </Link>
                {/* Navigation links in the center */}
                <ul>
                    <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/learn" activeClassName="active">Learn</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dictionary" activeClassName="active">Dictionary</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        
    

        <div className="dropdown" style={bgStyle}>
        <div style={buttonPlacement}>
                {/* Dynamically Generate Dropdown Buttons from JSON */}
                {data.map((item, index) => (
                    <DropdownButton
                        key={index}
                        buttonText={item.term}
                        dropdownContent={
                            <div>
                                <p><strong>Definition:</strong> {item.definition}</p>
                                <p><strong>Example:</strong> {item.examples}</p>
                            </div>
                        }
                    />
                ))}
            </div>


      {/* Add more DropdownButtons as needed */}
    {/*</div>*/}

        </div>
        <footer className="footer">
          <p>© 2024 BrainRot Lingo. All rights reserved.</p>
        </footer>
    {/*</></div>*/}
    </div>
    </>
    );
  };
  
  export default Dictionary;
  