import React from "react";
import { Link } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";

const Sidebar = ({ isVisible, setIsVisible }) => {
  return (
    <div className="sidebar">
      <>
        <div className={isVisible ? "sidebar-menu open" : "sidebar-menu close"}>
          <div className="sidebar-close">
            <FaRegWindowClose onClick={() => setIsVisible(!isVisible)} />
          </div>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact </Link>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
