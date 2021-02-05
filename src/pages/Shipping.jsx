import React from "react";
import { useSelector } from "react-redux";
import { Card, Form, Input, Select, Button } from "antd";
import { states } from "../util/data";
import { useDispatch } from "react-redux";
import { saveAddress } from "../redux/actions/orderAction";
import { useHistory } from "react-router-dom";

const Shipping = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { totalPrice, shippingPrice, taxPrice } = useSelector(
    (state) => state.orders.prices[0]
  );
  const dispatch = useDispatch();

  const history = useHistory();
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    dispatch(saveAddress(values));
    history.push("/payment");
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
          <h3>Shipping Cost</h3>
          <p>${shippingPrice}</p>
          <h3>Tax Price</h3>
          <p>${taxPrice}</p>
          <h3>Total Price</h3>
          <p>${totalPrice}</p>
        </div>

        <div className="orders-delivery">
          <h3>Delivery Address</h3>
          <Form
            {...layout}
            name="delivery"
            className="orders-delivery-form"
            onFinish={onFinish}
          >
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
            <Form.Item label="State" name="state" required>
              <Select>
                {Object.keys(states).map((state) => (
                  <Select.Option value={state}>{states[state]}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Postal"
              name="postal"
              rules={[
                {
                  required: true,
                  message: "Postal",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Country" name="country" required>
              <Select>
                <Select.Option value={"US"}>United States</Select.Option>
              </Select>
            </Form.Item>
            <Button type="primary" className="orders-submit" htmlType="submit">
              Use this address
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Shipping;

// address: { type: String, required: true },
// city: { type: String, required: true },
// postalCode: { type: String, required: true },
// country: { type: String, required: true },

// paymentMethod: type: String,
/*
paymentResult: {
  id: { type: String },
  status: { type: String },
  update_time: { type: String },
  email_address: { type: String },
},
*/
// taxPrice: type: Number, default: 0.0,
// shippingPrice: type: Number, default: 0.0
// totalPrice: Number, default 0.0
// isPaid: Boolean default: false,
// paidAt: Date,

// isDelivered: Boolean,
// deliveredAt: DATE
