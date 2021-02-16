import React, { useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import logo from "../assets/images/logoName.png";
import Banner from "./Banner";
import Categories from "./Categories";
import { Menu } from "antd";
import { logoutUser } from "../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import CartBadge from "./CartBadge";
import { clearCart } from "../redux/actions/cartAction";
import SearchBar from "./SearchBar";
import { clearOrders } from "../redux/actions/cartAction";

const Navigation = () => {
  const { isSuccess } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <div className="menu">
        <Banner />
        <div className="menu-logo">
          <Link to="/">
            <img src={logo} alt="gosavemore logo" className="logo" />
          </Link>
        </div>
        <div className="menu-searchbar">
          <SearchBar placeholder="Search Product" style={{ width: 500 }} />
        </div>
        <div className="menu-layout">
          <Menu selectedKeys={[current]} onClick={handleClick}>
            <Menu.Item key="home">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>

            {isSuccess ? (
              <>
                <Menu.Item key="profile">
                  <NavLink to="/profile">Profile</NavLink>
                </Menu.Item>
                <Menu.Item
                  className="menu-logout"
                  onClick={() => {
                    dispatch(logoutUser(history), setCurrent("home"));
                    dispatch(clearCart());
                    dispatch(clearOrders());
                  }}
                >
                  Logout
                </Menu.Item>
                <Menu.Item key="cart">
                  <NavLink to="/cart">
                    <CartBadge />
                  </NavLink>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="login" onClick={() => setCurrent("home")}>
                  <NavLink to="/login">Login</NavLink>
                </Menu.Item>
                <Menu.Item key="cart">
                  <NavLink to="/cart">
                    <CartBadge />
                  </NavLink>
                </Menu.Item>
              </>
            )}
          </Menu>
        </div>
      </div>
      <Categories className="menu-categories" />
    </>
  );
};

export default Navigation;
