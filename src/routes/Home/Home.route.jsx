import React from "react";

import bakedSushiSrc from "../../assets/images/baked-sushi.jpg";
import scallopsSrc from "../../assets/images/scallops.jpg";

import "./Home.styles.scss";

const Home = () => {
    return (
        <>
            {/* ------------------ HERO ------------------ */}

            <section id="hero" className="">
                <div className="hero">
                    <div className="content">
                        <div className="line"></div>

                        <h1>
                            Authentic taste <br /> at its finest.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ab
                            itaque? Quam libero expedita maxime!
                        </p>

                        <div className="content__actions">
                            <a href="#" className="btn  btn__filled">
                                Shop Now
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
        </>
    );
};

export default Home;
