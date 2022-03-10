import React from "react";

import "./CollectionItem.scss";

const CollectionItem = function ({ imageUrl: image, name, price }) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
