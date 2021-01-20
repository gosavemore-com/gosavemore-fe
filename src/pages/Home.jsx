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
    productsList = items.map((item) => (
      <>
        <Product key={item._id} item={item} />
      </>
    ));
  }

  return (
    <div className="home">
      <CarouselSlider />
      <div className="home-list">
        <h3>Featured Items</h3>
        {items ? (
          <div className="home-list-products">{productsList}</div>
        ) : (
          <Spinner className="home-list-spinner" />
        )}
      </div>
    </div>
  );
};

export default Home;
