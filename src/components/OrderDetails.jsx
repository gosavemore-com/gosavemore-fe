import React from "react";
import { Table } from "antd";

const OrderDetails = ({
  tableData,
  address,
  city,
  state,
  postal,
  country,
  cartPrice,
  shippingPrice,
  taxPrice,
  totalPrice,
  paymentMethod,
}) => {
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
        <>
          <h3>Shipping Address:</h3>
          <p className="tableorders-subtext">
            {" " + address}, {city}. {state}, {postal}, {country}
          </p>

          <hr />
        </>

        <>
          <h3>Payment Method</h3>
          <p className="tableorders-subtext">
            {paymentMethod[0].toUpperCase() +
              paymentMethod.slice(1, paymentMethod.length)}
          </p>

          <hr />
        </>
        <h3>Order Items</h3>
        <Table columns={columns} dataSource={tableData} />
      </div>

      <div className="tableorders-container right">
        <>
          <h3>Order Summary</h3>
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

export default OrderDetails;
