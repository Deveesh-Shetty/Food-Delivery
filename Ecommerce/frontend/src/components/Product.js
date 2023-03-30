import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Rating from "./Rating"

const Product = ({ product }) => {
  return (
    <div
      className="my-3 p-3 rounded shadow"
      style={{ display: "grid", backgroundColor: "white" }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ height: "20rem", objectFit: "cover" }}
        />
      </Link>
      <hr />
      <Card.Body
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong
              style={{
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              {product.name}
            </strong>
          </Card.Title>
        </Link>

        <div>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">Rs {product.price}</Card.Text>
        </div>
      </Card.Body>
    </div>
  )
}

export default Product
