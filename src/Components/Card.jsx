import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

const Card = ({ label, description, bgColor, image }) => {
  return (
    <div className="bg-white rounded-[0.5rem] overflow-hidden shadow">
      <div className={clsx(`${bgColor} h-1`)} />
      <div className="p-10">
        <p>{label}</p>
        <p>{description}</p>
        <img src={image} />
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
