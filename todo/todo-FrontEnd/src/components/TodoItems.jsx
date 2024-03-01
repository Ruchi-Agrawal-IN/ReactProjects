import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";
import ConfirmationPopup from "./popup/ConfirmationPopup";
import { useState } from "react";

const TodoItems = ({ Tasks, handleDeleteTask, handleEditTask }) => {
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  if (Tasks.length === 0) return;
  const handleEditClick = () => {
    setIsEditPopupOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true);
  };

  const handleEditConfirm = () => {
    // Perform edit logic here
    setIsEditPopupOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Perform deletion logic here
    setIsDeletePopupOpen(false);
  };

  const handlePopupClose = () => {
    setIsEditPopupOpen(false);
    setIsDeletePopupOpen(false);
  };


  return (
    <>
      <h3 style={{ display: "flex", justifyContent: "center" }}>Todo Items</h3>

      <ul>
        {Tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <div className="btnContainer">
            <button id="editBtn" onClick={handleEditClick} ><FaEdit/></button>
              <button id="deleteBtn" onClick={() => handleDeleteTask(task.id)}>
                <FaTrash />
              </button>
            </div>
            {isEditPopupOpen && (
              <div className="popupOverlay">
                <ConfirmationPopup
                  isOpen={isEditPopupOpen}
                  onClose={handlePopupClose}
                  onConfirm={handleEditConfirm}
                  title="Edit Confirmation"
                  message="Are you sure you want to edit?"
                />
              </div>
            )}
       
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
