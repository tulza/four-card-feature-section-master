import React from "react";
import Card from "./Card";
import { IMGteam, IMGkarma, IMGcalculator, IMGsupervisor } from "./images.jsx";

const CardsBox = () => {
  return (
    <div className="grid grid-cols-3 mob:grid-cols-1 items-center gap-[2rem] mx-auto">
      <Card
        label="Supervisor"
        description="Monitors activity to identify project roadblocks"
        image={IMGsupervisor}
        bgColor="bg-Cyan"
      />
      <div className="grid gap-[2rem]">
        <Card
          label="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          bgColor="bg-Red"
          image={IMGteam}
        />
        <Card
          label="Karma"
          description="Regularly evaluates our talent to ensure quality"
          image={IMGkarma}
          bgColor="bg-Orange"
        />
      </div>
      <Card
        label="Calculator"
        description="Uses data from past projects to provide better delivery estimates"
        image={IMGcalculator}
        bgColor="bg-Blue"
      />
    </div>
  );
};

export default CardsBox;
