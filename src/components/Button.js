import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, showHide }) => {
  return (
    <button
      onClick={showHide}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "yellow",
  text: "click here",
};
Button.propTypes = {
  text: PropTypes.string,
  col: PropTypes.string,
};
export default Button;
