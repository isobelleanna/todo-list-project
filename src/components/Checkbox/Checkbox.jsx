import React from "react";
import "./Checkbox.scss";

const CheckBox = ({ checked, onCheckboxChange }) => {
  return (
    <div>
      <label htmlFor="">
        <input
          className="input"
          type="checkbox"
          checked={checked}
          onChange={onCheckboxChange}
        />
      </label>
    </div>
  );
};

export default CheckBox;
