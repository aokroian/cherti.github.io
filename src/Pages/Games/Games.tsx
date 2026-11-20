import GameCard from "./GameCard";
import { games } from "./catalog";

export default function Games() {
    return (
        <section className="games">
            <h1 className="page-heading">Games</h1>
            <div className="games__list">
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </div>
        </section>
    );
}
