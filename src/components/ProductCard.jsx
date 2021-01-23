import React from "react";
import { Carousel, Image } from "antd";

const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <Carousel>
        <Image src={item.image[0]} className="card-image" />
      </Carousel>
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
    </div>
  );
};

export default ProductCard;
