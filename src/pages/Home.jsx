import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productsAction";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import CarouselSlider from "../components/CarouselSlider";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let productsList;

  if (items !== undefined) {
    productsList = items.map((item, index) => (
      <>
        <Product key={index} item={item} />
      </>
    ));
  }

  console.log(items);

  return (
    <>
      <CarouselSlider />
      <div className="list">
        {items ? (
          <div className="list-products">{productsList}</div>
        ) : (
          <Spinner className="list-spinner" />
        )}
      </div>
    </>
  );
};

export default Home;
