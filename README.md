# CHERTI

Studio website for CHERTI, built with React, TypeScript, and Vite.

## Local development

Use Node.js 24 and npm. If you use nvm, run `nvm use` from the project root.

```sh
npm ci
npm run dev
```

Run `npm run lint` to check the source and `npm run build` to type-check and create the deployable site in `dist/`. Use `npm run preview` to preview the build locally.

## Routes and deployment

When adding a page, update `src/routes.ts` with its path, navigation label, and browser title, and register its component in `src/App.tsx`. The build uses the same route list to generate HTML entry points for direct visits and refreshes. GitHub Pages serves `dist/404.html` for unknown URLs.

GitHub Actions runs lint and build on pull requests and pushes to `dev` and `main`. Successful builds from pushes to `main` are deployed to GitHub Pages. In the repository's **Settings → Pages**, use **GitHub Actions** as the publishing source and set **Custom domain** to `cherti.net`.
