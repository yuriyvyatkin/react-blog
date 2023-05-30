/* eslint-disable react-hooks/exhaustive-deps */
import CustomAlert from 'components/CustomAlert';
import Spinner from 'components/Spinner';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from 'redux/actions';
import './CardsTile.css';
import CustomCard from './CustomCard';
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
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          {/* {error && <CustomAlert>{error}</CustomAlert>}
          {data && (
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {data.map(({ id, title, body }) => (
                <CustomCard key={id} id={id} title={title} body={body} />
              ))}
            </Row>
          )} */}
        </Container>
        // <div className="posts-container">
        //   {data &&
        //     data.slice(0, 10).map((post, i) => {
        //       return (
        //         <div key={i} className="each-post">
        //           <b>Post#{i.toString()}</b> - {post.title} - {post.user.name}
        //         </div>
        //       );
        //     })}
        // </div>
      )}
    </>
  );
}
