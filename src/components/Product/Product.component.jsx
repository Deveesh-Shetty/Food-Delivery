import React, { useState } from "react";

import "./Product.styles.scss";

import { MdOutlineAdd } from "react-icons/md";
import { HiOutlineMinusSm } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { AiOutlineStock, AiFillStar } from "react-icons/ai";

const Product = props => {
    const { productId, name, photo, prices, description } = props;

    const [quantity, setQuantity] = useState(1);

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
        console.log(type);
        setQuantity(prevState => {
            let value = prevState;

            if (type === "add") {
                return value + 1;
            }

            value = prevState - 1;

            return value <= 0 ? 1 : value;
        });
    };

    // prices: [
    //     { size: "Solo", cost: 278 },
    //     { size: "Double", cost: 578 },
    //     { size: "Party", cost: 1228 },
    // ],

    const [selectedValue, setSelectedValue] = useState();

    const handleChange = e => setSelectedValue(e.target.value);

    return (
        <div className="product">
            <div className="product__photo">
                <img src={photo} alt={name} />
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
                    ₱<span className="price__value">5,999</span>
                </div>

                <div className="size">
                    <div className="group">
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="size"
                            value="Solo"
                            id="solo"
                            readOnly
                        />
                        <label htmlFor="solo">
                            <span className="highlight">Solo</span> (6x4x1") Good for 1-2 persons
                        </label>
                    </div>
                    <div className="group">
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="size"
                            value="Double"
                            id="double"
                        />
                        <label htmlFor="double">
                            <span className="highlight">Double</span> (8x8x1") Good for 3-6 persons
                        </label>
                    </div>
                    <div className="group">
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="size"
                            value="Party"
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
            </div>
        </div>
    );
};

export default Product;
