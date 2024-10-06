import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DropdownButton from './DropdownButton.tsx';
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
                {/* First Dropdown Button */}
      <DropdownButton
        buttonText="Button 1"
        dropdownContent={
          <div>
            <p>Dropdown content for Button 1</p>
            <p>More details...</p>
          </div>
        }
      />

      {/* Second Dropdown Button */}
      <DropdownButton
        buttonText="Button 2"
        dropdownContent={
          <div>
            <p>Dropdown content for Button 2</p>
            <p>Additional info here...</p>
          </div>
        }
      />

      {/* Third Dropdown Button */}
      <DropdownButton
        buttonText="Button 3"
        dropdownContent={
          <div>
            <p>Dropdown content for Button 3</p>
            <p>Extra information goes here...</p>
          </div>
        }
        
        />

      {/* Add more DropdownButtons as needed */}
    </div>

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
  