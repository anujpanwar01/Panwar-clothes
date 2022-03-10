// import userEvent from "@testing-library/user-event";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu-item.scss";

const MenuItem = function ({ title, imageUrl: image, size, linkUrl }) {
  //same props.title ={title} => destructuring
  const navigate = useNavigate();

  //go to previous and next page using useNavigate with separate callback
  const handleClick = function () {
    navigate(linkUrl);
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="content">
        {/* <Link to={title}>hello</Link> */}
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
