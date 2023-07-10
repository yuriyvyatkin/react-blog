import { Button } from 'react-bootstrap';

export default function ShowButton({ avatarURL }) {
  const handleDownload = () => {
    window.open(avatarURL);
  };

  return (
    <Button className="mt-4 w-100" variant="primary" onClick={handleDownload}>
      Посмотреть NFT
    </Button>
  );
}
