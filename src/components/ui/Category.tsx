import React from "react";

interface ICategory {
  category: any;
}

const Category = ({ category: { id, title, image } }: ICategory) => {
  return (
    <a href="#" className="flex flex-col items-center text-center p-4">
      <img src={image} alt={title} />
      <span>{title}</span>
    </a>
  );
};

export default Category;
