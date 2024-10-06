import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DropdownButton from './DropdownButton.tsx';
import data from '../public/termDictionary.json'; // Import your JSON file
import "./Dictionary.css"
import "./App.css"

const Dictionary: React.FC = () => {
    

    return (
        <>
            <div className="bg-style">
                <header>
                    <nav>
                        {/* Logo on the left */}
                        <Link to="/">
                            <img src="/images/new-logo.png" alt="Logo" className="logo-img" />
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
    
                <div className="button-placement">
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
    
                <footer className="footer">
                    <p>© 2024 BrainRot Lingo. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
    
  };
  
  export default Dictionary;
  