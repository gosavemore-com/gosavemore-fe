import React from "react";
import { Card } from "antd";

const HomeCard = ({ item }) => {
  const { Meta } = Card;

  return (
    <div className="homeCard">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item.image[0]} />}
      >
        <div className="meta-title">
          <p>{item.name}</p>
        </div>
      </Card>
    </div>

    // (
    //   <div className="product">
    //     <div className="product-image">
    //       <img src={item.image} alt="product" />
    //     </div>
    //     <div className="product-details">
    //       <h5>{item.name}</h5>
    //     </div>
    //   </div>
    // )
  );
};

export default HomeCard;
