import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";

const FeaturedList = ({ item }) => {
  return (
    <div className="featuredList">
      <Link to={`/product/${item._id}`}>
        <HomeCard key={item._id} item={item} />
      </Link>
    </div>
  );
};

export default FeaturedList;
