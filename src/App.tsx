import { useEffect, useRef, type ComponentType } from "react";
import { Link, matchRoutes, useLocation, useRoutes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Games from "./Pages/Games/Games";
import Home from "./Pages/Home/Home";
import Privacy from "./Pages/Privacy/Privacy";
import Team from "./Pages/Team/Team";
import Navbar from "./components/Navbar/Navbar";
import { notFoundTitle, siteRoutes } from "./routes";
import "./Pages/Page.css";

const pages: Record<(typeof siteRoutes)[number]["path"], ComponentType> = {
    "/": Home,
    "/team": Team,
    "/games": Games,
    "/contact": Contact,
    "/privacy": Privacy,
};

function NotFound() {
    return (
        <section className="page-section">
            <h1>Page Not Found</h1>
            <p>The page you requested could not be found.</p>
            <Link to="/">Back to home</Link>
        </section>
    );
}

const routes = [
    ...siteRoutes.map(({ path, title }) => {
        const Page = pages[path];
        return { path, title, element: <Page /> };
    }),
    { path: "*", title: notFoundTitle, element: <NotFound /> },
];

export default function App() {
    const { pathname } = useLocation();
    const activeRoute = matchRoutes(routes, pathname)?.[0]?.route;
    const title = activeRoute?.title ?? notFoundTitle;
    const content = useRoutes(routes);
    const previousPathname = useRef(pathname);
    const main = useRef<HTMLElement>(null);

    useEffect(() => {
        document.title = title;

        if (previousPathname.current !== pathname) {
            previousPathname.current = pathname;
            window.scrollTo(0, 0);
            main.current?.focus({ preventScroll: true });
        }
    }, [pathname, title]);

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to main content</a>
            <Navbar activePath={activeRoute?.path} />
            <main className="site-main" id="main-content" ref={main} tabIndex={-1}>
                {content}
            </main>
        </>
    );
}
