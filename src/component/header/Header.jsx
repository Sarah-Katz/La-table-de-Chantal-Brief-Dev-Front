import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../../component/contact/Contact";

export default function Header() {
    const [isVisible, setVisible] = useState(true);

    const handleVisible = (value) => {
        setVisible(value);
    };

    const toggleVisible = () => {
        if (isVisible) {
            handleVisible(false);
        } else {
            handleVisible(true);
        }
    };

    return (
        <header>
            <img src="/images/logo/logo.png" alt="Logo La table de Chantal" />
            <nav>
                <Link className="header-link" to="/">Accueil</Link>
                <Link className="header-link" id="foodlink" to="/menufood">Carte des plats</Link>
                <Link className="header-link" to="/menudrink">Carte des boissons</Link>
                <button className="header-link" id="contact-link" onClick={toggleVisible}>Nous contacter</button>
            </nav>
            <Contact isVisible={isVisible} toggleVisible={toggleVisible} />
        </header>
    )
}