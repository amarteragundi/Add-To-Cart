import React from "react";

//components
import SortBar from "../components/Sort";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

// css
import "./css/homepage.scss";

const HomePage = () => {
  return (
    <>
      <div className="sidebar">
        <h3>Filters</h3>
        <Slider
          defaultValue={[8000, 100000]}
          valueLabelDisplay="auto"
          step={10}
          min={8000}
          max={100000}
          style={{ width: "80%", margin: "20px" }}
        />
      </div>
      <div className="wrapper">
        <SortBar />
        <div className="productlist">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
