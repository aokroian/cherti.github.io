import { useLayoutEffect, useRef, useState } from "react";
import GameCard from "./GameCard";
import { games } from "./catalog";
import { featuredJams, jamArchive } from "./jams";

const jamBatchSize = 4;

export default function Games() {
    const [loadedBatches, setLoadedBatches] = useState(0);
    const firstNewLink = useRef<HTMLAnchorElement>(null);
    const shownJams = jamArchive.slice(0, loadedBatches * jamBatchSize);
    const firstNewIndex = (loadedBatches - 1) * jamBatchSize;

    useLayoutEffect(() => {
        firstNewLink.current?.focus();
    }, [loadedBatches]);

    return (
        <section className="games">
            <h1 className="page-heading">Games</h1>
            <section className="games__section" aria-labelledby="releases-heading">
                <h2 id="releases-heading">Releases</h2>
                <div className="games__gallery">
                    {games.map(game => <GameCard key={game.id} game={game} heading="h3" />)}
                </div>
            </section>
            <section className="games__section" aria-labelledby="jams-heading">
                <h2 id="jams-heading">Game Jams</h2>
                <div className="games__gallery">
                    {featuredJams.map(game => <GameCard key={game.id} game={game} heading="h3" />)}
                </div>
                {shownJams.length > 0 && (
                    <ul className="jam-archive" role="list">
                        {shownJams.map((game, index) => (
                            <li key={game.url}>
                                <a href={game.url} ref={index === firstNewIndex ? firstNewLink : undefined}>
                                    <span>{game.title}</span>
                                    <span className="jam-archive__event">Ludum Dare {game.event}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                {shownJams.length < jamArchive.length && (
                    <button
                        className="action-link jam-archive__load"
                        type="button"
                        onClick={() => setLoadedBatches(batch => batch + 1)}
                    >
                        Load more jam games
                    </button>
                )}
            </section>
        </section>
    );
}
