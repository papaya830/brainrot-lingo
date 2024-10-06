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
        buttonText="A"
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

      {/* Third Dropdown Button */}
      <DropdownButton
        buttonText="Button 4"
        dropdownContent={
          <div>
            <p>Dropdown content for Button 4</p>
            <p>Extra information goes here...</p>
          </div>
        }

        />

    {/* Fifth Dropdown Button */}
    <DropdownButton
      buttonText="Button 5"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 5</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Sixth Dropdown Button */}
    <DropdownButton
      buttonText="Button 6"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 6</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Seventh Dropdown Button */}
    <DropdownButton
      buttonText="Button 7"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 7</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Eighth Dropdown Button */}
    <DropdownButton
      buttonText="Button 8"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 8</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Ninth Dropdown Button */}
    <DropdownButton
      buttonText="Button 9"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 9</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Tenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 10"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 10</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Eleventh Dropdown Button */}
    <DropdownButton
      buttonText="Button 11"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 11</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Twelfth Dropdown Button */}
    <DropdownButton
      buttonText="Button 12"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 12</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Thirteenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 13"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 13</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Fourteenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 14"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 14</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Fifteenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 15"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 15</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Sixteenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 16"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 16</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Seventeenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 17"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 17</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Eighteenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 18"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 18</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Nineteenth Dropdown Button */}
    <DropdownButton
      buttonText="Button 19"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 19</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Twentieth Dropdown Button */}
    <DropdownButton
      buttonText="Button 20"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 20</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Twenty-first Dropdown Button */}
    <DropdownButton
      buttonText="Button 21"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 21</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Twenty-second Dropdown Button */}
    <DropdownButton
      buttonText="Button 22"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 22</p>
          <p>Extra information goes here...</p>
        </div>
      }
    />

    {/* Twenty-third Dropdown Button */}
    <DropdownButton
      buttonText="Button 23"
      dropdownContent={
        <div>
          <p>Dropdown content for Button 23</p>
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
  