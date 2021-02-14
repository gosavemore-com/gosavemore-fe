import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import TableOrder from "../components/TableOrder";

const Payment = () => {
  const { order, location, prices } = useSelector((state) => state.orders);

  let tableData = [];

  order.map((item) =>
    tableData.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })
  );

  return (
    <>
      <CheckoutSteps
        step1="finish"
        step2="finish"
        step3="process"
        step4="wait"
      />
      <div>
        <TableOrder tableData={tableData} prices={prices} location={location} />
      </div>
      <div>
        <h3>Payment Choices</h3>
      </div>
    </>
  );
};

export default Payment;
