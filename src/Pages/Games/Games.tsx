import Navbar from "../../components/Navbar/Navbar";
import "../Page.css";

export default function Games() {
    return (
        <>
            <Navbar />

            <main>
                <section className="page-section">
                    <h1>Games</h1>

                    <p>
                        Our games are focused on immersive single-player
                        experiences.
                    </p>
                </section>
            </main>
        </>
    );
}