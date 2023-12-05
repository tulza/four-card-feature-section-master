import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

const Card = ({ label, description, bgColor, image }) => {
  return (
    <div className="bg-white rounded-[0.5rem] w-[350px] h-[250px] overflow-hidden shadow">
      <div className={clsx(`${bgColor} h-[4px]`)} />
      <div className="p-[30px] grid h-full w-full">
        <p>{label}</p>
        <p>{description}</p>
        <img src={image} className="w-[64px] justify-self-end self-end" />
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
