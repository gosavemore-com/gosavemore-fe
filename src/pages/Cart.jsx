import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Button } from "antd";

const Cart = ({ history }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [disableButton, setDisableButton] = useState(false);

  let cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  let cartPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  useEffect(() => {
    if (cartItems.length !== 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [cartItems]);

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
        <h2>Total: ${cartPrice.toFixed(2)}</h2>
        <Button
          type="primary"
          onClick={() => history.push("/orders")}
          disabled={disableButton}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
