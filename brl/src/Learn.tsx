import { Link, NavLink } from "react-router-dom";
import "./App.css"

const Learn: React.FC = () => {
return (
        <div>
            <header>
                <nav>
                    <Link to="/">
                            <img src="/images/new-logo.png" alt="Logo" className="logo-img" />
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
{/* Card Container */}
            <div className="card-container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>LEARNING DECK</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>LEARNING DECK</h3>
                            <p>Study terms with cutting edge technology.</p>
                            <Link to="/chapter1">Learn Deck</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>QUIZ</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>QUIZ</h3>
                            <p>Did you learn the terms?</p>
                            <p>TAKE THE QUIZ!!</p>
                            <Link to="/chapter2">Take Quiz</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>TRANSLATOR</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>TRANSLATOR</h3>
                            <p>Turn English to Brainrot.</p>
                            <Link to="/chapter3">Translate</Link>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2024 BrainRot Lingo. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Learn;