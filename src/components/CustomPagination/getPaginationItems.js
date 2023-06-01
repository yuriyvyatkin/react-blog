import Pagination from 'react-bootstrap/Pagination';

export default function getPaginationItems({
  startNumber,
  pagesNumber,
  activePage,
  activePageSetter,
  prevPaginationItems,
  lastPaginationItems,
}) {
  const handleItemClick = (event) => {
    const pageNumber = Number(event.currentTarget.dataset.pageNumber);
    activePageSetter(pageNumber);
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
}
