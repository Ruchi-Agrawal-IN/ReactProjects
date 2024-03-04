import React from 'react'
import TaskForm from '../TaskForm'
import { Modal } from 'bootstrap'
const TaskModel = ({onSave}) => {
    const handleSave = async(task)=>{
        console.log('handleSave called')
    //     const modalElement = document.getElementById('taskModel');
    //     const modal = Modal.getOrCreateInstance(modalElement);
    // modal.show();
        await onSave(task);
    }
    return (
      <div className="modal fade" id="taskModel" tabIndex="-1" aria-labelledby="taskmodellabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="taskmodellabel">Add New Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <TaskForm onSave={(task)=>handleSave(task)}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TaskModel;
