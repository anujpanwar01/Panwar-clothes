import React from "react";
import "./Menu-item.scss";
const MenuItem = function ({ title, image ,size }) {
  console.log(image);
  //same props.title ={title} => destructuring
  return (
    <div
      style={{ backgroundImage: `url(${image})`, objectFit: "cover" }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">helo</span>
      </div>
    </div>
  );
};
export default MenuItem;
