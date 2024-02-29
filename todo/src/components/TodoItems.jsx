import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";
const TodoItems = ({ Tasks, handleDeleteTask, handleEditTask }) => {
  console.log({ tasks: Tasks });
  if (Tasks.length === 0) return;
  return (
    <>
      <h3 style={{ display: "flex", justifyContent: "center" }}>Todo Items</h3>

      <ul>
        {Tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <div className="btnContainer">
              <button id="editBtn" onClick={() => handleEditTask(task.id)}>
                {" "}
                <FaEdit />
              </button>
              <button id="deleteBtn" onClick={() => handleDeleteTask(task.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
TodoItems.propTypes = {
  Tasks: PropTypes.array,
  handleDeleteTask: PropTypes.func,
  handleEditTask: PropTypes.func,
};
export default TodoItems;
