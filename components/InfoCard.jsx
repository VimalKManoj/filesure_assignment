import React from 'react';

const InfoCard = ({ iconSrc, title, description, number }) => {
  return (
    <div className="relative flex flex-col items-start p-6 bg-white rounded-lg shadow-md w-full max-w-md mb-6 flex-1">
      <div className="flex items-center mb-4">
        <img src={iconSrc} alt={`${title} icon`} className="w-12 h-12 mr-4" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700 z-20">
        {description}
      </p>
      <div className="absolute right-4 -bottom-16 text-[12rem] font-black text-[#71AF1C]/5">
        {number}
      </div>
    </div>
  );
};

export default InfoCard;
