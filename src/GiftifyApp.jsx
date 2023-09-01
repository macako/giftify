import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftifyApp = () => {
  const [categories, setCategories] = useState(['naruto']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    return setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Giftify</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
