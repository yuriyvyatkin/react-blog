import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postsActions } from 'redux/actions';
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
    <Form className="sort-bar">
      <Form.Group className="d-flex align-items-start mb-3">
        <div className="sort-bar__input-wrapper">
          <Form.Select
            className="sort-bar__select"
            value={sortOption}
            name="option"
            onChange={handleChange}
          >
            <option value="">Исходный</option>
            <option value="a-z">от A до Z</option>
            <option value="z-a">от Z до A</option>
          </Form.Select>
          <Form.Text className="sort-bar__select-hint text-muted">
            * порядок постов
          </Form.Text>
        </div>
        <button
          type="submit"
          className="sort-bar__submit-button btn btn-primary ms-3"
          onClick={handleSubmit}
        >
          Применить
        </button>
        {sortOption && (
          <button
            type="button"
            className="sort-bar__reset-button btn btn-danger ms-3"
            onClick={handleReset}
          >
            Сброс
          </button>
        )}
      </Form.Group>
    </Form>
  );
}
