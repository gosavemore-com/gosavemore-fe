import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import OrderDetails from "../components/OrderDetails";
import { fetchOrderById } from "../redux/actions/orderAction";

const Order = ({ match }) => {
  const orderId = match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    shippingAddress,
    orderItems,
    _id,
    user,
    taxPrice,
    shippingPrice,
    paymentMethod,
    totalPrice,
    isDelivered,
    isPaid,
  } = useSelector((state) => state.orders.ordered);

  let tableData = [];

  orderItems.map((item) =>
    tableData.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })
  );

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, []);

  return (
    <>
      <div className="order">
        <div>
          <h2>Order id: {_id}</h2>
          <h3>Shipping INFORMATION</h3>
          <p>
            <strong>Name: </strong> {user.username}
          </p>
          <p>
            <strong>Email: </strong>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <br />
          </p>
          <p>
            <strong>Delivered:</strong> {isDelivered ? "true" : "false"}
          </p>
          <p>
            <strong>Paid:</strong> {isPaid ? "true" : "false"}
          </p>

          <OrderDetails
            tableData={tableData}
            {...shippingAddress}
            taxPrice={taxPrice}
            shippingPrice={shippingPrice}
            totalPrice={totalPrice}
            paymentMethod={paymentMethod}
          />
        </div>
      </div>
    </>
  );
};

export default Order;
