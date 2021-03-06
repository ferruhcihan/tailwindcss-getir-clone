import { useState, useEffect } from "react";
import categoryData from "../api/categories.json";
import Category from "components/ui/Category";
import Title from "components/ui/Title";

const Categories = () => {
  const [categories, setCategories] = useState([]) as any;

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-10">
          {categories?.map((category: any, index: number) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
