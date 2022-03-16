import React from "react";
import CustomBtn from "../custom-btn/CustomBtn";

import "./cart-dropdown.styles.scss";
const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-itmes"></div>
    <CustomBtn>GO TO CHECKOUT</CustomBtn>
  </div>
);

export default CartDropdown;
