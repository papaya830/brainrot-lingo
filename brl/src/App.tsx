import React from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink for active links
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div className="background-image">
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
        <main>
          {/* The content of the main app is rendered here. */}
          <div>
            <h1 className="transition-t1">BrainRot Lingo</h1>
            <h2 className="transition-t2">Stay Trendy, Stay Connected!</h2>
            <div className="description-blob">
              <p>
                Introducing our innovative platform, expertly designed for parents who want to stay in the loop with their children’s ever-evolving slang.
                With our engaging resources, you’ll not only learn the latest lingo but also connect with your kids on a whole new level.
                Empower yourself with the words that shape their world, and watch as your conversations flourish! Stay relevant, stay connected, and join the fun today!
              </p>
            </div>
          </div>
          <img
            src="/images/home/dabbing-brain.png" // Adjusted path
            alt="Dabbing Brain"
            className="overlay-image"
        />
        </main>
        <footer className="footer">
          <p>© 2024 BrainRot Lingo. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
