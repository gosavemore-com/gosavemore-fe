import React from "react";
import { Image } from "antd";

const ImageSlider = ({ images }) => {
  return (
    <div className="image-container">
      <Image.PreviewGroup>
        {images.map((image) => (
          <Image preview={true} src={image} width={200} />
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

export default ImageSlider;
