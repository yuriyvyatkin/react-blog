import CustomAlert from 'components/CustomAlert';
import Avatar from 'components/Avatar';
import Spinner from 'components/Spinner';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { commentsActions } from 'redux/actions';
import Comments from './Comments';
import './CustomCard.css';
const { getComments } = commentsActions;

export default function CustomCard({ id, title, body, userId }) {
  const dispatch = useDispatch();
  const { loading, data, error, postId } = useSelector(
    (state) => state.comments,
  );

  let comments;

  if (id === postId) {
    if (loading) {
      comments = <Spinner />;
    } else if (error) {
      comments = <CustomAlert>{'Произошла ошибка: ' + error}</CustomAlert>;
    } else {
      comments = <Comments data={data} />;
    }
  }

  const handleClick = () => {
    dispatch(getComments(id));
  };

  return (
    <Col className="mb-4">
      <Card className="card">
        <div className="d-flex align-items-center justify-content-center pt-3">
          {userId ? (
            <Link to={`/user/${userId}`}>
              <Avatar className={'card__avatar'} />
            </Link>
          ) : (
            <Avatar className={'card__avatar'} />
          )}
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button className="mt-auto" variant="primary" onClick={handleClick}>
            Комментарии
          </Button>
          {comments}
        </Card.Body>
      </Card>
    </Col>
  );
}
