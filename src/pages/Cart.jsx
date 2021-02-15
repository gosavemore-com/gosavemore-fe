import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../components/CartCard";
import { Button } from "antd";
import { saveProducts, savePricingDetails } from "../redux/actions/orderAction";
import { useHistory } from "react-router-dom";
import {
  calculateShipping,
  calculateTaxPrice,
  calculateTotalPrice,
} from "../util/pricingCalculation";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  let cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  let cartPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let taxPrice = calculateTaxPrice(cartPrice);
  let shippingPrice = cartPrice === 0 ? 0 : calculateShipping(cartPrice);
  let totalPrice = calculateTotalPrice(
    cartPrice,
    shippingPrice,
    taxPrice
  ).toFixed(2);

  useEffect(() => {
    cartItems.length !== 0 ? setDisableButton(false) : setDisableButton(true);
  }, [cartItems]);

  const handleClick = () => {
    dispatch(saveProducts(cartItems));
    let data = {
      shippingPrice: shippingPrice,
      taxPrice: taxPrice,
      totalPrice: totalPrice,
      cartPrice: cartPrice.toFixed(2),
    };

    dispatch(savePricingDetails(data));
    history.push("/shipping");
  };

  return (
    <div className="cart">
      <div className="cart-item">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <h5>Cart is empty right now...</h5>
          </>
        ) : (
          <>
            {cartItems.map((item) => (
              <>
                <CartCard item={item} />
              </>
            ))}
          </>
        )}
      </div>
      <div className="cart-subtotal">
        <h3>Subtotal ({cartCount}) Items</h3>
        <h3>Price: ${cartPrice.toFixed(2)}</h3>
        <Button type="primary" disabled={disableButton} onClick={handleClick}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
