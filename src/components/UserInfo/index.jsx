/* eslint-disable react-hooks/exhaustive-deps */
import BackButton from './BackButton';
import ShowButton from './ShowButton';
import CustomAlert from 'components/CustomAlert';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'redux/actions';
const { getUser, clearUserData } = userActions;

export default function User({ userId, avatarURL }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const userData = data && data[0];
  const [prevLoading, setPrevLoading] = useState(false);
  const [currentLoading, setCurrentLoading] = useState(loading);

  useLayoutEffect(() => {
    dispatch(clearUserData());
  }, []);

  useEffect(() => {
    if (!data) {
      dispatch(getUser(userId));
    }
  }, [data]);

  useEffect(() => {
    setPrevLoading(currentLoading);
    setCurrentLoading(loading);
  }, [loading]);

  const loadingСompleted = prevLoading && !currentLoading;

  return (
    <>
      <Container>
        {error && <CustomAlert>{'Произошла ошибка: ' + error}</CustomAlert>}
        {loadingСompleted && !userData && !error && (
          <CustomAlert>{'Пользователь не найден.'}</CustomAlert>
        )}
        {loadingСompleted && userData && (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mb-4 justify-content-center">
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
              <BackButton />
              <ShowButton avatarURL={avatarURL} />
              <h5 className="mt-4 text-center">Посты автора: </h5>
            </Col>
          </Row>
        )}

      </Container>
    </>
  );
}
