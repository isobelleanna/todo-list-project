import React from "react";
import "./TodoList.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import Message from "../../components/Message/Message";
import Form from "../../components/Form/Form";
import Nav from "../Nav/Nav";

const TodoList = ({
  handleSubmit,
  activeList,
  todoArr,
  checked,
  onCheckboxChange,
  handleDelete,
  onReset,
}) => {
  return (
    <div className="todo-list">
      <Nav onReset={onReset} />
      <Form handleSubmit={handleSubmit} />
      {todoArr.map((item, index) => (
        <ItemCard
          key={item.id}
          label={item.item}
          checked={checked}
          onCheckboxChange={onCheckboxChange}
          handleDelete={handleDelete}
          id={index}
        />
      ))}

      <Message activeList={activeList} />
    </div>
  );
};

export default TodoList;
