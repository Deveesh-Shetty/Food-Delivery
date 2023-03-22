import React from "react"
import { useCartContext } from "../../context/CartContext"

import "./Cart.styles.scss"

const Cart = () => {
  const { cart } = useCartContext()
  console.log(cart)

  return (
    <section id="cart">
      <div className="cart section-px section-py">
        {cart.map((item) => {
          const { productId, name, quantity, selectedSize, total, photos } =
            item

          return (
            <div key={productId} className="cart">
              <img src={photos[0]} alt={name} />
              <div>
                <h1>Item: {name}</h1>
                <div className="cart-specs">
                  <p>Size: {selectedSize}</p>
                  <p>Quantity: {quantity}</p>
                  <p>Total: {total}</p>
                </div>
              </div>
              <br />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Cart
