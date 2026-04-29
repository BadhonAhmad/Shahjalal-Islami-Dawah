import React, { useContext } from 'react';
import Slider from "react-slick";
import { TeacherCard } from '../TeacherCard/TeacherCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from '../../Context/DataContext';

const TeacherAnm = () => {
  const { teachers } = useContext(DataContext);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (!teachers) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline-block relative">
            শিক্ষক মণ্ডলী
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-2 w-20 h-1 bg-emerald-500 rounded-full" />
          </h2>
        </div>

        <div className="mt-6 [&_.slick-prev]:before:text-gray-600 [&_.slick-next]:before:text-gray-600 [&_.slick-prev]:z-10 [&_.slick-next]:z-10 [&_.slick-dots]:bottom-[-40px]">
          <Slider {...settings}>
            {teachers.map((a, i) => (
              <TeacherCard
                imgSrc={a.image}
                name={a.fullName}
                description={a.designation}
                key={i}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TeacherAnm;
