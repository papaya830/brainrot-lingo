import React from "react";
import { Link } from "react-router-dom"; // Import Link

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/learn">Learn</Link>
            </li>
            <li>
              <Link to="/dictionary">Dictionary</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* The content of the main app is rendered here. */}
        <div>
          <h1>Welcome to the App!</h1>
        </div>
      </main>
    </>
  );
};

export default App;
