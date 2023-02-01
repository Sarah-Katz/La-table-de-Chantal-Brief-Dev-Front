export default function Item({ name, price, image }) {
    return (
    <div className="Item">
    <img className="item-image" src={image} alt={name} />
    <span className="item-name">{name}</span>
    <span className="item-price">{price}</span>
    </div>
    );
    }