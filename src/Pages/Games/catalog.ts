import type { Game } from "./GameCard";

export const featuredGame: Game = {
    id: "mimic-nights",
    title: "Mimic Nights",
    description: "Survive seven nights in a dark cabin. When the light goes out, a mimic disguised as an everyday object moves. Spot what changed before you run out of matches and bullets.",
    platforms: ["iPhone", "iPad"],
    screenshot: {
        src: "/games/mimic-nights.webp",
        alt: "First-person view of an open book on the cabin floor, lit by a match.",
        width: 1200,
        height: 554,
    },
    appStoreUrl: "https://apps.apple.com/us/app/mimic-nights/id6738483986",
};

export const games: readonly Game[] = [
    featuredGame,
    {
        id: "run-use-gun",
        title: "Run Use Gun",
        description: "Fight off robots in a post-apocalyptic shooter. Upgrade your weapons, health, and stamina between runs to see how long you can survive.",
        platforms: ["iPhone", "iPad"],
        screenshot: {
            src: "/games/run-use-gun.webp",
            alt: "The player fights robots between colorful shipping containers.",
            width: 1200,
            height: 900,
        },
        appStoreUrl: "https://apps.apple.com/us/app/run-use-gun/id1585550795",
    },
    {
        id: "mahjong-zen-tiles",
        title: "Mahjong: Zen Tiles",
        description: "Match pairs to clear the board in classic mahjong solitaire. Choose from multiple layouts and solve puzzles at your own pace.",
        platforms: ["iPhone", "iPad"],
        screenshot: {
            src: "/games/mahjong-zen-tiles.webp",
            alt: "A layered mahjong tile layout over a painted landscape.",
            width: 900,
            height: 1200,
        },
        appStoreUrl: "https://apps.apple.com/us/app/mahjong-zen-tiles/id6788802219",
    },
];
