import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button className="mt-4 w-100" variant="primary" onClick={handleGoBack}>
      Вернуться на главную
    </Button>
  );
}
