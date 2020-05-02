import React from "react";
import { connect } from "react-redux";
import "./App.scss";

//constants
import { HOMEPAGE, CART } from "./consts";

//containers
import HomePage from "./containers/HomePage";
import Cart from "./containers/Cart";

// actions
import { searchProduct, switchPage } from "./actions";
import logo from "./logo.svg";
const App = ({ selectedPage, searchProduct, switchPage }) => {
  return (
    <>
      <div className="menu">
        <img
          src={logo}
          className="menu--logo"
          alt="logo"
          onClick={() => switchPage(HOMEPAGE)}
        />
        <input
          type="text"
          placeholder="Search..."
          onChange={e => searchProduct(e.target.value)}
        />
        {selectedPage === HOMEPAGE ? (
          <span onClick={() => switchPage(CART)}>Cart</span>
        ) : null}
      </div>
      {selectedPage === HOMEPAGE ? <HomePage /> : <Cart />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedPage: state.selectedPage
  };
};

const mapDispatchtoProps = {
  searchProduct,
  switchPage
};

export default connect(mapStateToProps, mapDispatchtoProps)(App);
