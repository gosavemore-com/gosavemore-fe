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
              <>
                <img
                  src={item.image[0]}
                  alt="airpods"
                  className="carousel-img"
                />
              </>
            ))
          : null}
      </Carousel>
    </>
  );
};

export default CarouselSlider;
