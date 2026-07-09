import Navbar from "../../components/Navbar/Navbar";
import "../Page.css";

export default function Team() {
    return (
        <>
            <Navbar />

            <main>
                <section className="page-section">
                    <h1>Team</h1>

                    <p>
                        We are a small independent game development studio
                        creating original experiences.
                    </p>
                </section>
            </main>
        </>
    );
}