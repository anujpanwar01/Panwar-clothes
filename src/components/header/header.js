import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firbase.utilites";
import CartIcon from "../cart-icon/card-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.scss";

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assests/panwar.svg";

const Header = function ({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to={"/"}>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option " to="/shop">
          SHOP
        </Link>
        <Link className="option " to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to={"/signin"}>
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  //state=root-reducer // user=userReducer //user-reducer=INITIAL_STATE
  //root-reducer.user.currentUser
});
export default connect(mapStateToProps)(Header);
//connect higher order componnent means that take component as arguments
