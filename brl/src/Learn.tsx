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
                </nav>
            </header>
            {/* This Outlet will render the content of the selected chapter */}
            <Outlet />
        </div>
    );
};

export default Learn;
