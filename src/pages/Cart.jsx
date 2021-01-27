import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="orders">
      <h2>Shopping Cart</h2>

      <div className="orders-item"></div>
      {cartItems.length === 0 ? (
        <>
          <h5>Cart is Empty</h5>
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
  );
};

export default Cart;
