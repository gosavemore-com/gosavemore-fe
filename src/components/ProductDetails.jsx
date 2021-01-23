import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductId } from "../redux/actions/productsAction";
import ImageSlider from "./ImageSlider";
import { Button } from "antd";

const ProductDetails = (props) => {
  let id = props.match.params.id;

  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductId(id));
  }, [dispatch]);
  return (
    <div className="details">
      <ImageSlider key={item._id} images={item.image} />

      <div className="details-description">
        <h2>{item.name}</h2>
        <h3>Price: ${item.price}</h3>
        <p>Brand: {item.brand}</p>
        <p>Description: {item.description}</p>
        <Button type="primary">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
