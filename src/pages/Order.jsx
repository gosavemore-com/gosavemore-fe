import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import OrderDetails from "../components/OrderDetails";
import {
  fetchOrderById,
  updateOrderPay,
  resetOrderPay,
} from "../redux/actions/orderAction";
import axiosRoute from "../util/axiosRoute";
import Spinner from "../components/Spinner";

const Order = ({ match }) => {
  const orderId = match.params.id;
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

  const { isSuccess, isLoading, ordered } = useSelector(
    (state) => state.orders
  );

  let tableData = [];

  if (orderItems !== undefined) {
    orderItems.map((item) =>
      tableData.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })
    );
  }

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    if (isPaid) {
      dispatch(fetchOrderById(orderId));
    }
  }, [dispatch, orderId, isPaid]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(updateOrderPay(orderId, paymentResult));
  };

  return (
    <div className="order">
      <h2>Order id: {orderId}</h2>
      <h3>Shipping INFORMATION</h3>

      {isSuccess && (
        <>
          <p>
            <strong>Name: </strong> {user.username}
          </p>
          <p>
            <strong>Email: </strong>
            <a href={`mailto:${user.email}`}>{user.email}</a>
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
        <div>
          {isLoading && <Spinner />}

          <PayPalButton amount={totalPrice} onSuccess={successPaymentHandler} />
        </div>
      )}
    </div>
  );
};

export default Order;

/*

  const orderId = match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = useState(false);

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
    isLoading,
  } = useSelector((state) => state.orders.ordered);

  let tableData = [];

  if (orderItems !== undefined) {
    orderItems.map((item) =>
      tableData.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axiosRoute().get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}"`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };

      document.body.appendChild(script);
    };

    if (orderItems || isPaid) {
      dispatch(resetOrderPay());
      dispatch(fetchOrderById(orderId));
    } else if (!isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, isPaid, orderItems]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    // dispatch(updateOrderPay(orderId, paymentResult));
  };


   <div className="order">
        <div>
          <h2>Order id: {_id}</h2>
          <h3>Shipping INFORMATION</h3>
          <>
            <p>
              <strong>Name: </strong> {user.username}
            </p>
            <p>
              <strong>Email: </strong>
              <a href={`mailto:${user.email}`}>{user.email}</a>
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
          </>

          <OrderDetails
            tableData={tableData}
            {...shippingAddress}
            taxPrice={taxPrice}
            shippingPrice={shippingPrice}
            totalPrice={totalPrice}
            paymentMethod={paymentMethod}
          />
          {!isPaid && (
            <div>
              {isLoading && <Spinner />}
              {!sdkReady ? (
                <Spinner />
              ) : (
                <PayPalButton
                  amount={totalPrice}
                  onSuccess={successPaymentHandler}
                />
              )}
            </div>
          )}
        </div>
      </div>

  */
