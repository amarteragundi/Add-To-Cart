import React from "react";
import { connect } from "react-redux";

// actions
import { searchProduct } from "../actions";

// css
import "../containers/css/menu.scss";

//const
import { HOMEPAGE } from "../consts";

const Search = ({ searchProduct, selectedPage }) => {
  return selectedPage === HOMEPAGE ? (
    <input
      type="text"
      placeholder="Search..."
      className="menu--search"
      onChange={e => searchProduct(e.target.value)}
    />
  ) : null;
};

const mapStateToProps = state => {
  return {
    selectedPage: state.selectedPage
  };
};

const mapDispatchtoProps = {
  searchProduct
};

export default connect(mapStateToProps, mapDispatchtoProps)(Search);
