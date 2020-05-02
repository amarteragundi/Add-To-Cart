import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions";
import { fetchProductsSelector } from "../selectors/productSelector";

// import utils
import { filterProductsBySearch, sortProducts, fiterByPrice } from "../utils";

const ProductList = ({
  productList = [],
  searchTerm,
  addToCart,
  sortType,
  priceRange
}) => {
  const priceFiltered = fiterByPrice(productList, priceRange);
  const sortedProductList = sortProducts(priceFiltered, sortType);
  const productsToShow =
    searchTerm.length > 0
      ? filterProductsBySearch(sortedProductList, searchTerm)
      : sortedProductList;
  return (
    <>
      <div>
        <div className="productList">
          {productsToShow?.length > 0 ? (
            productsToShow.map((product, i) => (
              <div className="productList__Item" key={i}>
                <img src={product.image} alt="test" />
                <div className="productList__Title">{product.name}</div>
                <div className="productList__Price">
                  <b>&#x20B9;{product.price.actual}</b>{" "}
                  <span className="productList__Price productList__Price--display">
                    {product.price.display}
                  </span>
                  <span className="productList__Price productList__Price--discount">
                    <b>{product.discount}% off</b>
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => addToCart(product)}
                    className="productList__button ">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="productList__noproducts">
              No Products to display
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    productList: fetchProductsSelector(state),
    searchTerm: state.searchTerm,
    sortType: state.sort,
    priceRange: state.priceRange
  };
};

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
