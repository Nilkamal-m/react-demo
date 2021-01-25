import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn-outline"];
const SIZE = ["btn-medium", "btn-large"];

export const Button = (props) => {
  const { children, type, onClick, buttonStyle, buttonSize } = props;
  const chechkButtonStyles = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const chechkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <button
      className={`btn ${chechkButtonStyles} ${chechkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
