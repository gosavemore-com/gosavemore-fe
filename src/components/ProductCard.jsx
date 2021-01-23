import React from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={product.image[0]} />}
        actions={[<Button type="primary">Add to Cart</Button>]}
      >
        <Link to={`/product/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p>${product.price}</p>
      </Card>
    </>
  );
};

export default ProductCard;
