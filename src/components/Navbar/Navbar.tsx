import { Link } from "react-router-dom";
import { siteRoutes } from "../../routes";
import "./Navbar.css";

const [home, ...navigation] = siteRoutes;

export default function Navbar({ activePath }: { activePath?: string }) {
    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="navbar__logo">
                <Link to={home.path} aria-current={activePath === home.path ? "page" : undefined}>
                    {home.label}
                </Link>
            </div>
            <ul className="navbar__links">
                {navigation.map(({ path, label }) => (
                    <li key={path}>
                        <Link to={path} aria-current={activePath === path ? "page" : undefined}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
