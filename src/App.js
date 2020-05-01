import React from "react";
import { connect } from "react-redux";
import "./App.scss";

//constants
import { HOMEPAGE } from "./consts";

//containers
import HomePage from "./containers/HomePage";
import Cart from "./containers/Cart";

import logo from "./logo.svg";
const App = ({ selectedPage }) => {
  return (
    <>
      <div className="menu">
        <img src={logo} className="menu--logo" alt="logo" />
      </div>
      {selectedPage === HOMEPAGE ? <HomePage /> : <Cart />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedPage: state.selectedPage.selectedPage
  };
};

export default connect(mapStateToProps, {})(App);
