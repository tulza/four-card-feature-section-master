import React, { Fragment } from "react";
import Card from "./Card";
import CardsBox from "./CardsBox.jsx";
import Introduction from "./Introduction.jsx";

const Homepage = () => {
  return (
    <Fragment>
      <div className="grid">
        <Introduction />
        <CardsBox />
      </div>
    </Fragment>
  );
};

export default Homepage;
