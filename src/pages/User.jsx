import BackButton from 'components/BackButton';
import CardsTile from 'components/CardsTile';
import UserInfo from 'components/UserInfo';
import { useParams } from 'react-router-dom';

export default function User() {
  const { userId } = useParams();

  return (
    <>
      <BackButton />
      <UserInfo userId={userId} />
      <CardsTile userId={userId} />
    </>
  );
}
