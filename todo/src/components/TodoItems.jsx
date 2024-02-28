import PropTypes from "prop-types";

const TodoItems = ({ Tasks }) => {
  return (
    <>
      <h3 style={{ display: "flex", justifyContent: "center" }}>Todo Items</h3>
      <ul>
        {Tasks.map((task, index) => (
          <li className="task" key={index}>
            {task}
            <div className="btnContainer">
              <button className="btn">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
TodoItems.propTypes = {
  Tasks: PropTypes.array,
};
export default TodoItems;
