import CardsTile from 'components/CardsTile';
import UserInfo from 'components/UserInfo';
import { useLocation, useParams } from 'react-router-dom';

export default function User() {
  const { userId } = useParams();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const userPageAvatar = query.get('avatar');

  return (
    <>
      <UserInfo userId={userId} avatarURL={userPageAvatar} />
      <CardsTile userPageId={userId} userPageAvatar={userPageAvatar} />
    </>
  );
}
