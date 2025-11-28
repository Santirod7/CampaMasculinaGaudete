
import React, { useState, useEffect, useCallback } from 'react';
import type { NewsItem } from '../types';

interface NewsCarouselProps {
  items: NewsItem[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000);
    return () => clearInterval(slideInterval);
  }, [goToNext]);
  
  if (!items || items.length === 0) {
    return <div>No news items to display.</div>;
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors" onClick={goToPrevious} aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors" onClick={goToNext} aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="w-full h-full flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h3>
              <p className="text-base md:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'} transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
