import { mkdir, readFile, writeFile } from "node:fs/promises";
import { notFoundTitle, siteRoutes } from "../src/routes.ts";

const dist = new URL("../dist/", import.meta.url);
const entry = await readFile(new URL("index.html", dist), "utf8");
const secondaryEntry = entry.replace(/^\s*<meta name="description"[^>]*>\r?\n/m, "");

function withTitle(html, title) {
    const escapedTitle = title.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
    return html.replace(/<title>[^<]*<\/title>/, () => `<title>${escapedTitle}</title>`);
}

for (const { path, title } of siteRoutes) {
    const isHome = path === "/";
    const directory = new URL(`.${path}${isHome ? "" : "/"}`, dist);
    await mkdir(directory, { recursive: true });
    await writeFile(new URL("index.html", directory), withTitle(isHome ? entry : secondaryEntry, title));
}

const notFound = withTitle(secondaryEntry, notFoundTitle)
    .replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
await writeFile(new URL("404.html", dist), notFound);
