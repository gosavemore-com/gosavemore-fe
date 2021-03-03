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
import { fetchUserList } from "../redux/actions/userAction";

const Home = () => {
  const dispatch = useDispatch();

  const { featured, advertisements } = useSelector((state) => state.products);
  const { isAdmin } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchProductFeatured());
    dispatch(fetchProducts());
    dispatch(fetchAdvertisement());

    if (isAdmin) {
      dispatch(fetchUserList());
    }
  }, [dispatch]);

  return (
    <div className="home">
      <CarouselSlider advertisements={advertisements} />

      <div className="home-list">
        <h3>Featured Items</h3>
        {(featured && (
          <div className="home-list-products">
            {featured.map((item, index) => (
              <HomeCard key={index} item={item} />
            ))}
          </div>
        )) || <Spinner className="home-list-spinner" />}
      </div>
    </div>
  );
};

export default Home;
