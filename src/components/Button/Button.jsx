import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonText, buttonStyle } = props;

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
