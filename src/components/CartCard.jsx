import React from "react";
import { useDispatch } from "react-redux";
import { Select, Form } from "antd";
import { addToCart } from "../redux/actions/cartAction";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const onChangeHandler = (values) => {
    dispatch(addToCart(item.product, values));
  };
  return (
    <div className="cartCard">
      <img src={item.image[0]} alt={item.name} className="cartCard-image" />
      <div className="cartCard-content">
        <h3>Name: {item.name}</h3>
        <p>Price: ${item.price}</p>
        <Form.Item className="cartCard-select">
          <Select defaultValue={item.quantity} onChange={onChangeHandler}>
            {[...Array(item.countInStock).keys()].map((x) => (
              <Select.Option value={x + 1}>{x + 1}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default CartCard;
