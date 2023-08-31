import { useState } from 'react';

const empty = '';

export const AddCategories = ({ onNewCategory, setCategories }) => {
  const [inputValue, setinputValue] = useState(empty);

  const handleInputChange = ({ target }) => setinputValue(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length < 1) return;

    //setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setinputValue(empty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search Gifs'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
