import React from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  sortLowToHigh,
  sortHighToLow,
  sortByDiscount,
  addToCart
} from "../actions";
import { fetchProductsSelector } from "../selectors/productSelector";

// import utils
import { filterProductsBySearch } from "../utils";

const HomePage = ({
  productList = [],
  sortLowToHigh,
  sortHighToLow,
  sortByDiscount,
  searchTerm,
  addToCart
}) => {
  const productsToShow =
    searchTerm.length > 0
      ? filterProductsBySearch(productList, searchTerm)
      : productList;

  return (
    <>
      <div>
        <b>Sort By </b>
        <span onClick={() => sortLowToHigh()}>low to high</span>{" "}
        <span onClick={() => sortHighToLow()}>high to low</span>{" "}
        <span onClick={() => sortByDiscount()}>Discount</span>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            width: "100%"
            // justifyContent: "center",
            // alignItems: "center"
          }}>
          {productsToShow?.length > 0 ? (
            productsToShow.map((product, i) => (
              <div
                style={{
                  width: "25%"
                }}>
                <img
                  src={product.image}
                  style={{ maxHeight: "200px" }}
                  alt="test"
                />
                <div>
                  <b>{product.name}</b>
                </div>
                <div>
                  <b>&#x20B9;{product.price.actual}</b>{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    {product.price.display}
                  </span>{" "}
                  <span style={{ color: "#53ae38" }}>
                    <b>{product.discount}% off</b>
                  </span>
                </div>
                <div>
                  <button onClick={() => addToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No Products to display</div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    productList: fetchProductsSelector(state),
    searchTerm: state.searchTerm
  };
};

const mapDispatchToProps = {
  fetchProducts,
  sortLowToHigh,
  sortHighToLow,
  sortByDiscount,
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
