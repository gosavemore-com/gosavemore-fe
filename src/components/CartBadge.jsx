import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "antd";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const { cartItems } = useSelector((state) => state.cart);

  let cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <Badge count={cartCount} className="badges" size="small">
        <FaShoppingCart />
      </Badge>
    </>
  );
};

export default CartBadge;
