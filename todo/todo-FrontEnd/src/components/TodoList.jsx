import { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
import { GetAllTasks, AddTask, DeleteTask } from "../apiCalls/Tasks";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const getData = async () => {
    try {
      const response = await GetAllTasks();
      console.log({ respose: response.data });
      if (response.data.success) {
        setTasks(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const additem = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      console.log(inputRef.current.value);
      AddTask({ text: inputRef.current.value })
        .then((res) => {
          setTasks(res);
        })
        .catch((error) => console.log(error.message));
    }
  };
  async function handleDeleteTask(key) {
    // const filteredTasks = tasks.filter(function (ta) {
    //   return ta.id !== key;
    // });
    console.log("deleteTask Key", key);
    await DeleteTask(key);
    getData();
  }

  function handleEditTask(key) {
    console.log("editTask called for task with key:", key);
  }

  return (
    <div className="todoMain">
      <div className="todoHeader">
        <h2>To Do List</h2>
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
        <TodoItems
          Tasks={tasks}
          handleDeleteTask={(e) => handleDeleteTask(e)}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
};

export default TodoList;
