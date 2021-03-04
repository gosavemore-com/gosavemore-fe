import React from "react";
import { List, Table, Row, Col } from "antd";

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
  user,
  isDelivered,
  isPaid,
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
      <Row gutter={[16, 16]}>
        <Col lg={12} md={12}>
          <List itemLayout="vertical">
            <List.Item>
              <h2>Shipping Address</h2>
              <span>{` ${address}, ${city}. ${state}, ${postal}, ${country}`}</span>
            </List.Item>
            <List.Item>
              <h2>Payment Method</h2>
              <p className="tableorders-subtext">
                {paymentMethod[0].toUpperCase() +
                  paymentMethod.slice(1, paymentMethod.length)}
              </p>
            </List.Item>

            <List.Item>
              <h2>Order Items</h2>
              <Table columns={columns} dataSource={tableData} />
            </List.Item>
          </List>
        </Col>
        <Col lg={12} md={12}>
          <List itemLayout="vertical">
            <h2>User Information</h2>
            <List.Item>
              {user !== undefined && (
                <>
                  <p>
                    <strong>Name: </strong> {user.username}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {user !== undefined && (
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    )}
                    <br />
                  </p>
                  <p>
                    <strong>Delivered:</strong>{" "}
                    {isDelivered
                      ? "Yes, It's on the way"
                      : "Not Yet Delivered."}
                  </p>
                  <p>
                    <strong>Paid:</strong>{" "}
                    {isPaid ? "Thank you for your purchased!" : "Not yet paid."}
                  </p>
                </>
              )}
            </List.Item>

            <h2>Order Summary</h2>
            <List.Item>
              <p>
                Pretax Price:
                {cartPrice && (
                  <span>
                    <span>${cartPrice}</span> <br />
                  </span>
                )}
                Shipping Cost: <span>${shippingPrice}</span> <br />
              </p>
              <p>
                Tax Price: <span>${taxPrice}</span>
              </p>
            </List.Item>
            <List.Item>
              <h2 className="totalPrice">Total Price: ${totalPrice}</h2>
            </List.Item>
          </List>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetails;
