import { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomCard.css';

export default function CustomCard() {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Col className="mb-4">
      <Card>
        <div className="d-flex align-items-center justify-content-center pt-3">
          <Link to="/user/1">
            <div className="avatar d-flex align-items-center justify-content-center rounded-circle bg-gray p-2"></div>
          </Link>
        </div>
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary" onClick={toggleComments}>
            Комментарии
          </Button>
          {showComments && (
            <div className="comments overflow-auto w-100 mt-3">
              <ul className="list-group">
                <li className="list-group-item">Комментарий 1</li>
                <li className="list-group-item">Комментарий 2</li>
                <li className="list-group-item">Комментарий 3</li>
                <li className="list-group-item">Комментарий 4</li>
                <li className="list-group-item">Комментарий 5</li>
                <li className="list-group-item">Комментарий 6</li>
                <li className="list-group-item">Комментарий 7</li>
                <li className="list-group-item">Комментарий 8</li>
                <li className="list-group-item">Комментарий 9</li>
                <li className="list-group-item">Комментарий 10</li>
              </ul>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
