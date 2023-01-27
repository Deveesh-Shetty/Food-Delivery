import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
    const { cart } = useCartContext();

    const cartIsEmpty = cart.length === 0;

    return (
        <div className="cart-dropdown">
            <div className="orders">
                {cartIsEmpty && <div className="empty-msg">Your cart is empty</div>}

                {!cartIsEmpty &&
                    cart?.map(item => {
                        const { productId, name, quantity, photos, selectedSize, total } = item;
                        const firstPhoto = photos[0];

                        return (
                            <div className="order" key={productId}>
                                <img src={firstPhoto} alt={name} className="order__photo" />

                                <div className="order__details">
                                    <span className="name">{name}</span>
                                    <span className="size">
                                        <span className="label">Size:</span> {selectedSize}
                                    </span>
                                    <span class="quantity">
                                        <span className="label">Qty:</span> {quantity}
                                    </span>
                                    <span class="price">
                                        <span className="label">Total:</span> ₱
                                        {total.toLocaleString("en", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {!cartIsEmpty && (
                <Link to="/cart" className="link go-to-cart">
                    Go to Cart
                </Link>
            )}

            {cartIsEmpty && (
                <Link to="/menu" className="link go-to-cart">
                    Shop Now
                </Link>
            )}
        </div>
    );
};

export default CartDropdown;
