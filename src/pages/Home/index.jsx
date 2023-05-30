import CardsTile from 'components/CardsTile';
import Pagination from 'components/CustomPagination';

export default function Home() {
  return (
    <>
      <CardsTile />
      <Pagination cardsPerPage={10} maxConsecutiveItems={7} />
    </>
  );
}
