import React from "react";
import { connect } from "react-redux";

import FontAwesome from "react-fontawesome";

//constants
import { HOMEPAGE, CART } from "../consts";

// actions
import { searchProduct, switchPage } from "../actions";

// utils
import { calculateTotalItem } from "../utils";

const Menu = ({ selectedPage, switchPage, cartItems }) => {
  return (
    <>
      {selectedPage === HOMEPAGE ? (
        <div onClick={() => switchPage(CART)} className="fa-stack">
          <div className="maenu--cartBadge">
            {calculateTotalItem(cartItems)}
          </div>
          <FontAwesome
            className=""
            name="shopping-cart"
            size="2x"
            style={{ color: "#fff" }}
          />
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedPage: state.selectedPage,
    cartItems: state.cart
  };
};

const mapDispatchtoProps = {
  searchProduct,
  switchPage
};

export default connect(mapStateToProps, mapDispatchtoProps)(Menu);
