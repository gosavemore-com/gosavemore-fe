import React from "react";
import { Carousel } from "antd";

const CarouselSlider = ({ advertisements }) => {
  return (
    <Carousel autoplay className="slider">
      {advertisements &&
        advertisements.map((product, index) => (
          <div key={index}>
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
          </div>
        ))}
    </Carousel>
  );
};

export default CarouselSlider;
