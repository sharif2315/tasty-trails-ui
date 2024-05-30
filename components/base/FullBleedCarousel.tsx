import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const FullBleedCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center">
      
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${(currentIndex * 100) / 2}%)` }}>

        {images.map((image, index) => (
          <div key={index} className="w-3/5 flex-shrink-0 mx-2">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        ))}
    
      </div>

      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none">
        &lt;
      </button>

      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none">
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div key={index} className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default FullBleedCarousel;
