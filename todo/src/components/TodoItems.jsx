
const TodoItems = () => {
    const tasks = ["task1", "task2", "task3", "task4", "task5"]
  return (
   <>
   <h3 style={{display:"flex", justifyContent: "center"}}>Todo Items</h3>
   <ul>
    <div>
    {tasks.map(task => 
        (<li className='task'  key={task}>{task}
            <div className="btnContainer">
             <button className="editTask">Edit</button>
            </div>
        </li>)

)}
    
    </div>
   </ul>
   </>
  )
}

export default TodoItems