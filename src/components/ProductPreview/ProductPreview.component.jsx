import React from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

import "./ProductPreview.styles.scss";

const ProductPreview = ({ product, onProductSelect }) => {
    let { productId, name, photos, prices, description } = product;
    const productPath = name.toLowerCase().split(" ").join("_");

    description =
        description.split(" ").length > 8
            ? description.split(" ").slice(0, 8).join(" ") + " ..."
            : description;

    return (
        <Link
            onClick={onProductSelect.bind(null, product)}
            to={productPath}
            key={productId}
            className="product-preview"
        >
            <div className="photo">
                <img src={photos[0]} alt={name} />
            </div>
            <div className="details">
                <div className="details__price">₱ 15.99</div>
                <h2 className="details__name">{name}</h2>
                <p className="details__desc">{description}</p>
                <div className="details__link">
                    <span>Order Now</span>
                    <BsArrowRight />
                </div>
            </div>
        </Link>
    );
};

export default ProductPreview;
