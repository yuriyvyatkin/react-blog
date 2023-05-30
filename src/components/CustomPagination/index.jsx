/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useSelector } from 'react-redux';
import './CustomPagination.css';

export default function CustomPagination({
  cardsPerPage,
  maxConsecutiveItems,
}) {
  // const [offset, setOffset] = useState(0);
  const { data } = useSelector((state) => state.posts);
  const [activePage, setActivePage] = useState(1);
  const [items, setItems] = useState([]);

  const handleItemClick = (event) => {
    const pageNumber = Number(event.currentTarget.dataset.pageNumber);
    setActivePage(pageNumber);
  };

  const getPaginationItems = (
    startNumber,
    pagesNumber,
    activePage,
    prevPaginationItems,
    lastPaginationItems,
  ) => {
    let items = [...prevPaginationItems];

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

    items.push(...lastPaginationItems);

    return items;
  };

  useEffect(() => {
    if (data !== null) {
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
      } else if (pagesNumber <= maxConsecutiveItems) {
        newItems = getPaginationItems(
          1,
          pagesNumber,
          activePage,
          prevPaginationItems,
          lastPaginationItems,
        );
      } else {
        newItems = getPaginationItems(
          1,
          pagesNumber,
          activePage,
          prevPaginationItems,
          lastPaginationItems,
        );
      }

      setItems(newItems);
    }
  }, [data, cardsPerPage, activePage]);

  //   return (
  //     <Pagination>
  //       <Pagination.First active={activePage === 1} onClick={() => setActivePage(1)} />
  //       <Pagination.Prev disabled={activePage === 1} />
  //       <Pagination.Item>{1}</Pagination.Item>
  //       <Pagination.Ellipsis />

  //       <Pagination.Item>{10}</Pagination.Item>
  //       <Pagination.Item>{11}</Pagination.Item>
  //       <Pagination.Item active>{12}</Pagination.Item>
  //       <Pagination.Item>{13}</Pagination.Item>
  //       <Pagination.Item disabled>{14}</Pagination.Item>

  //       <Pagination.Ellipsis />
  //       <Pagination.Item>{20}</Pagination.Item>
  //       <Pagination.Next />
  //       <Pagination.Last />
  //     </Pagination>
  //   );

  return <Pagination>{items}</Pagination>;
}
