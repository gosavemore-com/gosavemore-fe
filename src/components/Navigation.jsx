import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/images/logoName.png";
import Banner from "./Banner";
import Categories from "./Categories";
import { Menu } from "antd";
import { logoutUser } from "../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {
  const { isSuccess } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();

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
          <Menu>
            <Menu.Item>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>

            {isSuccess ? (
              <>
                <Menu.Item>
                  <NavLink to="/profile">Profile</NavLink>
                </Menu.Item>
                <Menu.Item
                  className="menu-logout"
                  onClick={() => dispatch(logoutUser(history))}
                >
                  Logout
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/order">{<FaShoppingCart />}</NavLink>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  <NavLink to="/login">Login</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/order">{<FaShoppingCart />}</NavLink>
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
