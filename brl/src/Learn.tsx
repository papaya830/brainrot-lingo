import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Learn: React.FC = () => {
    const bgStyle = {
        backgroundImage: 'url("images/jh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    return (
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
            {/* Card Container */}
            <div className="card-container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>CHAPTER 1</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>An introduction to BrainRot.</p>
                            <Link to="chapter1">Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>CHAPTER 2</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Learn More about BrainRot.</p>
                            <Link to="chapter2">Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <h3>CHAPTER 3</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Challenge yourself.</p>
                            <Link to="chapter3">Learn</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* This Outlet will render the content of the selected chapter */}
            <Outlet />
        </div>
    );
};

export default Learn;
