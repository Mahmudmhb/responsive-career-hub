import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategoris] = useState([]);
  useEffect(() => {
    const url = "/categories.json";
    fetch(url)
      .then((res) => res.json())
      .then((categories) => setCategoris(categories));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-semibold my-10 max-w-6xl mx-auto">
          Job Category List
        </h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className=" md:flex md:max-w-6xl mx-auto gap-4 my-10">
          {categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
