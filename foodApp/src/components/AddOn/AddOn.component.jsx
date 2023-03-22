import React, { useState } from "react"

import { v4 as uuidv4 } from "uuid"

import { MdOutlineAdd } from "react-icons/md"
import { HiOutlineMinusSm } from "react-icons/hi"

import "./AddOn.styles.scss"

const AddOn = ({ name, price, onAddOnsChange }) => {
  const [itemID, setItemID] = useState(uuidv4())
  const [quantity, setQuantity] = useState(1)
  const [isChecked, setIsChecked] = useState(false)

  let totalPrice = price * quantity

  const checkChangeHandler = (e) => {
    const isCheckedAddOn = e.target.checked
    setIsChecked(isCheckedAddOn)

    totalPrice = price * quantity

    const item = {
      id: itemID,
      name,
      qty: quantity,
      totalPrice,
    }

    if (isCheckedAddOn) {
      onAddOnsChange({ type: "add", item })
    } else {
      onAddOnsChange({ type: "remove", item })
    }
  }

  const qtyChangeHandler = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "")
    setQuantity(inputValue)

    totalPrice = price * +inputValue

    const item = {
      id: itemID,
      name,
      qty: inputValue,
      totalPrice,
    }

    onAddOnsChange({ type: "add", item })
  }

  const qtyButtonClickHandler = (type) => {
    let value = quantity

    if (type === "add") {
      value = value + 1
    } else {
      value -= 1
      value = value <= 0 ? 1 : value
    }

    setQuantity(value)

    totalPrice = price * value

    const item = {
      id: itemID,
      name,
      qty: value,
      totalPrice,
    }

    onAddOnsChange({ type: "add", item })
  }

  const qtyOnBlurHandler = (e) => {
    let inputValue = e.target.value
    inputValue = !inputValue ? 1 : inputValue
    setQuantity(+inputValue)

    totalPrice = price * inputValue

    const item = {
      id: itemID,
      name,
      qty: inputValue,
      totalPrice,
    }

    onAddOnsChange({ type: "add", item })
  }

  const addOnID = name.split(" ").join("_").toLowerCase()

  return (
    <div className="add-on">
      <div className="item">
        <input
          onChange={checkChangeHandler}
          id={addOnID}
          type="checkbox"
          className="checkbox"
        />
        <label htmlFor={addOnID} className="label">
          <span className="name">{name}</span>
          <span className="price">
            (Rs.{" "}
            {price.toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            )
          </span>
        </label>
      </div>

      {isChecked && (
        <>
          <div className="qty">
            <button
              className="qty__btn qty__minus"
              type="button"
              onClick={() => qtyButtonClickHandler("minus")}
            >
              <HiOutlineMinusSm />
            </button>
            <input
              type="text"
              name="qty"
              value={quantity}
              onChange={qtyChangeHandler}
              onBlur={qtyOnBlurHandler}
              className="qty__value"
            />
            <button
              className="qty__btn qty__add"
              type="button"
              onClick={() => qtyButtonClickHandler("add")}
            >
              <MdOutlineAdd />
            </button>
          </div>

          <div className="total-price">
            Rs.
            {totalPrice.toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default AddOn
