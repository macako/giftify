import { render, screen } from '@testing-library/react';
import { GifCard } from '../../src/components';

describe('<GifCard />', () => {
  const title = 'Naruto';
  const url = 'http://localhost/naruto.jpg';

  test('should match with the snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should display the image with the URL and ALT indicated', () => {
    render(<GifCard title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');

    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test('should display title', () => {
    render(<GifCard title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should display no title', () => {
    render(<GifCard title={''} url={url} />);

    expect(screen.getByText('no title')).toBeTruthy();
  });
});
