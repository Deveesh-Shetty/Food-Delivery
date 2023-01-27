import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { HiOutlineShoppingBag } from "react-icons/hi";

import { useCartContext } from "../../context/CartContext";

import "./Header.styles.scss";
import CartDropdown from "../../components/CartDropdown/CartDropdown.component";

const Header = () => {
    const { cart } = useCartContext();
    const [cartIsBumped, setCartIsBumped] = useState(false);

    const [displayCartDropdown, setDisplayCartDropdown] = useState(false);

    const cartTotal = cart.length > 0 ? cart.reduce((sum, order) => sum + order.total, 0) : 0;

    const cartBagClasses = `cart__bag ${cartIsBumped ? "bump" : ""}`;

    useEffect(() => {
        if (cart.length === 0) {
            return;
        }
        setCartIsBumped(true);

        const timer = setTimeout(() => {
            setCartIsBumped(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cart.length]);

    return (
        <>
            <header className="section-px">
                <div className="left">
                    <h1>
                        <NavLink to="/">kalim.</NavLink>
                    </h1>
                </div>

                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink className="nav__link" to="/menu">
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <a className="nav__link" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="right">
                    <div className="cart-container">
                        <button
                            className="cart"
                            onClick={() => setDisplayCartDropdown(prevState => !prevState)}
                        >
                            <div className={cartBagClasses}>
                                <HiOutlineShoppingBag />
                                <span className="cart__items">{cart.length}</span>
                            </div>

                            <div>
                                <div>Your Cart</div>
                                <span className="cart__total">
                                    ₱{" "}
                                    {cartTotal.toLocaleString("en", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        </button>
                        {displayCartDropdown && <CartDropdown />}
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;
