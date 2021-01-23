import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";

const CarouselSlider = () => {
  const { featured } = useSelector((state) => state.products);

  return (
    <>
      <Carousel autoplay className="slider">
        {featured !== undefined
          ? featured.map((item) => (
              <div className="slider-layout">
                <div>
                  <img
                    src={item.image[0]}
                    alt="airpods"
                    className="slider-img"
                  />
                </div>
                <h3>{item.name}</h3>
              </div>
            ))
          : null}
      </Carousel>
    </>
  );
};

export default CarouselSlider;
