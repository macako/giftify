import { expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid />', () => {
  const category = 'naruto';

  test('should display loading...', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('should display gif cards using useFetchGifs', () => {
    const gifs = [
      {
        id: 'abcd',
        title: `title test 1 ${category}`,
        url: `http://localhost.com/${category}1.jpg`,
      },
      {
        id: 'efgh',
        title: `title test 2 ${category}`,
        url: `http://localhost.com/${category}2.jpg`,
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
