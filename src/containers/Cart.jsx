import React from "react";
import { connect } from "react-redux";
import { removeFromCart, modifyQuantity } from "../actions";
import { calculateTotal } from "../utils";

const Cart = ({ cartItems, removeFromCart, modifyQuantity }) => {
  return (
    <div>
      {cartItems?.length > 0
        ? cartItems
            .sort((a, b) => (a.index < b.index ? -1 : 1))
            .map(item => (
              <>
                <div>
                  <img
                    src={item.image}
                    style={{ maxHeight: "200px" }}
                    alt="test"
                  />
                  {item.name}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={e =>
                      modifyQuantity(item.name, Number(e.target.value))
                    }
                  />
                  <span onClick={() => removeFromCart(item.name)}>Remove</span>
                </div>
                <div>
                  {item.name} * {item.quantity} ={" "}
                  {item.price.actual * item.quantity}
                </div>
              </>
            ))
        : "No items in cart"}
      <br />
      {cartItems?.length > 0 ? `Total = ${calculateTotal(cartItems)}` : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart
  };
};

const mapDispatchToProps = { removeFromCart, modifyQuantity };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
