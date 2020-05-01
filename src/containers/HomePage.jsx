import React from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  sortLowToHigh,
  sortHighToLow,
  sortByDiscount
} from "../actions";
import { fetchProductsSelector } from "../selectors/productSelector";

const HomePage = ({
  productList = [],
  sortLowToHigh,
  sortHighToLow,
  sortByDiscount
}) => {
  debugger;
  return (
    <>
      <div>
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
          }}>
          {productList.length > 0
            ? productList.map((product, i) => (
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
                    &#x20B9;{product.price.actual}{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {product.price.display}
                    </span>{" "}
                    {product.discount}% off
                  </div>
                  <div>
                    <button>Add To Cart</button>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    productList: fetchProductsSelector(state)
  };
};

const mapDispatchToProps = {
  fetchProducts,
  sortLowToHigh,
  sortHighToLow,
  sortByDiscount
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
