import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [count, setCount] = useState(0);
  const [forward, setForward] = useState(true);

  const goNext = () => {
    setCount((count + 1) % slides.length);
    setForward(true);
  };

  const goPrev = () => {
    setCount((count - 1 + slides.length) % slides.length);
    setForward(false);
  };

  const slides = [
    { src: '/dawah/dawah to non muslim8 (2).jpeg', title: 'অমুসলিমদের মাঝে দাওয়াহ', subtitle: 'প্রজ্ঞার সাথে ইসলামের দাওয়াত পৌঁছে দেওয়া' },
    { src: '/dawah/dawah to non muslim2.jpeg', title: 'অমুসলিমদের মাঝে দাওয়াহ', subtitle: 'সত্যের পথে আহ্বানের মহান কাজ' },
    { src: '/dawah/dawah to non muslim5.jpeg', title: 'অমুসলিমদের মাঝে দাওয়াহ', subtitle: 'হিকমাহর সাথে ইসলামের দাওয়াত পৌঁছে দেওয়া' },
    { src: '/halakah/halakah2.jpeg', title: 'ইলমের হালাকা', subtitle: 'মসজিদভিত্তিক নিয়মিত ইলমের মাহফিল' },
    { src: '/FoodDistribution/foods.jpeg', title: 'খাদ্য বিতরণ', subtitle: 'সুখে-দুঃখে নওমুসলিম ভাইদের পাশে' },
    { src: '/EidGift/EidGiftToNouMuslim.jpeg', title: 'নওমুসলিমদের ঈদের উপহার', subtitle: 'ঈদের আনন্দ সবার মাঝে ছড়িয়ে দেওয়া' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (forward) {
        if (count === slides.length - 1) {
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
  }, [count, forward, slides.length]);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${count * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <img
                src={slide.src}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Previous button */}
        <button
          onClick={goPrev}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white text-xl md:text-2xl transition-all duration-300 backdrop-blur-sm"
        >
          &#8249;
        </button>

        {/* Next button */}
        <button
          onClick={goNext}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white text-xl md:text-2xl transition-all duration-300 backdrop-blur-sm"
        >
          &#8250;
        </button>

        {/* Slide text */}
        <div className="absolute bottom-10 left-0 right-0 text-center px-6 pointer-events-none">
          <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg mb-1 transition-all duration-700">
            {slides[count].title}
          </h2>
          <p className="text-white/90 text-sm md:text-lg drop-shadow-md transition-all duration-700">
            {slides[count].subtitle}
          </p>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
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
