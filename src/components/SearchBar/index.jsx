import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postsActions } from 'redux/actions';
import './SearchBar.css';
const { filterPostsByTitle } = postsActions;

export default function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (trimmedQuery.length) {
      dispatch(filterPostsByTitle(trimmedQuery));
    } else {
      setQuery('');
      inputRef.current.focus();
    }
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
      <Form.Group className="search-bar__group d-flex mb-3">
        <div className="search-bar__input-wrapper">
          <Form.Control
            type="text"
            className="search-bar__input"
            placeholder="Введите заголовок поста или его часть"
            value={query}
            onChange={handleChange}
            ref={inputRef}
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
          className="search-bar__submit-button btn btn-primary"
        >
          Поиск
        </button>
      </Form.Group>
    </Form>
  );
}
