import React from "react";
import "./Form.scss";

const Form = ({ handleSubmit, getInput }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <input
          className="form__input"
          type="text"
          name="todo"
          onInput={getInput}
        />
      </label>
      <input className="form__submit" type="submit" value="➕" />
    </form>
  );
};

export default Form;
