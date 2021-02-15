import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { Button, Radio } from "antd";
import { savePaymentDetails } from "../redux/actions/orderAction";

const Payment = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
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

      <div>
        <h3>Payment Choices</h3>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="paypal">Paypal</Radio>
          <Radio value="stripe">Stripe </Radio>}
        </Radio.Group>
      </div>
      <Button
        type="primary"
        className="orders-back"
        onClick={() => history.push("/shipping")}
      >
        Back
      </Button>
      <Button type="primary" className="orders-next" onClick={handleSubmit}>
        Continue
      </Button>
    </>
  );
};

export default Payment;
