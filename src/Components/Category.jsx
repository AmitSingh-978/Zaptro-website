import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
// import Category from './Category';

const Category = () => {
  const { CategoryOnlyData } = getData();

  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);
  return (
    <div className="bg-[#101829]">
      <div className="mix-w-7xl mx-auto flex gap-4 items-center justify-around">
        {CategoryOnlyData?.map((item, index) => {
          return (
            <div key={index}>
              <button className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 mt-10 mb-10 rounded-xl ">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
