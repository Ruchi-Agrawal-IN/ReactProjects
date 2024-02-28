import {  useRef } from "react";
import TodoItems from "./TodoItems";
const TodoList = () => {
    
    const inputRef = useRef(null);
    const additem = ()=>{
        console.log('add task clicked')
        //console.log(inputRef.current.value);
    }
    
  return(
    <div className="todoMain" >
        <div className="todoHeader"> 
        <h1>To Do List</h1>
        </div>
        <div className="formContainer">
            <form className="inputForm" onSubmit={additem}>
                <input ref={inputRef} className="taskInput" placeholder="Type your task here!" ></input>
                <button className="addTask" type="submit">Add Task</button>
            </form>
        </div>
        <div className="taskList">
        <TodoItems/>
        </div>
            
    </div>

   
   
  );

  
}

export default TodoList



