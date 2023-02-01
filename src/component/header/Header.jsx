import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img src="/images/logo.png" alt="Logo La table de Chantal" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link id="foodlink" to="/menufood">Carte des plats</Link>
                <Link to="/menudrink">Carte des boissons</Link>
                <Link to="/contact">Nous contacter</Link>
            </nav>
        </header>
    )
}