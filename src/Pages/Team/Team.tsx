import { Link } from "react-router-dom";
import "./Team.css";

export default function Team() {
    return (
        <section className="team">
            <header className="team__intro">
                <h1 className="page-heading">Team</h1>
                <p>
                    We’re an independent game development team. We develop games for
                    clients and create original titles of our own.
                </p>
            </header>

            <ul className="team-members" role="list">
                <li>Alik O.</li>
                <li>Sergei L.</li>
            </ul>

            <div className="page-actions">
                <Link className="action-link" to="/games">See our games</Link>
                <Link className="action-link action-link--primary" to="/contact">Work with us</Link>
            </div>
        </section>
    );
}
