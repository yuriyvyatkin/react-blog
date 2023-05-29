import Alert from 'components/Alert';
import Spinner from 'components/Spinner';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { commentsActions } from 'redux/actions';
import Comments from './Comments';
import './CustomCard.css';
const { getComments } = commentsActions;

export default function CustomCard({ id, title, body }) {
  const dispatch = useDispatch();
  const { loading, data, error, postId } = useSelector(
    (state) => state.comments,
  );

  let comments;

  if (id === postId) {
    if (loading) {
      comments = <Spinner />;
    } else if (error) {
      comments = <Alert>{error}</Alert>;
    } else {
      comments = <Comments data={data} />;
    }
  }

  const handleClick = () => {
    dispatch(getComments(id));
  };

  return (
    <Col className="mb-4">
      <Card>
        <div className="d-flex align-items-center justify-content-center pt-3">
          <Link to="/user/1">
            <div className="avatar d-flex align-items-center justify-content-center rounded-circle bg-gray p-2"></div>
          </Link>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button
            className="mt-auto"
            variant="primary"
            onClick={handleClick}
          >
            Комментарии
          </Button>
          {comments}
        </Card.Body>
      </Card>
    </Col>
  );
}
