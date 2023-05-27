/* eslint-disable react-hooks/exhaustive-deps */
import Spinner from 'components/Spinner';
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from 'redux/actions';
const { getPosts } = postsActions;

export default function CardsTile() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!data) {
      dispatch(getPosts());
    }
  }, []);

  return (
    <>
      {error && (
        <Alert key="warning" variant="warning">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
      {loading && !error ? (
        <Spinner />
      ) : (
        <div className="posts-container">
          {data &&
            data.slice(0, 10).map((post, i) => {
              return (
                <div key={i} className="each-post">
                  <b>Post#{i.toString()}</b> - {post.title} - {post.user.name}
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
