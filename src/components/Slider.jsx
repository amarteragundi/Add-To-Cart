import React, { useState } from "react";
import { connect } from "react-redux";

import RangeSlider from "@material-ui/core/Slider";

import { filterByPrice, showModal } from "../actions";

const Slider = ({ filterByPrice, range, showModal }) => {
  const [defaultValue, setDefaultValue] = useState([range.min, range.max]);
  const handleChange = (event, newValue) => {
    setDefaultValue(newValue);
  };
  const cancleModal = {
    modal: "",
    show: false
  };
  return (
    <>
      <div className="sidebar__sliderLabel">
        &#x20B9;6000
        <span className="float-right">&#x20B9;100000</span>
      </div>
      <RangeSlider
        defaultValue={defaultValue}
        valueLabelDisplay="auto"
        step={10}
        min={6000}
        max={100000}
        style={{ width: "70%", marginLeft: "30px" }}
        onChange={handleChange}
      />
      <div className="sidebar__sliderLabel--bottom">Price</div>
      <div
        onClick={() => filterByPrice(defaultValue)}
        className="sidebar__button">
        Apply
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
            filterByPrice(defaultValue);
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
    range: state.priceRange
  };
};
const mapDispatchToProps = {
  filterByPrice,
  showModal
};
export default connect(mapStateToProps, mapDispatchToProps)(Slider);
