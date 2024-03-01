import { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
import { GetAllTasks, AddTask } from "../apiCalls/Tasks";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  useEffect(()=>{
    const getData = async() =>{
      try {
        const response = await GetAllTasks();
        console.log({response:response.data})
        if(response.data.success){
          setTasks(response.data.data)
          console.log(tasks)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    getData();
  }, [])
  const additem = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      console.log(inputRef.current.value);
      // setTasks([...tasks, { text: inputRef.current.value, id: Date.now() }]);
      // inputRef.current.value = "";
      const response = AddTask(inputRef.current.value).then(res => {

        console.log(`Add Task Api Response `, res.data);
        
      })

    }
  };
  function handleDeleteTask(key) {
    const filteredTasks = tasks.filter(function (ta) {
      return ta.id !== key;
    });
    return setTasks(filteredTasks);
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
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
};

export default TodoList;
