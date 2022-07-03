import "./App.scss";
import TodoList from "./containers/TodoList/TodoList";
import { useState } from "react";

/// if I had more time I would finish the styling  and make the delete button work

function App() {
  const [todoList, setTodoList] = useState([]);
  const [listActive, setListActive] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: todoList.length + 1,
      item: event.target[0].value,
    };
    setTodoList([...todoList, newItem]);
    event.target.reset();
    if (todoList.length === 0) {
      setListActive(true);
    }
  };

  const onReset = () => {
    setTodoList([]);
    setListActive(false);
  };

  const onCheckboxChange = () => {
    setChecked(!checked);
  };
  const handleDelete = (event) => {
    const index = event.target.id;
    const newArr = [...todoList];
    newArr.splice(index, 1);
    setTodoList(newArr);
  };

  return (
    <div className="app">
      <TodoList
        onReset={onReset}
        handleSubmit={handleSubmit}
        activeList={listActive}
        todoArr={todoList}
        checked={checked}
        onCheckboxChange={onCheckboxChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
