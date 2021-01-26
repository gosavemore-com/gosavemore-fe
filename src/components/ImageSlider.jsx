import React, { useState } from "react";
import { Image } from "antd";

const ImageSlider = ({ images }) => {
  const [imagePreview, setImagePreview] = useState(images[0]);

  return (
    <div className="image">
      <Image.PreviewGroup>
        <Image width={200} preview={true} src={imagePreview} />.
        <div className="image-preview">
          {images !== undefined
            ? images.map((image) => {
                if (image !== imagePreview) return <Image src={image} />;
              })
            : ""}
        </div>
      </Image.PreviewGroup>
      <div className="image-container">
        {images.map((image) => (
          <img src={image} onMouseEnter={() => setImagePreview(image)} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
