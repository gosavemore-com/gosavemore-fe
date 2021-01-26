import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

const HomeCard = ({ item }) => {
  return (
    <div className="homeCard">
      <Link to={`/product/${item._id}`}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={item.image[0]} />}
        >
          <div className="meta-title">
            <p>{item.name}</p>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default HomeCard;
