import React from "react";
import "./ItemCard.scss";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

const ItemCard = ({ label, checked, onCheckboxChange, handleDelete }) => {
  return (
    <div>
      <div className="item-card">
        <Checkbox checked={checked} onCheckboxChange={onCheckboxChange} />
        {checked ? (
          <p className="inactive">{label}</p>
        ) : (
          <p className="active">{label}</p>
        )}
        <div onClick={handleDelete}>
          <Button buttonText="🗑" buttonStyle="button" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
