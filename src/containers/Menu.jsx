import React from "react";
import { connect } from "react-redux";

//constants
import { HOMEPAGE, CART } from "../consts";

// actions
import { searchProduct, switchPage } from "../actions";
import logo from "../logo.svg";

// css
import "./css/menu.scss";
const Menu = ({ selectedPage, searchProduct, switchPage }) => {
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
          className="menu--search"
          onChange={e => searchProduct(e.target.value)}
        />
        {selectedPage === HOMEPAGE ? (
          <span onClick={() => switchPage(CART)}>Cart</span>
        ) : null}
      </div>
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

export default connect(mapStateToProps, mapDispatchtoProps)(Menu);
