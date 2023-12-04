import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

const Card = ({ label, description, color }) => {
  return (
    <div className="bg-white rounded-[0.5rem] overflow-hidden shadow">
      <div className={clsx(`${color} h-1`)} />
      <div className="p-10">
        <p>{label}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
