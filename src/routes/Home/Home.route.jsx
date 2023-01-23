import React from "react";

import bakedSushiSrc from "../../assets/images/baked-sushi.jpg";
import scallopsSrc from "../../assets/images/scallops.jpg";

import { BsArrowRight, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

import Categories from "../../components/Categories/Categories.component";

import "./Home.styles.scss";

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
                    <img className="large-img" src={scallopsSrc} alt="Scallops Pasta" />

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

                        <div className="divider"></div>

                        <div className="card">
                            <h3>Contact</h3>

                            <div className="details">
                                <div className="details__item">
                                    <span className="label">Call:</span>
                                    <a href="tel:09351523895" className="value">
                                        (+63) 935-1523-895
                                    </a>
                                </div>
                                <div className="details__item">
                                    <span className="label">Email:</span>
                                    <a
                                        href="mailto:kalim.cucinareofficialph@gmail.com"
                                        className="value"
                                    >
                                        kalim.cucinareofficialph@gmail.com
                                    </a>
                                </div>
                                <div className="details__item">
                                    <span className="label">Location:</span>
                                    <span className="value">
                                        525 Jose Abad Santos, Brgy. Salapungan 2009 Angeles City,
                                        Philippines.
                                    </span>
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
        </>
    );
};

export default Home;
