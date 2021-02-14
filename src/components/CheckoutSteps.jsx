import React from "react";
import { Steps, Divider } from "antd";
import { Link } from "react-router-dom";
import { FaUserCircle, FaRegAddressCard, FaCheckCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { Step } = Steps;

  return (
    <div className="steps">
      <Steps>
        <Step status={step1} title="Login" icon={<FaUserCircle />} />
        <Step
          status={step2}
          title="Shipping Address"
          icon={<FaRegAddressCard />}
        />
        <Step status={step3} title="Pay" icon={<MdPayment />} />
        <Step status={step4} title="Done" icon={<FaCheckCircle />} />
      </Steps>
      ,
    </div>
  );
};

export default CheckoutSteps;
