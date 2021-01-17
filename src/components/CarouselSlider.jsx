import React from "react";
import { Carousel } from "antd";

const CarouselSlider = () => {
  const contentStyle = {
    height: "200px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "black",
  };

  return (
    <>
      <Carousel autoplay className="slider">
        <div style={contentStyle}>
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
