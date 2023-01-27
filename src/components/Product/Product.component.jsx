import React, { useState } from "react";

import { MdOutlineAdd } from "react-icons/md";
import { HiOutlineMinusSm, HiOutlineShoppingCart } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { AiOutlineStock, AiFillStar } from "react-icons/ai";

import { useCartContext } from "../../context/CartContext";

import ProductImgSlider from "../ProductImgSlider/ProductImgSlider.component";

import "./Product.styles.scss";

const Product = props => {
    const { cart, onCartUpdate } = useCartContext();

    const { productId, name, photos, prices, description } = props;

    // order details that will be added to cart

    const [selectedSize, setSelectedSize] = useState("solo");
    const [quantity, setQuantity] = useState(1);

    const total = prices[selectedSize] * quantity;

    const order = {
        productId,
        name,
        quantity,
        selectedSize,
        photos,
        total,
    };

    const sizeChangeHandler = e => {
        setSelectedSize(e.target.value);
    };

    const quantityChangeHandler = e => {
        const inputValue = e.target.value.replace(/[^0-9]/g, "");
        setQuantity(inputValue);
    };
    const quantityOnBlurHandler = e => {
        let inputValue = e.target.value;
        inputValue = !inputValue ? 1 : inputValue;
        setQuantity(+inputValue);
    };

    const quantityButtonClickHandler = type => {
        setQuantity(prevState => {
            let value = prevState;

            if (type === "add") {
                return value + 1;
            }

            value = prevState - 1;

            return value <= 0 ? 1 : value;
        });
    };

    const cartAddItemHandler = () => {
        onCartUpdate(order);
    };

    return (
        <div className="product">
            <div className="product__photo">
                {photos.length > 0 && <ProductImgSlider photos={photos || []} />}
            </div>
            <div className="details">
                <div className="line"></div>

                <div className="tags">
                    <div className="tag">#bestseller</div>
                    <div className="tag">#mostliked</div>
                </div>

                <h2 className="details__name large-heading">{name}</h2>
                <div className="stats">
                    <div className="stat">
                        <AiFillStar />
                        <span className="stat__value">12.4k </span>
                        <span className="stat__label">Ratings</span>
                    </div>

                    <div className="stat">
                        <AiOutlineStock />
                        <span className="stat__value">57 </span>
                        <span className="stat__label">Sold</span>
                    </div>

                    <div className="stat">
                        <BiTime />
                        <span className="stat__value">20-30 mins. </span>
                        <span className="stat__label">Prep time</span>
                    </div>
                </div>
                <p className="details__desc">{description}</p>

                <div className="price">
                    ₱
                    <span className="price__value">
                        {total.toLocaleString("en", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </span>
                </div>

                <div className="size">
                    <div className="group">
                        <input
                            onChange={sizeChangeHandler}
                            type="radio"
                            name="size"
                            value="solo"
                            id="solo"
                            defaultChecked
                        />
                        <label htmlFor="solo">
                            <span className="highlight">Solo</span> (6x4x1") Good for 1-2 persons
                        </label>
                    </div>
                    <div className="group">
                        <input
                            onChange={sizeChangeHandler}
                            type="radio"
                            name="size"
                            value="double"
                            id="double"
                        />
                        <label htmlFor="double">
                            <span className="highlight">Double</span> (8x8x1") Good for 3-6 persons
                        </label>
                    </div>
                    <div className="group">
                        <input
                            onChange={sizeChangeHandler}
                            type="radio"
                            name="size"
                            value="party"
                            id="party"
                        />
                        <label htmlFor="party">
                            {" "}
                            <span className="highlight">Party</span> (13x10x1") Good for 7-10
                            persons
                        </label>
                    </div>
                </div>

                <div className="quantity">
                    <button
                        className="quantity__btn quantity__minus"
                        type="button"
                        onClick={() => quantityButtonClickHandler("minus")}
                    >
                        <HiOutlineMinusSm />
                    </button>
                    <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={quantityChangeHandler}
                        onBlur={quantityOnBlurHandler}
                        className="quantity__value"
                    />
                    <button
                        className="quantity__btn quantity__add"
                        type="button"
                        onClick={() => quantityButtonClickHandler("add")}
                    >
                        <MdOutlineAdd />
                    </button>
                </div>

                <div className="actions">
                    <button className="add-to-cart btn" onClick={() => cartAddItemHandler()}>
                        <span>Add to Cart</span>
                        <HiOutlineShoppingCart />
                    </button>

                    <button className="btn btn__filled">
                        <span>Check Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
