import React from "react";
import { connect } from "react-redux";

// components
import Search from "../components/Search";
import Cart from "../components/Cart";

//constants
import { HOMEPAGE } from "../consts";

// actions
import { switchPage } from "../actions";
import logo from "../logo.svg";

// css
import "./css/menu.scss";

const Menu = ({ switchPage }) => {
  return (
    <>
      <div className="menu">
        <img
          src={logo}
          className="menu--logo"
          alt="logo"
          onClick={() => switchPage(HOMEPAGE)}
        />
        <div className="menu--rightsection">
          <Search />
          <Cart />
        </div>
      </div>
    </>
  );
};

const mapDispatchtoProps = {
  switchPage
};

export default connect(null, mapDispatchtoProps)(Menu);
