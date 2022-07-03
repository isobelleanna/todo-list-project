import React from "react";
import "./Nav.scss";
import Button from "../../components/Button/Button";

const Nav = ({ onReset }) => {
  return (
    <div className="nav">
      <h1 className="nav__title">My Todos</h1>
      <div onClick={onReset}>
        <Button buttonStyle="button__nav" buttonText="Reset" />
      </div>
    </div>
  );
};

export default Nav;
