import React, { useState } from "react";
import { Image } from "antd";

const ImageSlider = ({ images }) => {
  const [imagePreview, setImagePreview] = useState(images[0]);

  return (
    <div className="image">
      <Image.PreviewGroup>
        <Image width={200} preview={true} src={imagePreview} />.
        <div className="image-preview">
          {images !== undefined &&
            images.map((image, index) => {
              if (image !== imagePreview)
                return <Image src={image} key={index} />;
            })}
        </div>
      </Image.PreviewGroup>
      <div className="image-container">
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={image}
            onMouseEnter={() => setImagePreview(image)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
