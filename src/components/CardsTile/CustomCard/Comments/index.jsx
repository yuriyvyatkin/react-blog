import { ListGroup } from 'react-bootstrap';
import './Comments.css';

export default function CustomCard({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="card__comments overflow-auto w-100 mt-3">
      <ListGroup>
        {data.map(({ id, email, body }) => (
          <ListGroup.Item key={id}>
            <h5>
              <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                {email}
              </a>
            </h5>
            <span>{body}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
