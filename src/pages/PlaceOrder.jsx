import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import CheckoutSteps from "../components/CheckoutSteps";
import OrderDetails from "../components/OrderDetails";
import { createOrder } from "../redux/actions/orderAction";

const PlaceOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { order, prices, payments, shipping } = useSelector(
    (state) => state.cart
  );
  const { userId } = useSelector((state) => state.users.user);
  const { isPlacedOrder, ordered } = useSelector((state) => state.orders);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(order);
  }, [order]);

  useEffect(() => {
    if (isPlacedOrder && ordered.length !== 0) {
      history.push(`/order/${ordered._id}`);
    }
  }, [history, isPlacedOrder, ordered]);

  const handleClick = () => {
    dispatch(
      createOrder({
        user: userId,
        orderItems: order,
        shippingAddress: {
          address: shipping.address,
          city: shipping.city,
          state: shipping.state,
          country: shipping.country,
          postalCode: shipping.postal,
        },
        paymentMethod: payments.paymentMethod,
        itemsPrice: Number(prices.cartPrice),
        taxPrice: Number(prices.taxPrice),
        shippingPrice: Number(prices.shippingPrice),
        totalPrice: Number(prices.totalPrice),
      })
    );
  };

  return (
    <>
      <CheckoutSteps
        step1="finish"
        step2="finish"
        step3="process"
        step4="wait"
      />
      <div className="placeorder">
        <div>
          <OrderDetails
            tableData={tableData}
            {...shipping}
            {...prices}
            {...payments}
            key={userId}
          />
        </div>
        <div className="placeorder-buttons">
          <Button type="primary" onClick={() => history.push("/payment")}>
            Back
          </Button>
          <Button type="primary" onClick={handleClick}>
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
