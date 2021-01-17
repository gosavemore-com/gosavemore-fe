import React from "react";

const Product = ({ item }) => {
  return (
    <>
      <div className="product">
        <div className="product-image">
          <img src={item.image} alt="product" />
        </div>
        <div className="product-details">
          <h5>{item.name}</h5>
        </div>
      </div>
    </>
  );
};

export default Product;
