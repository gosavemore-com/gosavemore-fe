import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/categories/drinks">Drinks</Link>
      <span className="categories-divider">|</span>
      <Link to="/categories/bottle-cans">Bottle &amp; Cans</Link>
      <span className="categories-divider">|</span>
      <Link to="/categories/drinks">Noodles</Link>
      <span className="categories-divider">|</span>
      <Link to="/categories/drinks">Rice &amp; Grains</Link>
      <span className="categories-divider">|</span>
      <Link to="/categories/sauces-seasonings">Sauces &amp; Seasonings</Link>
    </div>
  );
};

export default Categories;
