import React from "react";
import { connect } from "react-redux";

import { setSort } from "../actions";
import { fetchProductsSelector } from "../selectors/productSelector";
import { LOW_TO_HIGH, HIGH_TO_LOW, SORT_BY_DISCOUNT } from "../consts";

const SortBar = ({ setSort, sortType }) => {
  return (
    <>
      <div className="sortBar">
        <b className="sortTitle">Sort By </b>
        <span
          onClick={() => setSort(HIGH_TO_LOW)}
          className={sortType === HIGH_TO_LOW ? "active" : ""}>
          Price -- High Low
        </span>
        <span
          onClick={() => setSort(LOW_TO_HIGH)}
          className={sortType === LOW_TO_HIGH ? "active" : ""}>
          Price -- Low High
        </span>
        <span
          onClick={() => setSort(SORT_BY_DISCOUNT)}
          className={sortType === SORT_BY_DISCOUNT ? "active" : ""}>
          Discount
        </span>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    productList: fetchProductsSelector(state),
    searchTerm: state.searchTerm,
    sortType: state.sort
  };
};

const mapDispatchToProps = {
  setSort
};

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);
