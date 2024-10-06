import { Link, NavLink } from "react-router-dom";
import React from 'react';

const Chapter3: React.FC = () => {
    return <div>
            <header>
              <nav>
                  <Link to="/">
                      <img src="/images/default-logo.png" alt="Logo" className="logo-img" />
                  </Link>
                  
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
    </div>;
  };

  export default Chapter3;