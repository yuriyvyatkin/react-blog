/* eslint-disable react-hooks/exhaustive-deps */
import CustomAlert from 'components/CustomAlert';
import Spinner from 'components/Spinner';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postsActions } from 'redux/actions';
import './CardsTile.css';
import CustomCard from './CustomCard';
const { getPosts, deletePostsChunk } = postsActions;

export default function CardsTile({ userPageId, userPageAvatar }) {
  const location = useLocation();
  const isUserPage = location.pathname.includes('user');
  const dispatch = useDispatch();
  const { data, dataChunk, loading, error } = useSelector(
    (state) => state.posts,
  );
  const [prevLoading, setPrevLoading] = useState(false);
  const [currentLoading, setCurrentLoading] = useState(loading);

  useLayoutEffect(() => {
    dispatch(deletePostsChunk());
  }, []);

  useEffect(() => {
    if (!data && !isUserPage) {
      dispatch(getPosts());
    }

    if (!dataChunk && isUserPage) {
      setTimeout(() => {
        dispatch(getPosts(userPageId));
      }, 500);
    }
  }, [dataChunk]);

  useEffect(() => {
    setPrevLoading(currentLoading);
    setCurrentLoading(loading);
  }, [loading]);

  const loadingСompleted = prevLoading && !currentLoading;

  console.log(dataChunk);

  return (
    <>
      {loading && <Spinner />}
      <Container>
        {error && <CustomAlert>{'Произошла ошибка: ' + error}</CustomAlert>}
        {loadingСompleted && dataChunk?.length === 0 && (
          <CustomAlert>{'По вашему запросу ничего не найдено.'}</CustomAlert>
        )}
        {dataChunk && (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {dataChunk.map(({ id, title, body, userId, avatar }) => (
              <CustomCard
                key={id}
                id={id}
                title={title}
                body={body}
                userId={userPageId ? null : userId}
                avatar={userPageAvatar || avatar}
              />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
