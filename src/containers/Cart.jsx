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
        {cartItems?.length > 0 ? (
          cartItems
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
                        onClick={() => {
                          if (item.quantity > 1) {
                            decreaseQuantity(item.name, item.quantity);
                          }
                        }}
                      />
                      <input
                        type="number"
                        value={item.quantity >= 1 ? item.quantity : 1}
                        disabled
                        onChange={e =>
                          item.quantity >= 1
                            ? modifyQuantity(item.name, Number(e.target.value))
                            : modifyQuantity(item.name, Number(1))
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
        ) : (
          <div className="cartitem__noitem">
            Start Shopping!!! There are no items in your cart.
          </div>
        )}
      </div>

      {cartItems?.length > 0 ? (
        <div className="cartprice">
          <div className="cartprice__title">PRICE DETAILS</div>
          <div className="cartprice__details">
            <span>
              Price({calculateTotalItem(cartItems)} Item(s)) : &#x20B9;
              {calculateTotalDisplay(cartItems)}
            </span>
            <span>Discount : &#x20B9;{calculateTotalDiscount(cartItems)}</span>
            <span className="cartprice__total">
              <b>Total Payable</b>: &#x20B9;{calculateTotal(cartItems)}
            </span>
          </div>
        </div>
      ) : null}
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
