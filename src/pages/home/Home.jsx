import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Slider from "../../component/slider/Slider";
import "../../component/slider/Slider.css";
import { images } from "../../data/slider-images";

export default function Home() {
    return (
        <div>
            <Header />
            <Slider images={images} />
            <main>
                <p className="description-restaurant">"Bienvenue au restaurant gastronomique, La table de Chantal, où l'expérience culinaire rencontre la passion du vin. Nous offrons une cuisine inventive et délicate, associée à une sélection éclectique de vins rares et fins pour créer un mariage parfait d'arômes et de saveurs. Notre équipe de chefs talentueux utilise des ingrédients de première qualité pour créer des plats qui subliment les saveurs naturelles des aliments.
                    <br />Notre liste de vins est soigneusement sélectionnée pour offrir une expérience de dégustation inoubliable. Du vin rouge riche et robuste aux blancs effervescents et fruités, notre sélection de vins de qualité supérieure est parfaite pour accompagner votre repas.
                    Rejoignez-nous pour une soirée inoubliable, où vous pourrez déguster des plats délicieux et des vins rares dans une ambiance sophistiquée et chaleureuse. Nous nous efforçons de vous offrir une expérience gastronomique exceptionnelle à chaque visite."</p>
                <p className="description-chef">"Le chef Pierre Dubois a apporté sa touche culinaire unique au restaurant gastronomique en mettant en avant son amour pour les produits de qualité et les saveurs délicates. Avec des années d'expérience dans les cuisines les plus prestigieuses de France, Chef Dubois crée des plats gastronomiques qui subliment les ingrédients de saison les plus frais.
                    Sous la direction de Chef Dubois, notre équipe de cuisine travaille sans relâche pour offrir des expériences culinaires inoubliables à chaque client. Son engagement envers la qualité et la précision dans chaque plat se reflète dans les arômes étonnants et les présentations soignées de chaque assiette."</p>
            </main>
            <Footer />
        </div>
    )
}