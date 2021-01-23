import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <>
      <Link to={`/product/${item._id}`}>
        <div className="product">
          <div className="product-image">
            <img src={item.image} alt="product" />
          </div>
          <div className="product-details">
            <h5>{item.name}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
