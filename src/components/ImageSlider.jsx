import React, { useState } from "react";
import { Image } from "antd";

const ImageSlider = ({ images }) => {
  const [imagePreview, setImagePreview] = useState(images[0]);

  return (
    <>
      <Image.PreviewGroup>
        <Image width={200} preview={true} src={imagePreview} />
      </Image.PreviewGroup>
      <div className="image-container">
        {images.map((image) => (
          <img src={image} onClick={() => setImagePreview(image)} />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
