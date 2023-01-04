import Image from 'next/image';
import React, { useState } from 'react';

interface CarImageSliderTypes {
  imageUrls: string[];
}

const CarImageSlider = ({ imageUrls }: CarImageSliderTypes) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className='relative w-full h-64 overflow-hidden bg-gray-700 rounded-md shadow-md'>
      <button
        onClick={handlePreviousClick}
        className='absolute top-0 left-0 w-1/2 p-4 h-full rounded-l-md text-3xl font-bold text-white z-10'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className='absolute top-0 right-0 w-1/2 justify-end flex items-center p-4 h-full rounded-r-md text-3xl font-bold text-white z-10'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>

      <Image src={imageUrls[currentIndex]} alt='Car' fill />
    </div>
  );
};

export default CarImageSlider;
