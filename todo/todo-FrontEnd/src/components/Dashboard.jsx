import Container from "react-bootstrap/Container";
import { Row, Col,Button } from "react-bootstrap";
import CustomCard from "./CustomCard";

const Dashboard = () => {
  return (
    <>

        <Container className="bg-secondary">

        <div className="d-flex justify-content-between bg-primary">
            <h2>Task List</h2>
            <a href="#" className="btn rounded bg-success ">Add New</a>
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
        </Container>
    </>
  );
};

export default Dashboard;
