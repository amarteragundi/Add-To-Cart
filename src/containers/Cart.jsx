import React from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  modifyQuantity,
  increaseQuantity,
  decreaseQuantity
} from "../actions";
import {
  calculateTotal,
  calculateTotalDiscount,
  calculateTotalDisplay,
  calculateTotalItem
} from "../utils";

import "./css/cart.scss";
import FontAwesome from "react-fontawesome";

const Cart = ({
  cartItems,
  removeFromCart,
  modifyQuantity,
  increaseQuantity,
  decreaseQuantity
}) => {
  return (
    <>
      <div className="cart">
        {cartItems?.length > 0
          ? cartItems
              .sort((a, b) => (a.index < b.index ? -1 : 1))
              .map(item => (
                <>
                  <div className="cartitem">
                    <img
                      src={item.image}
                      style={{ maxHeight: "200px" }}
                      alt="test"
                    />
                    <div className="cartitem__title">{item.name}</div>
                    <div className="cartitem__details">
                      <div className="cartitem__Price">
                        <b style={{ float: "left" }}>
                          &#x20B9;{item.price.actual}
                        </b>
                        <span className="cartitem__Price--display">
                          {item.price.display}
                        </span>
                        <span className="cartitem__Price--discount">
                          <b>{item.discount}% off</b>
                        </span>
                      </div>
                      <div className="cartitem__qty">
                        <FontAwesome
                          className="cartitem__qty__icon cartitem__qty__icon--minus"
                          name="minus-circle"
                          style={{ color: "#000" }}
                          onClick={e =>
                            decreaseQuantity(item.name, item.quantity)
                          }
                        />
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={e =>
                            modifyQuantity(item.name, Number(e.target.value))
                          }
                        />
                        <FontAwesome
                          className="cartitem__qty__icon cartitem__qty__icon--plus"
                          name="plus-circle"
                          style={{ color: "#000" }}
                          onClick={e =>
                            increaseQuantity(item.name, item.quantity)
                          }
                        />
                      </div>

                      <div className="cartitem__remove">
                        <span onClick={() => removeFromCart(item.name)}>
                          REMOVE
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ))
          : "No items in cart"}
      </div>
      <div className="cartprice">
        {cartItems?.length > 0 ? (
          <div>
            Price({calculateTotalItem(cartItems)} Item(s)) ={" "}
            {calculateTotalDisplay(cartItems)}
            <br />
            Discount = {calculateTotalDiscount(cartItems)}
            <br />
            Total = {calculateTotal(cartItems)}
          </div>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart
  };
};

const mapDispatchToProps = {
  removeFromCart,
  modifyQuantity,
  increaseQuantity,
  decreaseQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
