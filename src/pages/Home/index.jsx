import SearchBar from 'components/SearchBar';
import CardsTile from 'components/CardsTile';
import Pagination from 'components/CustomPagination';

export default function Home() {
  return (
    <>
      <SearchBar />
      <CardsTile />
      <Pagination cardsPerPage={12} maxConsecutiveItems={5} />
    </>
  );
}
