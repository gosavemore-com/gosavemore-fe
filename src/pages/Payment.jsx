import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { Button, Radio } from "antd";
import { savePaymentDetails } from "../redux/actions/cartAction";

const Payment = () => {
  const [value, setValue] = useState("paypal");
  const { paymentMethod } = useSelector((state) => state.cart.payments);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (paymentMethod !== undefined) {
      setValue(paymentMethod);
    }
  }, [paymentMethod]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(savePaymentDetails({ paymentMethod: value }));
    history.push("/placeorder");
  };

  return (
    <>
      <CheckoutSteps step1="finish" step2="process" step3="wait" step4="wait" />
      <div className="payment">
        <div className="payment-choices">
          <h3>Payment Choices</h3>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value="paypal">Paypal</Radio>
            <Radio value="stripe">Stripe </Radio>
          </Radio.Group>
        </div>
        <div className="payment-button">
          <Button type="primary" onClick={() => history.push("/shipping")}>
            Back
          </Button>
          <Button type="primary" onClick={handleSubmit}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default Payment;
