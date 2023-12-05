import React from "react";
import Card from "./Card";
import { IMGteam, IMGkarma, IMGcalculator, IMGsupervisor } from "./images.jsx";

const CardsBox = () => {
  return (
    <div className="grid grid-cols-3 items-center gap-[2rem]">
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        bgColor="bg-Red"
        image={IMGteam}
      />
      <div className="grid gap-[2rem]">
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
      </div>
      <Card
        label="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        image={IMGcalculator}
        bgColor="bg-Blue"
      />
    </div>
  );
};

export default CardsBox;
