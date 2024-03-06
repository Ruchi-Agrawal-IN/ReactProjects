import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { GetAllTasks, DeleteTask } from "../apiCalls/Tasks";
import { useEffect, useState } from "react";

function TasksList() {
  const [taskList, setTaskList] = useState([]);
  const getData = async () => {
    try {
      const response = await GetAllTasks();
      console.log({ respose: response.data });
      if (response.data.success) {
        setTaskList(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ListGroup as="ol" numbered>
      {taskList.length > 0 &&
        taskList.map((task, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{task.title}</div>
              {"Task note"}
            </div>
            <Badge bg="primary" pill>
              {task.priority}
            </Badge>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default TasksList;
