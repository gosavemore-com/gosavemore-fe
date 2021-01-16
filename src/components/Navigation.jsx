import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/images/logoName.png";
import { Menu } from "antd";

const Navigation = () => {
  const [current, setCurrent] = useState({
    current: "home",
  });

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };
  return (
    <div className="menu">
      <div className="menu-logo">
        <Link to="/">
          <img src={logo} alt="gosavemore logo" className="logo" />
        </Link>
      </div>
      <div className="menu-layout">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="login">
            <NavLink to="/login">Login</NavLink>
          </Menu.Item>
          <Menu.Item key="cart">
            <NavLink to="/order">{<FaShoppingCart />}</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;
