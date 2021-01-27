import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Form } from "antd";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";
import { AiFillCloseCircle } from "react-icons/ai";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const onChangeHandler = (values) => {
    dispatch(addToCart(item.product, values));
  };
  const onClickHandler = () => {
    dispatch(removeFromCart(item.product));
  };

  return (
    <div className="cartCard">
      <img src={item.image[0]} alt={item.name} className="cartCard-image" />
      <div className="cartCard-content">
        <h3>Name: {item.name}</h3>
        <p>Price: ${item.price}</p>
        <Form.Item className="cartCard-select">
          <Select value={item.quantity} onChange={onChangeHandler}>
            {[...Array(item.countInStock).keys()].map((x) => (
              <Select.Option value={x + 1}>{x + 1}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <AiFillCloseCircle onClick={onClickHandler} className="cartCard-close" />
    </div>
  );
};

export default CartCard;
