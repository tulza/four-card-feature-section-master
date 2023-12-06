import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

const Card = ({ label, description, bgColor, image }) => {
  return (
    <div className="bg-white rounded-[0.5rem] w-[350px] h-[250px] mob:w-[310px] mob:h-[220px] overflow-hidden shadow-lg shadow-GrayishBlueShadow">
      <div className={clsx(`${bgColor} h-[4px]`)} />
      <div className="p-[30px] grid h-full w-full">
        <span className="text-VeryDarkBlue text-[20px] font-semibold">
          {label}
        </span>
        <span className="text-GrayishBlue text-[13px]">{description}</span>
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
