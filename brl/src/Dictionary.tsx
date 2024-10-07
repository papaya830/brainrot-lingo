import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import DropdownButton from './DropdownButton.tsx';
import data from '../public/termDictionary.json'; // Import your JSON file
import "./Dictionary.css";
import "./App.css";

const Dictionary: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Scroll to term function
    const scrollToTerm = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div>
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

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for a term..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="button-placement">
                    {/* Dynamically Generate Dropdown Buttons from JSON */}
                    {data.filter(item =>
                        item.term.toLowerCase().includes(searchTerm.toLowerCase()) // Filter based on search term
                    ).map((item, index) => (
                        <div key={index} id={item.term.replace(/\s+/g, '-').toLowerCase()}> {/* Create an ID for scrolling */}
                            <DropdownButton
                                buttonText={item.term}
                                dropdownContent={
                                    <div>
                                        <p><strong>Definition:</strong> {item.definition}</p>
                                        <p><strong>Example:</strong> {item.examples}</p>
                                    </div>
                                }
                                onClick={() => scrollToTerm(item.term.replace(/\s+/g, '-').toLowerCase())} // Scroll to term on click
                            />
                        </div>
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
