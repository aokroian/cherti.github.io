import "./Games.css";

export type GameCardContent = {
    id: string;
    title: string;
    description: string;
    screenshot: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
};

export type Game = GameCardContent & {
    platforms: readonly string[];
    appStoreUrl: string;
};

export type JamGame = GameCardContent & {
    event: number;
    overall: number;
    url: string;
};

export default function GameCard({ game, heading: Heading = "h2" }: {
    game: Game | JamGame;
    heading?: "h2" | "h3";
}) {
    const titleId = `game-${game.id}`;
    const isRelease = "appStoreUrl" in game;
    const metadata = isRelease
        ? game.platforms.join(" · ")
        : `Ludum Dare ${game.event} · Overall ${game.overall.toFixed(3)}/5`;
    const linkLabel = isRelease ? "View on the App Store" : "View on Ludum Dare";

    return (
        <article className="game-card" aria-labelledby={titleId}>
            <img className="game-card__screenshot" {...game.screenshot} />
            <div className="game-card__details">
                <Heading className="game-card__title" id={titleId}>{game.title}</Heading>
                <p>{game.description}</p>
                <p className="game-card__metadata">{metadata}</p>
                <a
                    className="action-link"
                    href={isRelease ? game.appStoreUrl : game.url}
                    aria-label={`${linkLabel}: ${game.title}`}
                >
                    {linkLabel}
                </a>
            </div>
        </article>
    );
}
