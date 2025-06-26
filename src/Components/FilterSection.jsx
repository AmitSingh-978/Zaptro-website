import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  brand,
  setbrand,
  priceRange,
  setpriceRange,
  Category,
  setCategory,
}) => {
  const { CategoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-18 p-4 rounded-md h-max">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 rounded-md border-gray-400 border-2 w-full"
      />

      {/* 📂 Category Section */}
      <h1 className="font-semibold mt-5 text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {CategoryOnlyData?.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="checkbox"
              name={item}
              value={item}
              checked={Category === item}
              onChange={() =>
                setCategory(Category === item ? "All" : item)
              }
            />
            <label
              onClick={() =>
                setCategory(Category === item ? "All" : item)
              }
              className="cursor-pointer uppercase"
            >
              {item}
            </label>
          </div>
        ))}
      </div>

      {/* 🏷️ Brand Section */}
      <h1 className="font-semibold mt-5 text-xl mb-3">Brand</h1>
      <select
        className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
        value={brand}
        onChange={(e) => setbrand(e.target.value)}
      >
        {brandOnlyData?.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>

      {/* 💰 Price Range Section */}
      <h1 className="font-semibold mt-5 text-xl mb-3">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label>
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          min={priceRange[0]}
          max={5000}
          value={priceRange[1]}
          onChange={(e) =>
            setpriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      {/* 🔁 Reset Button */}
      <button
        className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setbrand("All");
          setpriceRange([0, 5000]);
        }}
      >
        Reset Filter
      </button>
    </div>
  );
};

export default FilterSection;
