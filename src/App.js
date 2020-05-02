import React from "react";
import { connect } from "react-redux";
import "./App.scss";

//constants
import { HOMEPAGE } from "./consts";

//containers
import HomePage from "./containers/HomePage";
import Cart from "./containers/Cart";
import Menu from "./containers/Menu";

import "./App.scss";
const App = ({ selectedPage }) => {
  return (
    <>
      <Menu />
      {selectedPage === HOMEPAGE ? <HomePage /> : <Cart />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedPage: state.selectedPage
  };
};

export default connect(mapStateToProps)(App);
