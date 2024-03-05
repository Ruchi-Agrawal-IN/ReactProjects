import {useForm} from 'react-hook-form';
const TaskForm = ({ onSave, onclose }) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) =>{
    onSave(data);
    onclose();
  }
  return (
    <>
      <div className="formWrapper m-3">
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              {...register('title')}
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
             {...register('note')}
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
              {...register('date')}
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
               {...register('time')}
              type="time"
              className="form-control"
              id="selectedTime"
            />
          </div>
          <select
             {...register('priority')}
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
                 {...register('isCompleted')}
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
