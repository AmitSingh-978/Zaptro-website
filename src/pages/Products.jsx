import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../Components/FilterSection";
import Loading from "../assets/img/flat-hourglass.gif";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { data, fetchAllProducts } = getData();
  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection />
            <div className="grid grid-cols-4 gap-7 mt-10">{
              data?.map((Products,index)=>{
                return <ProductCard key={index} product={Products} />
              })
              }</div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <img
              src={Loading}
              alt="Loading..."
              className="w-20 h-20 object-contain filter sepia brightness-200 hue-rotate-[330deg]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
