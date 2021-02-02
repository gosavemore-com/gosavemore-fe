import React from "react";
import { useSelector } from "react-redux";
import { Card, Form, Input, Select } from "antd";
import { states } from "../util/data";

const Orders = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <>
      <div className="orders">
        <div className="orders-list">
          <h3>Orders</h3>
          {cartItems.map((item) => (
            <>
              <Card type="inner" title={item.name} className="orders-item">
                <span className="orders-price">Price: ${item.price}</span>
                <span className="orders-quantity">
                  Quantity: {item.quantity}
                </span>
              </Card>
            </>
          ))}
        </div>

        <div className="orders-delivery">
          <h3>Delivery Address</h3>
          <Form {...layout} name="delivery" className="orders-delivery-form">
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Address!",
                },
              ]}
            >
              <Input className="orders-delivery-form-input" />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: "City",
                },
              ]}
            >
              <Input className="orders-delivery-form-input" />
            </Form.Item>
            <Form.Item label="State">
              <Select className="orders-delivery-form-select">
                {Object.keys(states).map((state, i) => (
                  <Select.Option value={state}>{states[state]}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Postal Code"
              name="postal"
              rules={[
                {
                  required: true,
                  message: "Postal",
                },
              ]}
            >
              <Input className="orders-delivery-form-input" />
            </Form.Item>
            <Form.Item label="Country">
              <Select className="orders-delivery-form-select">
                <Select.Option value={"US"}>United States</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Orders;

// address: { type: String, required: true },
// city: { type: String, required: true },
// postalCode: { type: String, required: true },
// country: { type: String, required: true },
