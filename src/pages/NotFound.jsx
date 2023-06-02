import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from 'utils/routes';

export default function NotFound () {
  return (
    <div className="fw-bolder text-center">
      <div>
        <h2>404: Page Not found</h2>
        <br />
        <Link to={ROUTES.HOME}>Back to home page</Link>
      </div>
    </div>
  );
};
