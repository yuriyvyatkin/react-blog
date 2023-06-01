import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postsActions } from 'redux/actions';
import './SortBar.css';
const { sortPosts } = postsActions;

export default function SortBar() {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState('');

  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sortPosts(sortOption));
  };

  const handleReset = () => {
    setSortOption('');
    dispatch(sortPosts(''));
  };

  return (
    <Form>
      <Form.Group className="sort-bar d-flex mb-3">
        <Form.Select
          className="sort-select"
          value={sortOption}
          name="option"
          onChange={handleChange}
        >
          <option value="">None</option>
          <option value="a-z">A to Z</option>
          <option value="z-a">Z to A</option>
        </Form.Select>
        <button
          type="submit"
          className="sort-bar__sort-button btn btn-primary ml-2"
          onClick={handleSubmit}
        >
          Sort
        </button>
        {sortOption && (
          <button
            type="button"
            className="sort-bar__reset-button btn btn-danger ml-2"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </Form.Group>
    </Form>
  );
}
