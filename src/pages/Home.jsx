import CardsTile from 'components/CardsTile';
import Pagination from 'components/CustomPagination';
import SearchBar from 'components/SearchBar';
import SortBar from 'components/SortBar';

export default function Home() {
  return (
    <>
      <SortBar />
      <SearchBar />
      <CardsTile />
      <Pagination cardsPerPage={12} maxConsecutiveItems={5} />
    </>
  );
}
