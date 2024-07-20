import React from 'react';

const CategoryList = ({ categories }) => {
    return (
      <div className="flex flex-col h-64 justify-between">
        {categories.map((category, index) => (
          <h3 key={index} className="flex justify-start items-center">
            <img src={category.imgSrc} alt={category.name} className="pr-2" />
            {category.name}
          </h3>
        ))}
      </div>
    );
  };

export default CategoryList;