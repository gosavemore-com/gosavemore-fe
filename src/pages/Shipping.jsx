import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Select, Button, Row, Col } from "antd";
import { states } from "../util/data";
import { useDispatch } from "react-redux";
import { saveAddress } from "../redux/actions/cartAction";
import { useHistory } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const Shipping = () => {
  const { shipping } = useSelector((state) => state.cart);

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
      <CheckoutSteps step1="process" step2="wait" step3="wait" step4="wait" />
      <div className="shipping">
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
          <Row>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="State" name="state" required>
                <Select>
                  {Object.keys(states).map((state, index) => (
                    <Select.Option value={state} key={index}>
                      {states[state]}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Country" name="country" required>
                <Select>
                  <Select.Option value={"US"}>United States</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-around" align="middle">
            <Col>
              <Button
                type="primary"
                className="shipping-submit"
                htmlType="submit"
              >
                Use this address
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Shipping;
