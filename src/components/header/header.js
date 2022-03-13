import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firbase.utilites";
import "./header.scss";
import { ReactComponent as Logo } from "../../assests/panwar.svg";

const Header = function ({ user }) {
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
        {!user ? (
          <Link className="option" to={"/signin"}>
            Sign in
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
