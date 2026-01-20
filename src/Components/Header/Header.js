import { useState } from "react";
import "../../Styles/Header.css";

function Header({ cartItems }) {
    const [open, setOpen] = useState(false);

    // total item count
    const cartCount = cartItems.length;

    // narxlar summasi
    const totalPrice = cartItems.reduce((acc, item) => acc + Math.round(item.price * (1 - item.sale / 100)), 0);

    return (
        <div className="header">
            <div className="header-menu" onClick={() => setOpen(true)}>
                <i className="fas fa-bars"></i>
            </div>

            <div className="header-logo">
                <h1>D<span>Q</span>Fashion</h1>
            </div>

            <div className="header-data">
                <button>
                    <i className="fas fa-user"></i> Log in
                </button>
                <hr />
                <div style={{ position: 'relative' }}>
                    <i className="fas fa-cart-shopping"></i>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
            </div>

            {/* MENU */}
            <div className={`menu ${open ? "active" : ""}`}>
                <div className="menu-data">
                    <h2 className="menu-title">
                        Your cart
                        <i className="fas fa-xmark" onClick={() => setOpen(false)}></i>
                    </h2>
                    {cartCount > 0 && (
                        <div className="menu-cart-badge">{cartCount}</div>
                    )}

                    {/* Cart items list */}
                    <div className="menu-cart-items">
                        {cartItems.map((item, i) => (
                            <div key={i} className="menu-cart-item">
                                <span>{item.name}</span>
                                <span>${Math.round(item.price * (1 - item.sale / 100))}</span>
                            </div>
                        ))}
                        <hr />
                        <div className="menu-cart-total">
                            <strong>Total: ${totalPrice}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;