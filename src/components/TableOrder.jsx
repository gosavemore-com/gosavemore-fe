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
    <div>
      <div className="orders-list-products">
        <h3>Order Items</h3>

        <Table columns={columns} dataSource={tableData} />
      </div>
      <div className="orders-list-pricing">
        <h3>
          Pretax Price: <span>${cartPrice}</span>
        </h3>
        <h3>
          Shipping Cost: <span>${shippingPrice}</span>
        </h3>

        <h3>
          Tax Price: <span>${taxPrice}</span>
        </h3>

        <h2>Total Price: ${totalPrice}</h2>
      </div>
      <div className="orders-list-location">
        <>
          <h2>Shipping</h2>
          <p>
            {address}, {city}. {state}, {postal}, {country}
          </p>
        </>
      </div>
      <div className="orders-list-payment">
        <h2>Payment Method</h2>
        <p>
          {paymentMethod[0].toUpperCase() +
            paymentMethod.slice(1, paymentMethod.length)}
        </p>
      </div>
    </div>
  );
};

export default TableOrder;
