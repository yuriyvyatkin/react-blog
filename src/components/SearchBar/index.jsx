import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postsActions } from 'redux/actions';
import './SearchBar.css';
const { filterPostsByTitle } = postsActions;

export default function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(filterPostsByTitle(query.trim()));
  };

  const handleReset = () => {
    setQuery('');
    dispatch(filterPostsByTitle(''));
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Form className="search-bar" onSubmit={handleSubmit}>
      <Form.Group className="d-flex mb-3">
        <div className="search-bar__input-wrapper">
          <Form.Control
            type="text"
            className="search-bar__input"
            placeholder="Начните вводить заголовок поста"
            value={query}
            onChange={handleChange}
          />
          {query && (
            <button
              type="button"
              className="search-bar__reset-button btn btn-link text-decoration-none"
              onClick={handleReset}
            >
              <span>X</span>
            </button>
          )}
        </div>
        <button
          type="submit"
          className="search-bar__submit-button btn btn-primary ms-3"
        >
          Поиск
        </button>
      </Form.Group>
    </Form>
  );
}
