import Navbar from "../../components/Navbar/Navbar";
import "../Page.css";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <section className="page-section">

                    <h1>
                        CHERTI
                    </h1>

                    <p>
                        Independent game development studio creating
                        immersive single-player experiences.
                    </p>

                </section>
            </main>
        </>
    );
}