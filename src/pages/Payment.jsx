import React from "react";
import { useSelector } from "react-redux";
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
    <div>
      <h3>Billing Details</h3>
      <TableOrder tableData={tableData} prices={prices} location={location} />
    </div>
  );
};

export default Payment;
