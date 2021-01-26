import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductFeatured } from "../redux/actions/productsAction";
import Spinner from "../components/Spinner";
import CarouselSlider from "../components/CarouselSlider";
import HomeCard from "../components/HomeCard";
import {
  fetchProducts,
  fetchAdvertisement,
} from "../redux/actions/productsAction";

const Home = () => {
  const dispatch = useDispatch();

  const { featured, advertisements } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductFeatured());
    dispatch(fetchProducts());
    dispatch(fetchAdvertisement());
  }, [dispatch]);

  return (
    <div className="home">
      <CarouselSlider advertisements={advertisements} />
      <div className="home-list">
        <h3>Featured Items</h3>
        {featured !== undefined ? (
          <div className="home-list-products">
            {featured.map((item) => (
              <div>
                <HomeCard key={item._id} item={item} />
              </div>
            ))}
          </div>
        ) : (
          <Spinner className="home-list-spinner" />
        )}
      </div>
    </div>
  );
};

export default Home;
