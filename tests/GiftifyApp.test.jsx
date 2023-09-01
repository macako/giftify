import { expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { GiftifyApp } from '../src/GiftifyApp';
import { useFetchGifs } from '../src/hooks/useFetchGifs';

jest.mock('../src/hooks/useFetchGifs');

describe('<GiftifyApp />', () => {
  const category = 'naruto';

  test('should display Loading...', (done) => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: false,
    });

    render(<GiftifyApp />);

    expect(screen.findByText('Loading...')).toBeTruthy();
    expect(screen.findByText(category)).toBeTruthy();
    done();
  });

  test('should display naruto gifs as initial state', () => {
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

    render(<GiftifyApp />);

    expect(screen.findByText('Loading...')).toBeTruthy();
    expect(screen.findByText(category)).toBeTruthy();
  });
});
