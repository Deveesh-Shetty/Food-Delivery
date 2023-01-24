import React from "react";

import { BsArrowRight, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

import "./Footer.styles.scss";

const Footer = () => {
    return (
        <footer className="footer section-px">
            <div className="upper">
                <div className="left">
                    <h2 className="left__logo">
                        <a href="#">kalim.</a>
                    </h2>

                    <p className="left__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis nobis ut
                        amet harum ipsam.
                    </p>

                    <div className="contact">
                        <div className="group">
                            <span className="group__label">Contact: </span>
                            <a href="tel:09351523895" className="group__link">
                                (+63) 935-1523-895
                            </a>
                        </div>

                        <div className="group">
                            <span className="group__label">Email: </span>
                            <a
                                href="mailto:kalim.cucinareofficialph@gmail.com"
                                className="group__link"
                            >
                                kalim.cucinareofficialph@gmail.com
                            </a>
                        </div>
                    </div>

                    <ul className="social">
                        <li>
                            <a href="#">
                                <BsInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <SiTiktok />
                            </a>
                        </li>
                    </ul>
                </div>

                <nav className="nav">
                    <ul className="list">
                        <li>
                            <h3 className="list__heading">
                                <a href="#" className="nav__link">
                                    Menu
                                </a>
                            </h3>
                            <ul className="list__inner">
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Baked Sushi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Pasta
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Rice Bowls
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Takoyaki
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Sushi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Drinks
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list">
                        <li>
                            <h3 className="list__heading">Information</h3>
                            <ul className="list__inner">
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav__sub-link">
                                        Events
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="list">
                        <li>
                            <h3 className="list__heading">Address</h3>

                            <div className="nav__sub-link">
                                525 Jose Abad Santos, Brgy. Salapungan 2009 Angeles City,
                                Philippines
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className="right"></div>
            </div>

            <div className="bottom">
                <div className="legal">
                    <a href="#"> Privacy Policy</a>
                    <span>|</span>
                    <a href="#"> Terms of Use</a>
                </div>

                <div className="credits">
                    Copyright <span className="credits__icon">&copy;</span> 2023 Kalim. All rights
                    Reserved
                </div>
            </div>

            {/* <div className="info">
                <div className="contact">
                    <h3>Contact</h3>
                    <div className="contact__detail">
                        <span className="label">Call:</span>
                        <a href="tel:09351523895" className="value">
                            (+63) 935-1523-895
                        </a>
                    </div>
                    <div className="contact__detail">
                        <span className="label">Email:</span>
                        <a href="mailto:kalim.cucinareofficialph@gmail.com" className="value">
                            kalim.cucinareofficialph@gmail.com
                        </a>
                    </div>
                </div>

                <div className="line-divider"></div>

                <div className="location">
                    <h3>Location</h3>
                    <div className="location__detail">
                        <span className="value">
                            525 Jose Abad Santos, Brgy. Salapungan 2009 Angeles City, Philippines
                        </span>
                    </div>
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;
