import Avatar from 'components/Avatar';
import CustomAlert from 'components/CustomAlert';
import Spinner from 'components/Spinner';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { commentsActions } from 'redux/actions';
import Comments from './Comments';
import './CustomCard.css';
const { getComments } = commentsActions;

export default function CustomCard({ id, title, body, userId, avatar }) {
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
            <Link to={`/user/${userId}?avatar=${avatar}`}>
              <Avatar className={'card__avatar'} avatar={avatar} />
            </Link>
          ) : (
            <Avatar className={'card__avatar '} avatar={avatar} />
          )}
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="card__content">
            <h5 className="card__content__header fst-italic">Заголовок поста: </h5>
            <Card.Title className="card__title fw-bold">{title}</Card.Title>
            <h5 className="card__content__header fst-italic">Аннотация: </h5>
            <Card.Text className="card__body">{body}</Card.Text>
          </div>
          <Button className="mt-auto" variant="primary" onClick={handleClick}>
            Комментарии
          </Button>
          {comments}
        </Card.Body>
      </Card>
    </Col>
  );
}
