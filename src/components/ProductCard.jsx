import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <Link to={`/product/${product._id}`}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={product.image[0]} />}
        >
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>the value{product.rating}</p>
          <Ratings value={product.rating} />
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
