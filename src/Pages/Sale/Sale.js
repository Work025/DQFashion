import { useState } from "react";
import card1 from '../../Assents/imgcard1.svg';
import card2 from '../../Assents/imgcard2.svg';
import card3 from '../../Assents/imgcard3.svg';
import "../../Styles/Sale.css";

function Sale({ onAddToCart }) { // Headerga cart count yuborish uchun
    const cardsdata = [
        { name: "STILETTOS", price: "$150", sale: "69%", cheap: true, image: card1 },
        { name: "BOOTS", price: "$250", sale: "10%", cheap: false, image: card2 },
        { name: "PEEP TOES", price: "$120", sale: "49%", cheap: true, image: card3 },
        { name: "SNEAKERS", price: "$100", sale: "50%", cheap: true, image: card1 },
        { name: "LOAFERS", price: "$80", sale: "20%", cheap: false, image: card2 },
        { name: "FLATS", price: "$60", sale: "30%", cheap: true, image: card3 },
        { name: "SANDALS", price: "$90", sale: "40%", cheap: true, image: card1 },
        { name: "MOCASSINS", price: "$110", sale: "25%", cheap: false, image: card2 },
        { name: "ANAKLE BOOTS", price: "$200", sale: "15%", cheap: false, image: card3 }
    ];

    const [visibleCount, setVisibleCount] = useState(3);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        if (expanded) {
            setVisibleCount(3);
        } else {
            setVisibleCount(cardsdata.length);
        }
        setExpanded(!expanded);
    };

    // local state for cart
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
        if (onAddToCart) onAddToCart(cartCount + 1); // Headerga ham yuboradi
    };

    return (
        <div className={`sale ${expanded ? 'expanded' : ''}`}>
            <h2>SHOP BEFORE IT ENDS</h2>
            <div className="sale-card">
                {cardsdata.slice(0, visibleCount).map((item, index) => {
                    const finalPrice = item.sale && item.sale !== "none"
                        ? `$${(parseFloat(item.price.slice(1)) * (1 - parseFloat(item.sale) / 100)).toFixed(2)}`
                        : item.price;

                    return (
                        <div className="card" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div className="card-about">
                                <div className="card-about-name">
                                    <h3>{item.name}</h3>
                                    <span>{finalPrice} <del>{item.price}</del></span>
                                </div>
                                <div className="card-about-sale">
                                    <button onClick={handleAddToCart}>
                                        <i className="fas fa-cart-shopping"></i>
                                    </button>
                                    {item.sale && item.sale !== "none" && <p>{item.sale}</p>}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="view-more" onClick={handleToggle}>
                {expanded ? "CLOSE" : "VIEW MORE"}
            </button>
        </div>
    );
}

export default Sale;