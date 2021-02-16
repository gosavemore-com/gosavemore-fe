import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const TableOrder = ({ tableData }) => {
  const { address, city, state, country, postal } = useSelector(
    (state) => state.orders.shipping
  );

  const { cartPrice, shippingPrice, taxPrice, totalPrice } = useSelector(
    (state) => state.orders.prices
  );

  const { paymentMethod } = useSelector((state) => state.orders.payments);

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
  return (
    <div className="tableorders">
      <div className="tableorders-container">
        <h3>Order Items</h3>

        <Table columns={columns} dataSource={tableData} />
      </div>

      <div className="tableorders-container right">
        <>
          <h3>Shipping Address:</h3>
          <p className="tableorders-subtext">
            {" " + address}, {city}. {state}, {postal}, {country}
          </p>
        </>
        <>
          <h3>Payment Method</h3>
          <p className="tableorders-subtext">
            {paymentMethod[0].toUpperCase() +
              paymentMethod.slice(1, paymentMethod.length)}
          </p>
        </>
        <>
          <h3>Price Details</h3>
          <p>
            Pretax Price: <span>${cartPrice}</span> <br />
            Shipping Cost: <span>${shippingPrice}</span> <br />
            Tax Price: <span>${taxPrice}</span>
          </p>

          <h2>Total Price: ${totalPrice}</h2>
        </>
      </div>
    </div>
  );
};

export default TableOrder;
