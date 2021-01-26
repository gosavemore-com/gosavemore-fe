import React from "react";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import { Button } from "antd";

const ProductDetails = (props) => {
  let id = props.match.params.id;

  const { items } = useSelector((state) => state.products);

  let product = items.filter((item) => item._id === id);

  product = product[0];

  return (
    <div className="details">
      {
        <>
          <ImageSlider key={product._id} images={product.image} />

          <div className="details-description">
            <h2>{product.name}</h2>
            <h3>Price: ${product.price}</h3>
            <p>Brand: {product.brand}</p>
            <p>Description: {product.description}</p>
            <Button type="primary">Add to Cart</Button>
          </div>
        </>
      }
    </div>
  );
};

export default ProductDetails;
