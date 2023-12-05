import React, { Fragment } from "react";
import Card from "./Card";
import { IMGteam, IMGkarma, IMGcalculator, IMGsupervisor } from "./images.jsx";

const Homepage = () => {
  return (
    <Fragment>
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        bgColor="bg-Red"
        image={IMGteam}
      />
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        image={IMGsupervisor}
        bgColor="bg-Cyan"
      />
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        image={IMGkarma}
        bgColor="bg-Orange"
      />
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        image={IMGcalculator}
        bgColor="bg-Blue"
      />
    </Fragment>
  );
};

export default Homepage;
