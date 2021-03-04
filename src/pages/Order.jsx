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
    taxPrice,
    shippingPrice,
    paymentMethod,
    totalPrice,
    isDelivered,
    isPaid,
  } = useSelector((state) => state.orders.ordered);

  const { user } = useSelector((state) => state.users);

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
    <>
      <div className="order">
        <h2>Order id: {orderId}</h2>
        <div className="order-details">
          <OrderDetails
            tableData={tableData}
            {...shippingAddress}
            taxPrice={taxPrice}
            shippingPrice={shippingPrice}
            totalPrice={totalPrice}
            paymentMethod={paymentMethod}
            user={user}
            isDelivered={isDelivered}
            isPaid={isPaid}
          />
          <div className="order-buttons">
            {!isPaid && (
              <PayPalButton
                amount={totalPrice}
                onSuccess={successPaymentHandler}
              />
            )}

            {isPaid && isSuccess && (
              <Button type="primary" onClick={handleClick}>
                Home
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
