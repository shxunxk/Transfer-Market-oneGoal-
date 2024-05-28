import React, { useState, useEffect } from 'react';

const newsItems = [
  {
    id: 1,
    title: 'News Item 1',
    content: 'Content for news item 1.',
    image: 'https://via.placeholder.com/800x400.png?text=News+1',
  },
  {
    id: 2,
    title: 'News Item 2',
    content: 'Content for news item 2.',
    image: 'https://via.placeholder.com/800x400.png?text=News+2',
  },
  {
    id: 3,
    title: 'News Item 3',
    content: 'Content for news item 3.',
    image: 'https://via.placeholder.com/800x400.png?text=News+3',
  },
];

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {newsItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <h2 className="text-white text-2xl">{item.title}</h2>
            <p className="text-white">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
