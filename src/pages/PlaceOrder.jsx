import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import CheckoutSteps from "../components/CheckoutSteps";
import TableOrder from "../components/TableOrder";
import { createOrder } from "../redux/actions/orderAction";

const PlaceOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { order, location, prices, payments } = useSelector(
    (state) => state.orders
  );
  const { userId } = useSelector((state) => state.users.user);
  const { address, city, state, postal, country } = useSelector(
    (state) => state.orders.shipping
  );
  let tableData = [];

  order.map((item) =>
    tableData.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })
  );

  const handleClick = () => {
    dispatch(
      createOrder({
        user: userId,
        orderItems: order,
        shippingAddress: {
          address: address,
          city: city,
          postalCode: postal,
          state: state,
          country: country,
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
        <h3>Place Order</h3>
        <div>
          <TableOrder
            tableData={tableData}
            prices={prices}
            location={location}
          />
        </div>

        <Button type="primary" onClick={() => history.push("/payment")}>
          Back
        </Button>
        <Button type="primary" onClick={handleClick}>
          Place Order
        </Button>
      </div>
    </>
  );
};

export default PlaceOrder;
