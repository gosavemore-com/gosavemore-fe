import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const CategoriesRenderer = () => {
  const {
    params: { category },
  } = useRouteMatch();

  const { items } = useSelector((state) => state.products);
  let categoryName = renameCategory(category);

  let filteredItems = items.filter((item) => item.category === categoryName);

  return (
    <div className="categories-layout">
      {filteredItems ? (
        filteredItems.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

function renameCategory(category) {
  let newCategory = category.replace(/-/g, " ").split(" ");

  if (newCategory.length > 0) {
    newCategory = newCategory.map(
      (item) => item[0].toUpperCase() + item.substr(1)
    );
    newCategory = newCategory.join(" ");
  } else {
    newCategory = newCategory[0];
  }

  return newCategory;
}

export default CategoriesRenderer;
