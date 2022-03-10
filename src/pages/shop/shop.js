import React from "react";
import shopData from "../../all data/shop.data";
import CollectionPreview from "../../components/preview-collection/PreviewCollection";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}
export default ShopPage;
