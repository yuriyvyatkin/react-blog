/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import './CustomPagination.css';
import { postsActions } from 'redux/actions';
const { setPostsChunk } = postsActions;

export default function CustomPagination({
  cardsPerPage,
  maxConsecutiveItems,
}) {
  const dispatch = useDispatch();
  const { data,  } = useSelector((state) => state.posts);
  const [activePage, setActivePage] = useState(1);
  const [items, setItems] = useState([]);

  const getPaginationItems = ({
    startNumber,
    pagesNumber,
    activePage,
    prevPaginationItems,
    lastPaginationItems,
  }) => {
    const handleItemClick = (event) => {
      const pageNumber = Number(event.currentTarget.dataset.pageNumber);
      setActivePage(pageNumber);
    };
    let items = [];

    if (prevPaginationItems) {
      items.push(...prevPaginationItems);
    }

    for (let number = startNumber; number <= pagesNumber; number++) {
      const newItem = (
        <Pagination.Item
          key={number}
          active={number === activePage}
          data-page-number={number}
          onClick={handleItemClick}
        >
          {number}
        </Pagination.Item>
      );

      items.push(newItem);
    }

    if (lastPaginationItems) {
      items.push(...lastPaginationItems);
    }

    return items;
  };

  useEffect(() => {
    if (data !== null) {
      const startItemIndex = (activePage - 1) * cardsPerPage + 1;
      const lastItemIndex = startItemIndex + cardsPerPage;
      dispatch(setPostsChunk(data.slice(startItemIndex, lastItemIndex)));

      const pagesNumber = Math.ceil(data.length / cardsPerPage);
      const prevPaginationItems = [
        <Pagination.First
          key={'prev-1'}
          disabled={activePage === 1}
          onClick={() => setActivePage(1)}
        />,
        <Pagination.Prev
          key={'prev-2'}
          disabled={activePage === 1}
          onClick={() => {
            setActivePage((prevPage) => prevPage - 1);
          }}
        />,
      ];
      const lastPaginationItems = [
        <Pagination.Next
          key={'last-1'}
          disabled={activePage === pagesNumber}
          onClick={() => {
            setActivePage((prevPage) => prevPage + 1);
          }}
        />,
        <Pagination.Last
          key={'last-2'}
          disabled={activePage === pagesNumber}
          onClick={() => setActivePage(pagesNumber)}
        />,
      ];

      setItems([
        <Pagination.First
          active={activePage === 1}
          onClick={() => setActivePage(1)}
        />,
      ]);

      let newItems = [];

      if (pagesNumber === 1) {
        return null;
      }

      if (pagesNumber <= maxConsecutiveItems) {
        newItems = getPaginationItems({
          startNumber: 1,
          pagesNumber,
          activePage,
          prevPaginationItems,
          lastPaginationItems,
        });
      } else {
        if (activePage < maxConsecutiveItems) {
          newItems = getPaginationItems({
            startNumber: 1,
            pagesNumber: maxConsecutiveItems,
            activePage,
            prevPaginationItems,
          });
          newItems.push(
            <Pagination.Ellipsis className="ellipsis" key={'ellipsis'} />,
          );
          newItems.push(
            getPaginationItems({
              startNumber: pagesNumber,
              pagesNumber,
              activePage,
              lastPaginationItems,
            }),
          );
        } else if (activePage > pagesNumber - maxConsecutiveItems + 1) {
          newItems = getPaginationItems({
            startNumber: 1,
            pagesNumber: 1,
            activePage,
            prevPaginationItems,
          });
          newItems.push(
            <Pagination.Ellipsis className="ellipsis" key={'ellipsis'} />,
          );
          newItems.push(
            getPaginationItems({
              startNumber: pagesNumber - maxConsecutiveItems + 1,
              pagesNumber,
              activePage,
              lastPaginationItems,
            }),
          );
        } else {
          newItems = getPaginationItems({
            startNumber: 1,
            pagesNumber: 1,
            activePage,
            prevPaginationItems,
          });
          newItems.push(
            <Pagination.Ellipsis className="ellipsis" key={'ellipsis-1'} />,
          );
          newItems.push(
            getPaginationItems({
              startNumber: activePage - 1,
              pagesNumber: activePage + 1,
              activePage,
            }),
          );
          newItems.push(
            <Pagination.Ellipsis className="ellipsis" key={'ellipsis-2'} />,
          );
          newItems.push(
            getPaginationItems({
              startNumber: pagesNumber,
              pagesNumber,
              activePage,
              lastPaginationItems,
            }),
          );
        }
      }

      setItems(newItems);
    }
  }, [data, cardsPerPage, activePage]);

  return <Pagination>{items}</Pagination>;
}
