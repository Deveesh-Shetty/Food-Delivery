import React from "react";
import { useCartContext } from "../../context/CartContext";

import "./Cart.styles.scss";

const Cart = () => {
    const { cart } = useCartContext();

    return (
        <section id="cart">
            <div className="cart section-px section-py">
                {cart.map(item => {
                    const { productId, name, quantity, selectedSize, total } = item;

                    return (
                        <div key={productId}>
                            <h1>{name}</h1>
                            <p>{selectedSize}</p>
                            <p>{quantity}</p>
                            <p>{total}</p>
                            <br />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Cart;
