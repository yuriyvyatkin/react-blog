import './Comments.css';

export default function CustomCard({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="comments overflow-auto w-100 mt-3">
      <ul className="list-group">
        {data.map(({ id, email, body }) => (
          <li key={id} className="list-group-item">
            {body}
          </li>
        ))}
      </ul>
    </div>
  );
}
