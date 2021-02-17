import React, { useEffect } from "react";
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
  const { ordered, isSuccess } = useSelector((state) => state.orders);

  let tableData = [];

  order.map((item) =>
    tableData.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })
  );

  useEffect(() => {
    if (isSuccess) history.push(`/order/${ordered._id}`);
  }, [history, isSuccess, ordered._id]);

  const handleClick = () => {
    let { address, city, state, country } = shipping;
    let postalCode = shipping.postal;
    let { cartPrice, taxPrice, shippingPrice, totalPrice } = prices;
    let { paymentMethod } = payments;

    dispatch(
      createOrder({
        user: userId,
        orderItems: order,
        shippingAddress: {
          address,
          city,
          state,
          country,
          postalCode,
        },
        paymentMethod: paymentMethod,
        itemsPrice: Number(cartPrice),
        taxPrice: Number(taxPrice),
        shippingPrice: Number(shippingPrice),
        totalPrice: Number(totalPrice),
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
