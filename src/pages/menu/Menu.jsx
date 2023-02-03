import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Item from "../../component/item/Item";
import { starters } from "../../data/items/Starters";
import { meals } from "../../data/items/Meals";
import { desserts } from "../../data/items/Desserts";
import { drinks } from "../../data/items/Drinks";
import './Menu.css'
import Starter from './mozzatomatoe.jpg'
import Meal from './roastedSalmon.jpg'
import Dessert from './oreo.jpg'

function Menu({ isFood }) {
    const [category, setCategory] = useState();
    const [items, setItems] = useState([]);
    const foodlink = document.getElementById('foodlink');

    useEffect(() => {
        if (!category && !isFood) {
            setCategory("drinks");
        } else if (category === "starters") {
            setItems(starters);
        } else if (category === "meals") {
            setItems(meals);
        } else if (category === "desserts") {
            setItems(desserts);
        } else if (category === "drinks") {
            setItems(drinks);
        }
    }, [category, isFood]);

    foodlink.addEventListener('click', (e) => {
        setCategory('');
        setItems([]);
    });

    if (!category) {
        return (
            <div>
                <Header />
                <div  className="button-group-meals">
                <button><img className="menu-btn" src={Starter} alt="Starter Meal" onClick={() => setCategory("starters")}/><div className="bgmTxt">Starters</div></button>
                <button><img  className="menu-btn" src={Meal} alt="meal" onClick={() => setCategory("meals")}/><div className="bgmTxt">Meals</div></button>
                <button><img className="menu-btn" src={Dessert} alt="dessert"onClick={() => setCategory("desserts")}/><div className="bgmTxt">Desserts</div></button>
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <Header />
                <div className="menu-items" key={uuid()}>
                    {items.map((item) => (
                        <Item key={uuid()} name={item.name} price={item.price} image={item.image}/>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Menu;
