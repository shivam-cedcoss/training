import React from "react";
import "./input.css";
const Input = (props) => {
  const { variant = "small", children, ...rest } = props;
  return (
    <input
      className={`input ${variant}`}
      {...rest}
      type="text"
      placeholder="Enter Text"
    />
  );
};
export default Input;
