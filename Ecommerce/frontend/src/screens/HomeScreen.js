import React, { useEffect } from "react"
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Paginate from "../components/Paginate"

import Meta from "../components/Meta"
import { listProducts } from "../actions/productActions"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  if (userInfo && userInfo.isAdmin) {
    return <Redirect to="/admin/productlist" />
  }
  return (
    <>
      <Meta />
      {keyword && (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1 className="mt-5 text-center">
        <span className=" border-danger mr-3 px-3 text-warning">Shop Now</span>
      </h1>
      <hr />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div
          className="d-flex align-items-center"
          style={{ flexDirection: "column" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((product) => (
              <Col key={product._id} sm={24} md={12} lg={8} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </div>
          <div>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default HomeScreen
