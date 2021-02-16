import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Form, Input, Select, Button, Table } from "antd";
import { states } from "../util/data";
import { useDispatch } from "react-redux";
import { saveAddress } from "../redux/actions/orderAction";
import { useHistory } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const Shipping = () => {
  const [tableData, setTableData] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const { prices } = useSelector((state) => state.orders);
  const { shipping } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    cartItems.map((item) =>
      setTableData((data) =>
        data.concat({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })
      )
    );
  }, [cartItems]);

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
      <CheckoutSteps step1="process" step2="wait" step3="wait" step4="wait" />
      <div className="shipping">
        <div className="shipping-delivery">
          <h3>Delivery Address</h3>
          <Form
            {...layout}
            name="delivery"
            className="shipping-delivery-form"
            initialValues={{
              address: shipping && shipping.address,
              city: shipping && shipping.city,
              postal: shipping && shipping.postal,
              state: shipping && shipping.state,
              country: shipping && shipping.country,
            }}
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
              <Input className="shipping-delivery-form-input" />
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
              <Input className="shipping-delivery-form-input" />
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
            <Button
              type="primary"
              className="shipping-submit"
              htmlType="submit"
            >
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
