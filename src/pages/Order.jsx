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
import { clearCart } from "../redux/actions/cartAction";
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
  } = useSelector((state) => state.orders.ordered);

  const { isSuccess, isLoading, isPaymentProcessingSuccess } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    if (isPaymentProcessingSuccess) {
      dispatch(fetchOrderById(orderId));
      dispatch(clearCart());
    }

    if (orderItems) {
      setTableData(orderItems);
    }
  }, [dispatch, isPaymentProcessingSuccess, orderId, orderItems]);

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
            {isPaymentProcessingSuccess
              ? "Thank you for your purchased!"
              : "Not yet paid."}
          </p>

          {isPaymentProcessingSuccess && (
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

      {!isPaymentProcessingSuccess && (
        <div>
          {isLoading && <Spinner />}

          <PayPalButton amount={totalPrice} onSuccess={successPaymentHandler} />
        </div>
      )}
    </div>
  );
};

export default Order;
