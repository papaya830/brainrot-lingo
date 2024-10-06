import React from "react";
import { Link } from "react-router-dom"; // Import Link
import './App.css';

const App: React.FC = () => {
  return (
    <>
    <div className="background-image">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/learn" activeClassName="active">Learn</Link>
            </li>
            <li>
              <Link to="/dictionary" activeClassName="active">Dictionary</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* The content of the main app is rendered here. */}
        <div>
          <h1 className="transition-t1">BrainRot Lingo</h1>
          <h2 className="transition-t2">Stay Trendy, Stay Connected!</h2>
        </div>
        <img
            src="public/images/home/dabbing-brain.png"
            alt="dabbing-brain"
            className="overlay-image"
        />
      </main>
      </div>
    </>
  );
};

export default App;
