/* eslint-disable react-hooks/exhaustive-deps */
import CustomAlert from 'components/CustomAlert';
import Spinner from 'components/Spinner';
import { useEffect, useLayoutEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'redux/actions';
const { getUser, deleteUserData } = userActions;

export default function User({ userId }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const userData = data && data[0];

  useLayoutEffect(() => {
    dispatch(deleteUserData());
  }, []);

  useEffect(() => {
    if (!data) {
      dispatch(getUser(userId));
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          {error && <CustomAlert>{'Произошла ошибка: ' + error}</CustomAlert>}
          {!loading && !userData && !error && (
            <CustomAlert>{'Пользователь не найден.'}</CustomAlert>
          )}
          {!loading && userData && (
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mb-4">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>{userData.name}</Card.Title>
                    <Card.Text>Ник: {userData.username}</Card.Text>
                    <Card.Text>Почта: {userData.email}</Card.Text>
                    <Card.Text>Телефон: {userData.phone}</Card.Text>
                    <Card.Text>Сайт: {userData.website}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      )}
    </>
  );
}
