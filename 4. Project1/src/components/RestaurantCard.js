import React from "react";
import "../App.css";

const RestaurantCard = ({ rating, name, image, deliveryTime, cuisines }) => {
  return (
    <div className="card">
      <img src={image} alt={name + " image"} />
      <h3>{name}</h3>
      <h3>
        ⭐{rating} . {deliveryTime}
      </h3>
      <h4>Cuisine : {cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
