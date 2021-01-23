import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductFeatured } from "../redux/actions/productsAction";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import CarouselSlider from "../components/CarouselSlider";
import { fetchProducts } from "../redux/actions/productsAction";

const Home = () => {
  const dispatch = useDispatch();

  const { featured } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductFeatured());
    dispatch(fetchProducts());
  }, [dispatch]);

  let productsList;

  if (featured !== undefined) {
    productsList = featured.map((item) => (
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
        {featured ? (
          <div className="home-list-products">{productsList}</div>
        ) : (
          <Spinner className="home-list-spinner" />
        )}
      </div>
    </div>
  );
};

export default Home;
