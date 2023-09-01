import { useState } from 'react';
import PropTypes from 'prop-types';

const empty = '';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState(empty);

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length < 1) return;

    onNewCategory(inputValue.trim());
    setInputValue(empty);
  };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Search Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
