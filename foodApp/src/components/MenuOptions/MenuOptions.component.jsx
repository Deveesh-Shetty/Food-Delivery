import React, { useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import Product from "../Product/Product.component";

import ProductPreview from "../ProductPreview/ProductPreview.component";

import "./MenuOptions.styles.scss";

const MenuOptions = ({ options }) => {
    const [selectedCategory, setSelectedCategory] = useState(options[0]);
    // const [products, setProducts] = useState(DATA[0]?.products);
    const products = selectedCategory?.products;

    const changeCategoryHandler = category => {
        setSelectedCategory(category);
    };

    return (
        <div className="menu-options">
            <div className="section-heading">
                <div className="line"></div>
                <h1 className="large-heading">Our Menu</h1>
                <p className="section-paragraph">
                    Elevate your taste buds with our delectable dishes that are sure to please even
                    the most discerning palate. Our menu is carefully curated to offer a wide
                    variety of flavors and textures that will tantalize your senses.
                </p>
            </div>

            <div className="options">
                {options?.map(item => {
                    const { id, category } = item;

                    const categoryPath = category.split(" ").join("_").toLowerCase();

                    return (
                        <Link
                            key={id}
                            to={categoryPath}
                            onClick={() => changeCategoryHandler(item)}
                            className={`options__item ${
                                selectedCategory?.id === id ? "highlight" : ""
                            }`}
                        >
                            {category}
                        </Link>
                    );
                })}
            </div>

            <div className="products">
                {products?.map(product => (
                    <ProductPreview
                        onProductSelect={() => {}}
                        key={product.productId}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuOptions;
