import React from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Product from "../../components/Product/Product.component";
import ProductPreview from "../../components/ProductPreview/ProductPreview.component";

import { BsArrowLeft } from "react-icons/bs";

import "./Menu.styles.scss";

const DATA = [
    {
        id: uuidv4(),
        category: "Baked Sushi",
        products: [
            {
                productId: uuidv4(),
                name: "Tuna Kali",
                photos: [
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe72e8679015_image-3-menu-restaurantly-template.jpg",
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe38b5679012_image-1-menu-restaurantly-template.jpg",
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe2fb667900d_image-7-menu-restaurantly-template.jpeg",
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe6257679014_image-2-menu-restaurantly-template.jpeg",
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe77ed679016_image-6-menu-restaurantly-template.jpeg",
                ],
                prices: {
                    solo: 278,
                    double: 578,
                    party: 1228,
                },
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Kani Aburi",
                photos: [
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe2c23679017_image-4-menu-restaurantly-template.jpeg",
                ],
                prices: {
                    solo: 298,
                    double: 598,
                    party: 1248,
                },
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Crispy Bacon",
                photos: [
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe77ed679016_image-6-menu-restaurantly-template.jpeg",
                ],
                prices: {
                    solo: 308,
                    double: 608,
                    party: 1258,
                },
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Cheesy Samgyup",
                photos: [
                    "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe6257679014_image-2-menu-restaurantly-template.jpeg",
                ],
                prices: {
                    solo: 328,
                    double: 628,
                    party: 1278,
                },

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
    const [selectedCategory, setSelectedCategory] = useState(DATA[0]);
    // const [products, setProducts] = useState(DATA[0]?.products);
    const products = selectedCategory?.products;

    const [selectedProduct, setSelectedProduct] = useState();

    const changeCategoryHandler = category => {
        setSelectedCategory(category);
        setSelectedProduct();
    };

    const productSelectionHandler = product => {
        setSelectedProduct(product);
    };

    return (
        <section id="menu">
            <div className="menu section-px section-py">
                <div className="section-heading">
                    <div className="line"></div>
                    <h1 className="large-heading">Our Menu</h1>
                    <p className="section-paragraph">
                        Elevate your taste buds with our delectable dishes that are sure to please
                        even the most discerning palate. Our menu is carefully curated to offer a
                        wide variety of flavors and textures that will tantalize your senses.
                    </p>
                </div>

                <div className="options">
                    {DATA?.map(item => {
                        const { id, category } = item;

                        return (
                            <button
                                key={id}
                                className={`options__item ${
                                    selectedCategory?.id === id ? "highlight" : ""
                                }`}
                                onClick={() => changeCategoryHandler(item)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {!selectedProduct && (
                    <div className="products">
                        {products?.map(product => (
                            <ProductPreview
                                onProductSelect={productSelectionHandler}
                                key={product.productId}
                                product={product}
                            />
                        ))}
                    </div>
                )}

                {selectedProduct && (
                    <Link
                        to="/menu"
                        className="link link--reversed back-btn"
                        onClick={() => setSelectedProduct()}
                    >
                        <BsArrowLeft />
                        <span>Back</span>
                    </Link>
                )}

                {selectedProduct && <Product {...selectedProduct} />}
            </div>
        </section>
    );
};

export default Menu;
