import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar__logo">
                <Link to="/">
                    CHERTI
                </Link>
            </div>


            <ul className="navbar__links">

                <li>
                    <Link to="/team">
                        Team
                    </Link>
                </li>

                <li>
                    <Link to="/games">
                        Games
                    </Link>
                </li>

                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/privacy">
                        Privacy
                    </Link>
                </li>

            </ul>

        </nav>
    );
}