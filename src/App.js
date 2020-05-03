import React from "react";
import { connect } from "react-redux";
import "./App.scss";

//constants
import { HOMEPAGE } from "./consts";

//components
import RangeSlider from "./components/Slider";
import Sort from "./components/SortMobile";

//containers
import HomePage from "./containers/HomePage";
import Cart from "./containers/Cart";
import Menu from "./containers/Menu";

import "./App.scss";
const App = ({ selectedPage, displayModal }) => {
  return (
    <>
      {displayModal.show ? (
        <div className="modal">
          <div className="modal__content">
            {displayModal.modal === "sort" ? <Sort /> : <RangeSlider />}
          </div>
        </div>
      ) : null}

      <Menu />
      {selectedPage === HOMEPAGE ? (
        <HomePage style={{ marginBottom: "60px" }} />
      ) : (
        <Cart />
      )}
      <div className="footer">&#169; Copyright</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedPage: state.selectedPage,
    displayModal: state.modal
  };
};

export default connect(mapStateToProps)(App);
