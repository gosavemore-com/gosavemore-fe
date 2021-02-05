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
  const [price, setPrice] = useState({
    cartPrice: 0,
    cartCount: 0,
  });
  const { cartItems } = useSelector((state) => state.cart);
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  let totalPrice = calculateTotalPrice(
    price.cartPrice,
    price.shippingPrice,
    price.taxPrice
  ).toFixed(2);

  useEffect(() => {
    cartItems.length !== 0 ? setDisableButton(false) : setDisableButton(true);
    setPrice({
      cartPrice: cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ),
      shippingPrice: calculateShipping(price.cartPrice),
      cartCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
      taxPrice: calculateTaxPrice(price.cartPrice),
    });
  }, [cartItems]);

  const handleClick = () => {
    dispatch(saveProducts(cartItems));
    let data = {
      shippingPrice: price.shippingPrice,
      taxPrice: price.taxPrice,
      totalPrice: totalPrice,
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
        <h3>Subtotal ({price.cartCount}) Items</h3>
        <h3>Before Tax Price: ${price.cartPrice.toFixed(2)}</h3>
        <h3>Tax: ${price.taxPrice}</h3>
        <h3>Shipping Price: ${price.shippingPrice}</h3>
        <h2>Total: ${totalPrice}</h2>
        <Button type="primary" disabled={disableButton} onClick={handleClick}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
