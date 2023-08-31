export const GifCard = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title || 'no title'}</p>
    </div>
  );
};
