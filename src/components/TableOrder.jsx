import React from "react";
import { Table } from "antd";

const TableOrder = ({ tableData, cartPrice, shippingPrice, taxPrice, totalPrice }) => {
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
        <h3>Orders</h3>

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
    </div>
  );
};

export default TableOrder;
