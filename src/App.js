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

//actions
import { showModal } from "./actions";

import "./App.scss";
const App = ({ selectedPage, showModal, displayModal }) => {
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
      {selectedPage === HOMEPAGE ? <HomePage /> : <Cart />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedPage: state.selectedPage,
    displayModal: state.modal
  };
};

const mapDispatchToProps = { showModal };

export default connect(mapStateToProps, mapDispatchToProps)(App);
