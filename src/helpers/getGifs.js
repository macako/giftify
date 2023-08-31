const apiKey = '80c1XnmX6uGJG6ZQIg6sFc3mvgMBXYVB';

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

  const request = await fetch(url);

  const { data } = await request.json();

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title.trim(),
    url: image.images.downsized_medium.url,
  }));

  return gifs;
};
