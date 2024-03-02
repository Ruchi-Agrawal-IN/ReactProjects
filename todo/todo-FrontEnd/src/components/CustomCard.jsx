
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaEdit, FaHeart } from "react-icons/fa";
const CustomCard = ({title, count}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body >
        <div className="d-flex justify-content-between fs-4 ">
            <span className="rounded bg-warning p-1 lh-1 mb-3">0</span>
            <FaHeart className="me-4"/>
        </div>
      <Card.Title>{title}</Card.Title>
      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
      {/* <Card.Text>
        {title}
      </Card.Text> */}
      {/* <Card.Link href="#">Card Link</Card.Link> */}
     
    </Card.Body>
  </Card>
  )
}

export default CustomCard