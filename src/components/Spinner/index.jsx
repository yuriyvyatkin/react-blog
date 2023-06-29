import { Spinner } from 'react-bootstrap';

export default function Preloader() {
  return (
    <div className="d-flex justify-content-center pt-3"><Spinner animation="border" variant="info" role="status" /></div>
  );
}
