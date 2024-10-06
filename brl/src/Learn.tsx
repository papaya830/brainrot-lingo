import { Link, Outlet } from "react-router-dom";

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
                    <ul>

                        <li>
                            <Link to="chapter1">Chapter 1</Link>
                        </li>
                        <li>
                            <Link to="chapter2">Chapter 2</Link>
                        </li>
                        <li>
                            <Link to="chapter3">Chapter 3</Link>
                        </li>
                    </ul>
            {/* This Outlet will render the content of the selected chapter */}
            <Outlet />
        </div>
    );
};

export default Learn;
