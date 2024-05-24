import React from "react";
import "../App.css";
import { IMG_CDN_URL } from "../constants/config";

export const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={IMG_CDN_URL} alt="app-logo" />
    </a>
  );
};
