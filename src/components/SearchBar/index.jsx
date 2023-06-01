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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="d-flex mb-3">
        {/* <Form.Label>Search bar</Form.Label> */}
        <div className="input-wrapper">
          <Form.Control
            type="text"
            className="search-input"
            placeholder="Start entering the title of the post"
            value={query}
            onChange={handleChange}
          />
          {query && (
            <button
              type="button"
              className="reset-button btn btn-link text-decoration-none"
              onClick={handleReset}
            >
              <span>X</span>
            </button>
          )}
        </div>
        <button type="submit" className="search-button btn btn-primary ml-2">
          Search
        </button>
      </Form.Group>
    </Form>
  );
}
