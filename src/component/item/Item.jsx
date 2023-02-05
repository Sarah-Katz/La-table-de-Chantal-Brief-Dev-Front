import './Item.css'

export default function Item({ name, price, image }) {
    return (
        <div className="item">
            <img className="item-image" src={image} alt={name} />
            <div className='item-infos'>
                <span className="item-name">{name}</span>
                <span className="item-price">{price}</span>
            </div>
        </div>
    );
}