import React from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

import "./ProductPreview.styles.scss";

const ProductPreview = ({ product }) => {
    const { productId, name, photo, prices, description } = product;
    const { size, cost } = prices;

    const productPath = name.toLowerCase().split(" ").join("_");

    return (
        <Link to={productPath} key={productId} className="product-preview">
            <div className="photo">
                <img src={photo} alt={name} />
            </div>
            <div className="product">
                <div className="product__price">₱ 15.99</div>
                <h2 className="product__name">{name}</h2>
                <p className="product__desc">{description}</p>
                <div className="product__link">
                    <span>Order Now</span>
                    <BsArrowRight />
                </div>
            </div>
        </Link>
    );
};

export default ProductPreview;
