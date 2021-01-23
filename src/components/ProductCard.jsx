import React from "react";
import { Button, Card } from "antd";

const ProductCard = ({ product }) => {
  const { Meta } = Card;
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={product.image[0]} />}
        actions={[<Button type="primary">Add to Cart</Button>]}
      >
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Card>
    </>
  );
};

export default ProductCard;
