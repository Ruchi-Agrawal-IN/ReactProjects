import Container from "react-bootstrap/Container";
import { Row, Col,Button } from "react-bootstrap";
import CustomCard from "./CustomCard";
import TaskForm from "./TaskForm";
import { useState } from "react";
import TaskModel from "./formModel/TaskModel";
<<<<<<< Updated upstream
=======
import LoginModal from "./formModel/LoginModal";
import TasksList from "./TasksList";
>>>>>>> Stashed changes
const Dashboard = () => {
  // const[showTaskModel, setshowTaskModel]=useState(false)

  const handleSaveTask = (task) => {
    console.log('Saving task with name:', task);
    // Add your save logic here
    //setshowTaskModel(false); // Close the modal after saving
  };
  return (
    <>
<<<<<<< Updated upstream
        <div className="d-flex justify-content-between bg-primary">
            <h2>Task List</h2>
      
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#taskModel"> Add new</button>

            <TaskModel onSave={handleSaveTask} />
        </div>
          <Row>
            <Col sm={12} md={6} lg={4} className="mb-4" >
                <CustomCard title="Today" count="0"/>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-4">
            <CustomCard title="Scheduled" count="0"/>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-4">
            <CustomCard title="All" count="0"/>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-4">
            <CustomCard title="Flagged" count="0"/>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-4">
            <CustomCard title="Completed" count="0"/>
            </Col>
          </Row>
=======
      <div className="d-flex justify-content-between ">
        <h2>Task List</h2>

        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#taskModel"
        >
          {" "}
          Add new
        </button>
        <Button variant="primary" onClick={handleShowLogin}>
          Login
        </Button>
        <LoginModal show={showLoginModal} handleClose={handleCloseLogin} />
        <TaskModel onSave={handleSaveTask} />
      </div>
      <Row>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <CustomCard title="Today" count="0" />
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <CustomCard title="Scheduled" count="0" />
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <CustomCard title="All" count="0" />
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <CustomCard title="Flagged" count="0" />
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <CustomCard title="Completed" count="0" />
        </Col>
      </Row>
      <div>
        <TasksList />
      </div>
>>>>>>> Stashed changes
    </>
  );
};

export default Dashboard;
