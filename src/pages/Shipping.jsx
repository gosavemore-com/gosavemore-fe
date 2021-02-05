import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Form, Input, Select, Button, Table, Tag, Space } from "antd";
import { states } from "../util/data";
import { useDispatch } from "react-redux";
import { saveAddress } from "../redux/actions/orderAction";
import { useHistory } from "react-router-dom";

const Shipping = () => {
  const [tableData, setTableData] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const { totalPrice, shippingPrice, taxPrice } = useSelector(
    (state) => state.orders.prices
  );
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
  }, [totalPrice, shippingPrice, taxPrice, cartItems]);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const onFinish = (values) => {
    dispatch(saveAddress(values));
    history.push("/payment");
  };

  console.log("this is the table", tableData);

  return (
    <>
      <div className="orders">
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
        <div className="orders-list">
          <div className="orders-list-products">
            <h3>Orders</h3>
            <Table columns={columns} dataSource={tableData} />
          </div>

          <div className="orders-list-pricing">
            <h3>
              Shipping Cost: <span>${shippingPrice}</span>
            </h3>

            <h3>
              Tax Price: <span>${taxPrice}</span>
            </h3>

            <h2>Total Price: ${totalPrice}</h2>
          </div>
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
