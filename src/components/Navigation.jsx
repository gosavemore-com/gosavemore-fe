import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/images/logoName.png";
import Banner from "./Banner";
import { Menu } from "antd";

const Navigation = () => {
  const [current, setCurrent] = useState({
    current: "home",
  });

  return (
    <>
      <div className="menu">
        <Banner />
        <div className="menu-logo">
          <Link to="/">
            <img src={logo} alt="gosavemore logo" className="logo" />
          </Link>
        </div>
        <div className="menu-layout">
          <Menu defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/login">Login</NavLink>
            </Menu.Item>
            <Menu.Item key="3" className="menu-cart">
              <NavLink to="/order">{<FaShoppingCart />}</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navigation;
