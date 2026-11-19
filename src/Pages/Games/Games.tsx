import GameCard from "./GameCard";
import { games } from "./catalog";
import "./Games.css";

export default function Games() {
    return (
        <section className="games">
            <h1>Games</h1>
            <div className="games__list">
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </div>
        </section>
    );
}
