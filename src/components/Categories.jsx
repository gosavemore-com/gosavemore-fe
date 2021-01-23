import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/categories/drinks">Drinks</Link>
      <span className="categories-divider">|</span>

      <Link to="/categories/bottled-&-canned">Bottled &amp; Canned</Link>
      <span className="categories-divider">|</span>

      <Link to="/categories/noodles">Noodles</Link>
      <span className="categories-divider">|</span>

      <Link to="/categories/rice-&-grains">Rice &amp; Grains</Link>
      <span className="categories-divider">|</span>

      <Link to="/categories/sauces-&-seasonings">Sauces &amp; Seasonings</Link>
    </div>
  );
};

export default Categories;
