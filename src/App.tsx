import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Team from "./Pages/Team/Team.tsx";
import Games from "./Pages/Games/Games.tsx";
import Contact from "./Pages/Contact/Contact.tsx";
import Privacy from "./Pages/Privacy/Privacy.tsx";
import Home from "./Pages/Home/Home.tsx";



function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/team"
                    element={<Team />}
                />

                <Route
                    path="/games"
                    element={<Games />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/privacy"
                    element={<Privacy />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;