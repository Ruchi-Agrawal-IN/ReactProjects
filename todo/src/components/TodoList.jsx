import { useRef, useState } from "react";
import TodoItems from "./TodoItems";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const additem = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      console.log(inputRef.current.value);
      setTasks([...tasks, inputRef.current.value]);
      inputRef.current.value = "";
      console.log({ tasks: tasks });
    }
  };

  return (
    <div className="todoMain">
      <div className="todoHeader">
        <h1>To Do List</h1>
      </div>
      <div id="formContainer">
        <form className="inputForm" onSubmit={(e) => additem(e)}>
          <input
            ref={inputRef}
            className="taskInput"
            placeholder="Type your task here!"
          ></input>
          <button className="addTask" type="submit">
            Add Task
          </button>
        </form>
      </div>
      <div className="taskList">
        <TodoItems Tasks={tasks} />
      </div>
    </div>
  );
};

export default TodoList;
