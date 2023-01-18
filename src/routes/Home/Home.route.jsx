import React from "react";

import bakedSushiSrc from "../../assets/images/baked-sushi.jpg";
import scallopsSrc from "../../assets/images/scallops.jpg";

import "./Home.styles.scss";

const Home = () => {
    return (
        <>
            <section className="section-px">
                <div className="hero">
                    <div className="upper">
                        <div className="hero__title">Best Food</div>
                        <img src={scallopsSrc} alt="Scallops" />
                    </div>

                    <div className="lower">
                        <img src={bakedSushiSrc} alt="Baked Sushi" />
                        <div className="hero__title">
                            <div className="lower__connector">for</div>

                            <div className="hero__sub-title">Your Taste</div>
                        </div>
                    </div>
                </div>

                <div className="hero__cta">
                    <div className="texts">
                        <h2>Authentic taste at its finest.</h2>
                        <p className="section-paragraph">
                            Satisfy your cravings with our mouth-watering, expertly crafted dishes.
                        </p>
                    </div>

                    <a href="#" className="btn">
                        Order Now
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
