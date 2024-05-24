import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";

/*
    Header
      -logo(title)
      -nav items (right side)
      -cart

    Body
      -search bar
      -restaurant list
        -restaurant cards (many)
          -image
          -name
          -rating
          -cuisines
    
    Footer
      -links
      -copyright
    */

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
