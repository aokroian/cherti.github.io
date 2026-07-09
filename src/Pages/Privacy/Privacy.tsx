import Navbar from "../../components/Navbar/Navbar";

export default function Privacy() {
    return (
        <>
            <Navbar />

            <main>
                <section className="privacy">
                    <h1>Privacy Policy</h1>

                    <p>
                        CHERTI respects your privacy.
                    </p>

                    <p>
                        Our games do not collect, store, or transmit
                        personal data. We do not use telemetry,
                        analytics, tracking systems, or online services
                        that collect information about players.
                    </p>

                    <p>
                        We do not share any player information with
                        third parties.
                    </p>
                </section>
            </main>
        </>
    );
}