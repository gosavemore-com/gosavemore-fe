import React from "react";
import { Carousel } from "antd";

const CarouselSlider = () => {
  return (
    <>
      <Carousel autoplay className="slider">
        <div>
          <img
            src="/images/airpods.jpg"
            alt="airpods"
            className="carousel-img"
          />
        </div>
        <div>
          <img src="/images/alexa.jpg" alt="airpods" className="carousel-img" />
        </div>
        <div>
          <img
            src="/images/camera.jpg"
            alt="airpods"
            className="carousel-img"
          />
        </div>
        <div>
          <img src="/images/mouse.jpg" alt="airpods" className="carousel-img" />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselSlider;
