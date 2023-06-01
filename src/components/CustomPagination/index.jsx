/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from 'redux/actions';
import './CustomPagination.css';
import getPaginationItems from './getPaginationItems';
import scrollUp from './scrollUp';
const { setPostsChunk } = postsActions;

export default function CustomPagination({
  cardsPerPage,
  maxConsecutiveItems,
}) {
  const dispatch = useDispatch();
  const { data, filteredData } = useSelector((state) => state.posts);
  const [activePage, setActivePage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data !== null) {
      const actualData = filteredData || data;
      const startItemIndex = (activePage - 1) * cardsPerPage;
      const lastItemIndex = startItemIndex + cardsPerPage;
      const dataChunk = actualData.slice(startItemIndex, lastItemIndex);
      dispatch(setPostsChunk(dataChunk));

      const pagesNumber = Math.ceil(actualData.length / cardsPerPage);

      setItems([]);

      let newItems = [];

      if (pagesNumber === 1) {
        return;
      }

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

      if (pagesNumber <= maxConsecutiveItems) {
        newItems = getPaginationItems({
          startNumber: 1,
          pagesNumber,
          activePage,
          activePageSetter: setActivePage,
          prevPaginationItems,
          lastPaginationItems,
        });
      } else {
        if (activePage < maxConsecutiveItems) {
          newItems = getPaginationItems({
            startNumber: 1,
            pagesNumber: maxConsecutiveItems,
            activePage,
            activePageSetter: setActivePage,
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
              activePageSetter: setActivePage,
              lastPaginationItems,
            }),
          );
        } else if (activePage > pagesNumber - maxConsecutiveItems + 1) {
          newItems = getPaginationItems({
            startNumber: 1,
            pagesNumber: 1,
            activePage,
            activePageSetter: setActivePage,
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
              activePageSetter: setActivePage,
              lastPaginationItems,
            }),
          );
        } else {
          newItems = getPaginationItems({
            startNumber: 1,
            pagesNumber: 1,
            activePage,
            activePageSetter: setActivePage,
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
              activePageSetter: setActivePage,
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
              activePageSetter: setActivePage,
              lastPaginationItems,
            }),
          );
        }
      }

      setItems(newItems);
      setTimeout(() => {
        scrollUp();
      }, 100);
    }
  }, [data, filteredData, cardsPerPage, activePage]);

  return <Pagination>{items}</Pagination>;
}
