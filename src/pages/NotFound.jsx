import { Link } from 'react-router-dom';
import ROUTES from 'utils/routes';

export default function NotFound () {
  return (
    <div className="fw-bolder text-center">
      <div>
        <h2>404: Страница не найдена</h2>
        <br />
        <Link to={ROUTES.HOME}>Вернуться на Главную</Link>
      </div>
    </div>
  );
};
