import { expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('<AddCategory />', () => {
  const inputValue = 'naruto';
  const onNewCategory = jest.fn();

  test('should change textbox value', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test('should call onNewCategory if the input has value', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if the input has no value', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: ' ' } });
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
