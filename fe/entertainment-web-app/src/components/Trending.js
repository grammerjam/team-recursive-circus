import React, { useState, useEffect, useRef } from 'react';
import movieIcon from '../assets/icon-category-movie.svg';
import bookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import bookmarkFull from '../assets/icon-bookmark-full.svg';

const importAll = (r) => {
  return Object.fromEntries(
    r.keys().map((item) => {
      const formattedTitle = item
        .replace('./', '')
        .replace(/[_-]+/g, ' ')
        .replace(/\/trending\/large\.jpg$/, '')
        .replace(/^\w/, (c) => c.toUpperCase());
      return [item.replace('./', ''), {
        path: r(item),
        title: formattedTitle
      }];
    })
  );
};

const images = importAll(require.context('../assets/thumbnails/', true, /trending\/large\.jpg$/));

const initialItems = Object.values(images).map((image, index) => ({
  id: index + 1,
  imageUrl: image.path,
  year: '2019',
  title: image.title,
  rating: 'PG',
  isBookmarked: false
}));

const Trending = () => {
  const [items, setItems] = useState([]);
  const scrollContainer = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setItems(initialItems), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleBookmark = (id) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const scrollAmount = e.key === 'ArrowRight' ? 200 : -200;
      scrollContainer.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="trending-section text-white">
      <h2 className="text-2xl font-bold p-4">Trending</h2>
      <div 
        className="flex overflow-x-scroll scrollbar-hide"
        ref={scrollContainer}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {items.map(item => (
          <TrendingItem key={item.id} item={item} onBookmark={toggleBookmark} />
        ))}
      </div>
    </div>
  );
};

const TrendingItem = ({ item, onBookmark }) => (
  <div className="flex-none w-[470px] h-[230px] mr-4 rounded-lg overflow-hidden relative">
    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
    <button 
      onClick={() => onBookmark(item.id)} 
      className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2"
      aria-label={item.isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <img src={item.isBookmarked ? bookmarkFull : bookmarkEmpty} alt="" className="w-4 h-4" />
    </button>
    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
      <div className="flex items-center text-sm mb-1">
        <span>{item.year}</span>
        <span className="mx-2">•</span>
        <img src={movieIcon} alt="Movie Icon" className="w-4 h-4 mr-2" />
        <span>Movie</span>
        <span className="mx-2">•</span>
        <span>{item.rating}</span>
      </div>
      <h3 className="text-xl font-bold truncate">{item.title}</h3>
    </div>
  </div>
);

export default Trending;