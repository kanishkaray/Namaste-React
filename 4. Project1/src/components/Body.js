import React, { useState } from "react";
import "../App.css";

import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../constants/config";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
