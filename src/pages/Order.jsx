import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import OrderDetails from "../components/OrderDetails";
import {
  fetchOrderById,
  resetOrderPay,
  updateOrderPay,
} from "../redux/actions/orderAction";
import Spinner from "../components/Spinner";
import { clearCart, clearOrders } from "../redux/actions/cartAction";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const Order = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const [tableData, setTableData] = useState([]);

  const {
    shippingAddress,
    orderItems,
    user,
    taxPrice,
    shippingPrice,
    paymentMethod,
    totalPrice,
    isDelivered,
    isPaid,
  } = useSelector((state) => state.orders.ordered);

  const { isSuccess, isPaymentProcessingSuccess } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    setTableData(orderItems);
  }, [orderItems]);

  useEffect(() => {
    if (isPaymentProcessingSuccess) {
      dispatch(fetchOrderById(orderId));
      dispatch(clearCart());
      dispatch(clearOrders());
    }
  }, [dispatch, isPaymentProcessingSuccess, orderId]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(updateOrderPay(orderId, paymentResult));
  };

  const handleClick = () => {
    dispatch(resetOrderPay());
    history.push("/");
  };

  return (
    <div className="order">
      <h2>Order id: {orderId}</h2>
      <h3>Shipping INFORMATION</h3>

      {isSuccess && (
        <>
          {user !== undefined && (
            <p>
              <strong>Name: </strong> {user.username}
            </p>
          )}
          <p>
            <strong>Email: </strong>
            {user !== undefined && (
              <a href={`mailto:${user.email}`}>{user.email}</a>
            )}
            <br />
          </p>
          <p>
            <strong>Delivered:</strong>{" "}
            {isDelivered ? "Yes, It's on the way" : "Not Yet Delivered."}
          </p>
          <p>
            <strong>Paid:</strong>{" "}
            {isPaid ? "Thank you for your purchased!" : "Not yet paid."}
          </p>

          {isPaid && (
            <Button type="primary" onClick={handleClick}>
              Home
            </Button>
          )}
        </>
      )}

      <OrderDetails
        tableData={tableData}
        {...shippingAddress}
        taxPrice={taxPrice}
        shippingPrice={shippingPrice}
        totalPrice={totalPrice}
        paymentMethod={paymentMethod}
      />

      {!isPaid && (
        <PayPalButton amount={totalPrice} onSuccess={successPaymentHandler} />
      )}
    </div>
  );
};

export default Order;
