import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ProductPreview from "../../components/ProductPreview/ProductPreview.component";

import "./Menu.styles.scss";

const DATA = [
    {
        id: uuidv4(),
        category: "Baked Sushi",
        products: [
            {
                productId: uuidv4(),
                name: "Tuna Kali",
                photo: "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe72e8679015_image-3-menu-restaurantly-template.jpg",
                prices: [
                    { size: "Solo", cost: 278 },
                    { size: "Double", cost: 578 },
                    { size: "Party", cost: 1228 },
                ],
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Kani Aburi",
                photo: "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe2c23679017_image-4-menu-restaurantly-template.jpeg",
                prices: [
                    { size: "Solo", cost: 298 },
                    { size: "Double", cost: 598 },
                    { size: "Party", cost: 1248 },
                ],
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Crispy Bacon",
                photo: "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe77ed679016_image-6-menu-restaurantly-template.jpeg",
                prices: [
                    { size: "Solo", cost: 308 },
                    { size: "Double", cost: 608 },
                    { size: "Party", cost: 1258 },
                ],
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Cheesy Samgyup",
                photo: "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe6257679014_image-2-menu-restaurantly-template.jpeg",
                prices: [
                    { size: "Solo", cost: 328 },
                    { size: "Double", cost: 628 },
                    { size: "Party", cost: 1278 },
                ],
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
    },
    {
        id: uuidv4(),
        category: "Rice Bowls",
    },
    {
        id: uuidv4(),
        category: "Takoyaki",
    },
    {
        id: uuidv4(),
        category: "Sushi",
    },
    {
        id: uuidv4(),
        category: "Pasta",
    },
    {
        id: uuidv4(),
        category: "Milktea",
    },
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(DATA[0]?.id);
    const [products, setProducts] = useState(DATA[0]?.products);

    const changeCategoryHandler = id => setSelectedCategory(id);

    return (
        <section id="menu">
            <div className="menu section-px section-py">
                <div className="section-heading">
                    <div className="line"></div>
                    <h1 className="large-heading">Our Menu</h1>
                    <p className="section-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum
                        molestias tenetur dicta odio placeat!
                    </p>
                </div>

                <div className="options">
                    {DATA?.map(item => {
                        const { id, category } = item;

                        return (
                            <button
                                key={id}
                                className={`options__item ${
                                    selectedCategory === id ? "highlight" : ""
                                }`}
                                onClick={() => changeCategoryHandler(id)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="products">
                    {products?.map(product => (
                        <ProductPreview key={product.productId} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
