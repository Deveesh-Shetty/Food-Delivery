import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

import bakedSushiCateg from "../../assets/images/categories/baked-sushi.jpg";
import pastaCateg from "../../assets/images/categories/pasta.jpg";
import sushiCateg from "../../assets/images/categories/sushi.jpg";
import takoyakiCateg from "../../assets/images/categories/takoyaki.jpg";
import riceBowlCateg from "../../assets/images/categories/rice-bowl.jpg";
import milkTeaCateg from "../../assets/images/categories/milk-tea.jpg";

import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "./Categories.styles.scss";

const CATEGORIES_DATA = [
    {
        id: uuidv4(),
        title: "Baked Sushi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,sit.",
        thumbnail: bakedSushiCateg,
        path: "/menu/baked-sushi",
    },
    {
        id: uuidv4(),
        title: "Rice Bowls",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,sit.",
        thumbnail: riceBowlCateg,
        path: "/menu/rice-bowls",
    },
    {
        id: uuidv4(),
        title: "Sushi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,sit.",
        thumbnail: sushiCateg,
        path: "/menu/sushi",
    },
    {
        id: uuidv4(),
        title: "Takoyaki",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,sit.",
        thumbnail: takoyakiCateg,
        path: "/menu/takoyaki",
    },
    {
        id: uuidv4(),
        title: "Pasta",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,sit.",
        thumbnail: pastaCateg,
        path: "/menu/pasta",
    },
    {
        id: uuidv4(),
        title: "Drinks",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,sit.",
        thumbnail: milkTeaCateg,
        path: "/menu/drinks",
    },
];

const Categories = () => {
    return (
        <section id="categories">
            <div className="categories section-py">
                <div className="heading">
                    <div className="line line--wide line--light"></div>

                    <h2 className="primary-heading">Explore our Menu </h2>
                    <p className="section-paragraph section-paragraph--dark">
                        Indulge in our delicious food options, satisfy your cravings with our
                        mouth-watering menu.
                    </p>
                </div>

                <div className="slides">
                    <Swiper slidesPerView={2} spaceBetween={30}>
                        {CATEGORIES_DATA.map(({ id, title, desc, thumbnail, path }) => (
                            <SwiperSlide key={id}>
                                <a href={path}>
                                    <div className="thumbnail">
                                        <div
                                            className="thumbnail__img"
                                            style={{ backgroundImage: `url(${thumbnail})` }}
                                        ></div>
                                    </div>
                                    <div className="info">
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                        <div className="link">
                                            <span>Browse Menu</span>
                                            <BsArrowRight />
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="actions">
                    <a href="/menu" className="btn btn--light btn--light-filled">
                        View Menu
                    </a>
                    <a href="/menu" className="btn btn--light">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Categories;
