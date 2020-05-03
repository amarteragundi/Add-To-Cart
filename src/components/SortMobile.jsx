import React, { useState } from "react";
import { connect } from "react-redux";

import { setSort, showModal } from "../actions";
import { fetchProductsSelector } from "../selectors/productSelector";
import { LOW_TO_HIGH, HIGH_TO_LOW, SORT_BY_DISCOUNT } from "../consts";

const SortBar = ({ setSortState, sortType, showModal }) => {
  const cancleModal = {
    modal: "",
    show: false
  };

  const [sort, setSort] = useState(HIGH_TO_LOW);
  return (
    <>
      <div className="sortBarM">
        <b className="sortTitleM">Sort Options </b>
        {/* <span
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
        </span> */}
        <div className="radioGroup">
          <label htmlFor="high">
            <input
              id="high"
              type="radio"
              name="sort"
              value={HIGH_TO_LOW}
              onClick={() => setSort(HIGH_TO_LOW)}
              checked={sortType === HIGH_TO_LOW || sort === HIGH_TO_LOW}
            />
            Price -- High Low
          </label>

          <label htmlFor="low">
            <input
              id="low"
              type="radio"
              name="sort"
              value={LOW_TO_HIGH}
              onClick={() => setSort(LOW_TO_HIGH)}
              checked={sortType === LOW_TO_HIGH || sort === LOW_TO_HIGH}
            />
            Price -- Low High{" "}
          </label>

          <label htmlFor="discount">
            <input
              id="discount"
              type="radio"
              name="sort"
              value={SORT_BY_DISCOUNT}
              onClick={() => setSort(SORT_BY_DISCOUNT)}
              checked={
                sortType === SORT_BY_DISCOUNT || sort === SORT_BY_DISCOUNT
              }
            />
            Discount
          </label>
        </div>
      </div>
      <div className="modal__button">
        <div
          className="modal__button--cancel"
          onClick={() => showModal(cancleModal)}>
          Cancel
        </div>
        <div
          className="modal__button--apply"
          onClick={() => {
            setSortState(sort);
            showModal(cancleModal);
          }}>
          Apply
        </div>
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
  setSortState: setSort,
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);
