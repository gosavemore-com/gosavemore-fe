import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductId } from "../redux/actions/productsAction";
import ImageSlider from "./ImageSlider";

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
      <h3>{item.name}</h3>
      <h3>Price: ${item.price}</h3>
      <p>Brand: {item.brand}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};

export default ProductDetails;
