export type Game = {
    id: string;
    title: string;
    description: string;
    platforms: readonly string[];
    screenshot: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    appStoreUrl: string;
};

export default function GameCard({ game }: { game: Game }) {
    const titleId = `game-${game.id}`;

    return (
        <article className="game-card" aria-labelledby={titleId}>
            <img className="game-card__screenshot" {...game.screenshot} />
            <div className="game-card__details">
                <h2 id={titleId}>{game.title}</h2>
                <p>{game.description}</p>
                <p className="game-card__platforms">{game.platforms.join(" · ")}</p>
                <a
                    className="game-card__store-link"
                    href={game.appStoreUrl}
                    aria-label={`View on the App Store: ${game.title}`}
                >
                    View on the App Store
                </a>
            </div>
        </article>
    );
}
