import { Link } from "react-router-dom";

export default function Header() {
    

    return (
        <header>
            <img src="/images/logo/logo.png" alt="Logo La table de Chantal" />
            <nav>
                <Link className="header-link" to="/">Accueil</Link>
                <Link className="header-link" id="foodlink" to="/menufood">Carte des plats</Link>
                <Link className="header-link" to="/menudrink">Carte des boissons</Link>
                <button className="header-link" id="contact-link">Nous contacter</button>
            </nav>
        </header>
    )
}