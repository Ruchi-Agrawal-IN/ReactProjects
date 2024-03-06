<<<<<<< Updated upstream
import { useRef, useState } from "react";

const TaskForm = ({ onSave }) => {
  const [task, setTask] = useState({
    title: "",
    note: "",
    date: "",
    time: "",
    priority: "",
    attachment: "",
    iscompleted: false,
  });

  const titleRef = useRef(null);
  const noteRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const priorityRef = useRef(null);
  const iscompletedRef = useRef(null);

  const handlesubmit = async(e) => {
    e.preventDefault();
    setTask({
      title: titleRef.current.value,
      note: noteRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      priority: priorityRef.current.value,
      iscompleted: iscompletedRef.current.checked, // Use checked property for checkbox
    });

    await onSave(task);
    console.log("handlesubmit on form task call for task", task);
=======
import {useForm} from 'react-hook-form';
import { AddTask } from "../apiCalls/Tasks";

const TaskForm = ({ onSave, onclose }) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = async (data) => {
    await AddTask(data);
    onSave(data);
    onclose();
>>>>>>> Stashed changes
  };
  return (
    <>
      <div className="formWrapper m-3">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              ref={titleRef}
              type="text"
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="detail" className="form-label">
              Note
            </label>
            <input
              ref={noteRef}
              type="textarea"
              className="form-control"
              id="detail"
              style={{ height: "100px" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="selectedDate" className="form-label">
              Date
            </label>
            <input
              ref={dateRef}
              type="date"
              className="form-control"
              id="selectedDate"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="selectedTime" className="form-label">
              Time
            </label>
            <input
              ref={timeRef}
              type="time"
              className="form-control"
              id="selectedTime"
            />
          </div>
          <select
            ref={priorityRef}
            className="mb-3  form-select "
            defaultValue={3}
          >
            <option>Select Priority</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>

          <div className="input-group mb-3">
            <div className="input-group-text">
              <input
                ref={iscompletedRef}
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <label
              className="form-control"
              aria-label="Text input with checkbox"
            >
              IsCompleted
            </label>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
