import type { JamGame } from "./GameCard";

export const featuredJams: readonly JamGame[] = [
    {
        id: "command-summon",
        title: "Command: Summon",
        event: 55,
        overall: 4.065,
        description: "Enter commands in a retro terminal to summon characters and objects and discover different endings.",
        screenshot: {
            src: "/games/command-summon.jpg",
            alt: "A pixel-art character above the game's command terminal.",
            width: 960,
            height: 768,
        },
        url: "https://ldjam.com/events/ludum-dare/55/command-summon",
    },
    {
        id: "nights-in-the-cozy-shack",
        title: "Nights in the cozy shack",
        event: 56,
        overall: 3.75,
        description: "Spend a week in a shack where a mimic changes its disguise in the dark.",
        screenshot: {
            src: "/games/nights-in-the-cozy-shack.jpg",
            alt: "A shadowy creature with a glowing purple eye stretches across the front of a shack.",
            width: 960,
            height: 768,
        },
        url: "https://ldjam.com/events/ludum-dare/56/nights-in-the-cozy-shack",
    },
    {
        id: "stonx",
        title: "Stonx!",
        event: 49,
        overall: 3.585,
        description: "Trade gold, wood, and oil in an unstable market and try to turn a profit of one million dollars.",
        screenshot: {
            src: "/games/stonx.jpg",
            alt: "A cartoon trader in front of a market board with a rising orange arrow.",
            width: 960,
            height: 768,
        },
        url: "https://ldjam.com/events/ludum-dare/49/stonx",
    },
];

export const jamArchive = [
    { title: "Inner Signal", event: 59, url: "https://ldjam.com/events/ludum-dare/59/inner-signal" },
    { title: "The depths of patience", event: 57, url: "https://ldjam.com/events/ludum-dare/57/the-depths-of-patience" },
    { title: "Shotgun hockey", event: 54, url: "https://ldjam.com/events/ludum-dare/54/shotgun-hockey" },
    { title: "Dungeon messenger", event: 53, url: "https://ldjam.com/events/ludum-dare/53/dungeon-messenger" },
    { title: "Wait 4 upgrade", event: 51, url: "https://ldjam.com/events/ludum-dare/51/wait-4-upgrade" },
    { title: "Feed'em all", event: 50, url: "https://ldjam.com/events/ludum-dare/50/feedem-all" },
] as const;
