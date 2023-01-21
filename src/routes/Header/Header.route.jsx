import React from "react";
import { Outlet } from "react-router-dom";

import { HiOutlineShoppingBag } from "react-icons/hi";

import "./Header.styles.scss";

const Header = () => {
    return (
        <>
            <header className="section-px">
                <div className="left">
                    <h1>
                        <a href="#">kalim.</a>
                    </h1>
                </div>

                <nav className="nav">
                    <ul>
                        <li>
                            <a className="nav__link" href="#">
                                Menu
                            </a>
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
                    <a href="#" className="cart">
                        <div className="cart__bag">
                            <HiOutlineShoppingBag />
                            <span className="cart__items">5</span>
                        </div>

                        <div>
                            <div>Your Cart</div>
                            <span className="cart__total">₱120.53</span>
                        </div>
                    </a>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;
