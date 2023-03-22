import React, { useState } from "react"

import { MdOutlineAdd } from "react-icons/md"
import { HiOutlineMinusSm, HiOutlineShoppingCart } from "react-icons/hi"
import { BiTime } from "react-icons/bi"
import { AiOutlineStock, AiFillStar } from "react-icons/ai"

import { useCartContext } from "../../context/CartContext"

import ProductImgSlider from "../ProductImgSlider/ProductImgSlider.component"

import "./Product.styles.scss"
import AddOn from "../AddOn/AddOn.component"

const freeNori = {
  solo: 1,
  double: 2,
  party: 4,
}

const Product = (props) => {
  const { cart, onCartUpdate } = useCartContext()

  const { productId, name, photos, prices, description } = props

  // order details that will be added to cart

  const [selectedSize, setSelectedSize] = useState("solo")
  const [quantity, setQuantity] = useState(1)

  const [addOns, setAddOns] = useState([])

  const addOnsChangeHandler = ({ type, item }) => {
    if (type === "add") {
      const existingAddOnIndex = addOns.findIndex(
        (addOn) => addOn.id === item.id
      )

      // add new add-on
      if (existingAddOnIndex < 0) {
        setAddOns((prevState) => [item, ...prevState])
      } else {
        // update add-on
        setAddOns((prevState) => {
          return prevState.map((addOn) => {
            if (addOn.id === item.id) {
              return item
            }

            return addOn
          })
        })
      }
    } else if (type === "remove") {
      setAddOns((prevState) =>
        prevState.filter((addOn) => addOn.id !== item.id)
      )
    }
  }

  const addOnsTotal = addOns?.reduce((sum, item) => sum + item.totalPrice, 0)
  // item total (based on size)
  const total = prices[selectedSize] * quantity

  const orderTotal = addOnsTotal + total

  const order = {
    productId,
    name,
    quantity,
    selectedSize,
    photos,
    total: orderTotal,
    freebies: [{ name: "nori", quantity: freeNori[selectedSize] }],
    addOns,
  }

  const sizeChangeHandler = (e) => {
    setSelectedSize(e.target.value)
  }

  const quantityChangeHandler = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "")
    setQuantity(inputValue)
  }
  const quantityOnBlurHandler = (e) => {
    let inputValue = e.target.value
    inputValue = !inputValue ? 1 : inputValue
    setQuantity(+inputValue)
  }

  const quantityButtonClickHandler = (type) => {
    setQuantity((prevState) => {
      let value = prevState

      if (type === "add") {
        return value + 1
      }

      value = prevState - 1

      return value <= 0 ? 1 : value
    })
  }

  const cartAddItemHandler = () => {
    onCartUpdate(order)
  }

  return (
    <div className="product">
      <div className="product__photo">
        {photos.length > 0 && <ProductImgSlider photos={photos || []} />}
      </div>
      <div className="details">
        <div className="tags">
          <div className="tag">#bestseller</div>
          <div className="tag">#mostliked</div>
        </div>

        <div className="line"></div>

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

        <div className="total">
          Rs.
          <span className="total__value">
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
            <div>
              <label htmlFor="solo">
                <span className="highlight">Solo</span> (6x4x1") Good for 1-2
                persons
              </label>
              <div className="free">
                {freeNori["solo"]} <span className="highlight">FREE</span> Nori
              </div>
            </div>
          </div>
          <div className="group">
            <input
              onChange={sizeChangeHandler}
              type="radio"
              name="size"
              value="double"
              id="double"
            />

            <div>
              <label htmlFor="double">
                <span className="highlight">Double</span> (8x8x1") Good for 3-6
                persons
              </label>
              <div className="free">
                {freeNori["double"]} <span className="highlight">FREE</span>{" "}
                Nori
              </div>
            </div>
          </div>
          <div className="group">
            <input
              onChange={sizeChangeHandler}
              type="radio"
              name="size"
              value="party"
              id="party"
            />
            <div>
              <label htmlFor="party">
                {" "}
                <span className="highlight">Party</span> (13x10x1") Good for
                7-10 persons
              </label>

              <div className="free">
                {freeNori["party"]} <span className="highlight">FREE</span> Nori
              </div>
            </div>
          </div>
        </div>

        <div className="quantity-container">
          <h3>Quantity </h3>
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

        <div className="add-ons">
          <h3>Add-ons</h3>
          <div className="list">
            <AddOn
              name="nori"
              price={30}
              onAddOnsChange={addOnsChangeHandler}
            />
            <AddOn
              name="spicy"
              price={10}
              onAddOnsChange={addOnsChangeHandler}
            />
            <AddOn
              name="nata"
              price={10}
              onAddOnsChange={addOnsChangeHandler}
            />
            <AddOn
              name="pearl"
              price={10}
              onAddOnsChange={addOnsChangeHandler}
            />
            <AddOn
              name="creampuff"
              price={10}
              onAddOnsChange={addOnsChangeHandler}
            />
          </div>
        </div>

        <div className="order-total">
          <h3> Total</h3>
          <div className="value">
            Rs.{" "}
            {orderTotal.toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>

        <div className="actions">
          <button
            className="add-to-cart btn"
            onClick={() => cartAddItemHandler()}
          >
            <span>Add to Cart</span>
            <HiOutlineShoppingCart />
          </button>

          <button className="btn btn__filled">
            <span>Check Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
