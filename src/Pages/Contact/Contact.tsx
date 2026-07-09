import Navbar from "../../components/Navbar/Navbar";
import "../Page.css";

export default function Contact() {
    return (
        <>
            <Navbar />

            <main>
                <section className="page-section">
                    <h1>Contact</h1>

                    <div>
                        <p>
                            <a href="tel:+37496080225">
                                +374 96 080225
                            </a>
                        </p>

                        <p>
                            <a href="mailto:shrekfactory@gmail.com">
                                shrekfactory@gmail.com
                            </a>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}