import { Link } from "react-router-dom";
import GameCard from "../Games/GameCard";
import { featuredGame } from "../Games/catalog";
import "./Home.css";

export default function Home() {
    return (
        <section className="home">
            <header className="home__intro">
                <h1 className="wordmark">CHERTI</h1>
                <div>
                    <p>We’re an independent game development team. We make original games and develop games for clients.</p>
                    <div className="page-actions">
                        <Link className="action-link action-link--primary" to="/games">Browse all games</Link>
                        <Link className="action-link" to="/contact">Work with us</Link>
                    </div>
                </div>
            </header>

            <section className="home__feature" aria-label="Featured game">
                <p className="home__feature-label" aria-hidden="true">Featured game</p>
                <GameCard game={featuredGame} />
            </section>
        </section>
    );
}
