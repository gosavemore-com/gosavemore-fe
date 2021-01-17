import React from "react";

const Product = ({ item }) => {
  return (
    <div>
      <div className="product">
        <div className="product-image">
          <img src={item.image} alt="product" />
        </div>
        <div className="product-details">
          <h3>{item.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
