/* eslint-disable react-hooks/exhaustive-deps */
import CustomAlert from 'components/CustomAlert';
import Spinner from 'components/Spinner';
import { useEffect, useLayoutEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postsActions } from 'redux/actions';
import './CardsTile.css';
import CustomCard from './CustomCard';
const { getPosts, deletePostsChunk } = postsActions;

export default function CardsTile({ userId }) {
  const location = useLocation();
  const isUserPage = location.pathname.includes('user');
  const dispatch = useDispatch();
  const { data, dataChunk, filteredData, loading, error } = useSelector(
    (state) => state.posts,
  );

  useLayoutEffect(() => {
    dispatch(deletePostsChunk());
  }, []);

  useEffect(() => {
    if (!data && !isUserPage) {
      dispatch(getPosts());
    }

    if (!dataChunk && isUserPage) {
      dispatch(getPosts(userId));
    }
  }, [dataChunk]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          {error && <CustomAlert>{'Произошла ошибка: ' + error}</CustomAlert>}
          {filteredData && <CustomAlert>{'По вашему запросу ничего не найдено.'}</CustomAlert>}
          {!loading && dataChunk && (
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {dataChunk.map(({ id, title, body, userId }) => (
                <CustomCard
                  key={id}
                  id={id}
                  title={title}
                  body={body}
                  userId={userId}
                />
              ))}
            </Row>
          )}
        </Container>
      )}
    </>
  );
}
