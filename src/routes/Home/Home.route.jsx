import React from "react";

import bakedSushiSrc from "../../assets/images/baked-sushi.jpg";
import storeFrontSrc from "../../assets/images/store-front.jpg";
import lasagnaSrc from "../../assets/images/lasagna.jpg";

import { BsArrowRight, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

import Categories from "../../components/Categories/Categories.component";

import "./Home.styles.scss";
import Feedback from "../../components/Feedback/Feedback.components";

const Home = () => {
    return (
        <>
            {/* ------------------ HERO ------------------ */}

            <section id="hero">
                <div className="hero">
                    <div className="content">
                        <div className="line"></div>

                        <h1 className="large-heading">
                            Authentic taste <br /> at its finest.
                        </h1>
                        <p className="section-paragraph">
                            Our commitment to using only the highest quality ingredients ensures
                            that every dish is bursting with flavor. Whether you're looking for a
                            quick bite or a gourmet meal, we've got you covered.
                        </p>

                        <div className="content__actions">
                            <a href="#" className="btn  btn__filled">
                                Order Now
                            </a>

                            <a href="#" className="btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={bakedSushiSrc} alt="Scallops" />
                    </div>
                </div>
            </section>

            {/* ------------------ STORE INFO ------------------ */}

            <section id="cards-info">
                <div className="cards-info">
                    <div className="banner" style={{ backgroundImage: `url(${storeFrontSrc})` }} />

                    <div className="cards section-px">
                        <div className="card">
                            <h3>Store Hours</h3>

                            <div className="details">
                                <div className="details__item">
                                    <span className="label">Mon - Tue:</span>
                                    <span className="value">10AM - 8PM</span>
                                </div>
                                <div className="details__item">
                                    <span className="label">Wed:</span>
                                    <span className="value">CLOSED</span>
                                </div>
                                <div className="details__item">
                                    <span className="label">Thurs - Sun:</span>
                                    <span className="value">10AM - 8PM</span>
                                </div>
                            </div>

                            <a href="#" className="link">
                                <span>Learn More</span>
                                <BsArrowRight />
                            </a>
                        </div>

                        <div className="divider"></div>

                        <div className="card">
                            <h3>Social Media</h3>

                            <div className="details">
                                <div className="details__item">
                                    <span className="label">
                                        <BsInstagram />
                                    </span>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/kalim.cucinare/"
                                        className="value"
                                    >
                                        kalim.cucinare
                                    </a>
                                </div>

                                <div className="details__item">
                                    <span className="label">
                                        <SiTiktok />
                                    </span>
                                    <a
                                        target="_blank"
                                        href="https://www.tiktok.com/@kalim.cucinare"
                                        className="value"
                                    >
                                        kalim.cucinare
                                    </a>
                                </div>
                                <div className="details__item">
                                    <span className="label">
                                        <BsFacebook />
                                    </span>
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/kalim.cucinare"
                                        className="value"
                                    >
                                        kalim.cucinare
                                    </a>
                                </div>
                            </div>

                            <a href="#" className="link">
                                <span>Learn More</span>
                                <BsArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------ CATEGORIES/MENU ------------------ */}
            <Categories />

            {/* ------------------ CATEGORIES ------------------ */}
            <section id="about">
                <div className="about section-py">
                    <div className="content">
                        <div className="section-heading">
                            <div className="line"></div>
                            <h2 className="primary-heading">
                                Savor an unparalleled taste sensation.
                            </h2>
                            <p className="section-paragraph">
                                Indulge in the complexity and depth of flavors as they dance on your
                                tongue, leaving you with a lasting impression.
                            </p>
                        </div>

                        <a href="#" className="btn ">
                            About Us
                        </a>
                    </div>
                    <div className="banner" style={{ backgroundImage: `url(${lasagnaSrc})` }} />
                </div>
            </section>

            {/* ------------------ FEEDBACK ------------------ */}
            <Feedback />
        </>
    );
};

export default Home;
