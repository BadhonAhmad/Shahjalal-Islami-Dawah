import React from "react";

export const TeacherCard = ({ imgSrc, name, description }) => {
  return (
    <div className="mx-2 my-2 group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 h-[380px] sm:h-[400px]">
        <div className="h-[60%] overflow-hidden">
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-emerald-800 mb-1">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
