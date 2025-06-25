import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // ✅ FIXED: Show all image URLs safely (no undefined now)
  console.log(data?.map(item => item.image), "images");

  // 🔄 Fetching all products from API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products?limit=150`
      );
      console.log(res);
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  // 🏷️ Get Unique Categories / Brands
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const CategoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, CategoryOnlyData, brandOnlyData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
