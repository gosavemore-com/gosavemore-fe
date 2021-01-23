import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "./ProductCard";

const CategoriesRenderer = () => {
  const {
    params: { category },
  } = useRouteMatch();
  const [products, setProducts] = useState([]);

  const {
    drinks,
    bottledCanned,
    noodles,
    riceGrains,
    saucesSeasonings,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (category === "drinks") setProducts(drinks);
    if (category === "bottled-&-canned") setProducts(bottledCanned);
    if (category === "noodles") setProducts(noodles);
    if (category === "rice-&-grains") setProducts(riceGrains);
    if (category === "sauces-&-seasonings") setProducts(saucesSeasonings);
  }, [category]);

  let itemRenderer;
  if (products !== undefined && products !== "") {
    itemRenderer = products.map((item, index) => (
      <>
        <ProductCard key={index} item={item} />
      </>
    ));
  }

  return <div className="categories-layout">{itemRenderer}</div>;
};

export default CategoriesRenderer;
