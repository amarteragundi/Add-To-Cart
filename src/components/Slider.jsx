import React, { useState } from "react";
import { connect } from "react-redux";

import RangeSlider from "@material-ui/core/Slider";

import { filterByPrice } from "../actions";

const Slider = ({ filterByPrice, range }) => {
  const [defaultValue, setDefaultValue] = useState([6000, 100000]);
  const handleChange = (event, newValue) => {
    setDefaultValue(newValue);
  };
  return (
    <>
      <RangeSlider
        defaultValue={defaultValue}
        valueLabelDisplay="auto"
        step={10}
        min={8000}
        max={100000}
        style={{ width: "80%", margin: "20px" }}
        onChange={handleChange}
      />
      <div onClick={() => filterByPrice(defaultValue)}>Submit</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    range: state.priceRange
  };
};
const mapDispatchToProps = {
  filterByPrice
};
export default connect(mapStateToProps, mapDispatchToProps)(Slider);
