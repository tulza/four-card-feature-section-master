import React, { Fragment } from "react";
import Card from "./Card";

const Homepage = () => {
  return (
    <Fragment>
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        color="bg-Red"
      />
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        color="bg-Cyan"
      />
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        color="bg-Orange"
      />
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        color="bg-Blue"
      />
    </Fragment>
  );
};

export default Homepage;
