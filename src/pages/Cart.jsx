import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  let cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  let cartPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

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
            {cartItems.map((item, index) => (
              <>
                <CartCard key={index} item={item} />
              </>
            ))}
          </>
        )}
      </div>
      <div className="cart-subtotal">
        <h3>Subtotal ({cartCount}) Items</h3>
        <h2>Total: ${cartPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
