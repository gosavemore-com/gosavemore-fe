import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertisement } from "../redux/actions/productsAction";

const CarouselSlider = () => {
  const { advertisements } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertisement());
  }, []);

  return (
    <>
      <Carousel autoplay className="slider">
        {advertisements !== undefined
          ? advertisements.map((product) => (
              <>
                <div className="slider-layout">
                  <img
                    src={product.imageUrl}
                    alt="airpods"
                    className="slider-img"
                  />
                </div>
                <div className="slider-description">
                  <h3>{product.title}</h3>
                </div>
              </>
            ))
          : null}
      </Carousel>
    </>
  );
};

export default CarouselSlider;
