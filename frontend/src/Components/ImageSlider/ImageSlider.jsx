import React, { useState, useEffect } from 'react';
import poster1 from '../Assets/Poster_1.jpg';
import poster2 from '../Assets/Poster_2.jpg';
import poster3 from '../Assets/Poster_3.jpg';
import poster4 from '../Assets/Poster_4.jpg';
import poster5 from '../Assets/Poster_5.jpg';
import poster6 from '../Assets/Poster_6.jpg';
import poster7 from '../Assets/Poster_7.jpg';
import poster8 from '../Assets/Poster_8.jpg';
import poster9 from '../Assets/Poster_9.jpg';
import poster10 from '../Assets/poster_10.jpg';

const ImageSlider = () => {
  const [count, setCount] = useState(0);
  const [forward, setForward] = useState(true);

  const images = [
    poster1, poster2, poster3, poster4, poster5,
    poster6, poster7, poster8, poster9, poster10
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (forward) {
        if (count === images.length - 1) {
          setForward(false);
        } else {
          setCount(count + 1);
        }
      } else {
        if (count === 0) {
          setForward(true);
        } else {
          setCount(count - 1);
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [count, forward, images.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="flex h-full transition-all duration-1000 ease-in-out"
          style={{ transform: `translateX(-${count * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`Poster ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCount(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === count
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
