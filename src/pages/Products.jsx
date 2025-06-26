import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../Components/FilterSection";
import Loading from "../assets/img/flat-hourglass.gif";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";
import Pagination from "../Components/Pagination";

const Products = () => {
  const { data, fetchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [Category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setpriceRange] = useState([0, 5000]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0,0)
  }, []);

  const pageHandler = (SelectedPage) => {
    setpage(SelectedPage);

  };

  // FILTER LOGIC with correct keys
  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (Category === "All" || item.category === Category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );
  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">
              {/*  Filter Section */}
              <FilterSection
                search={search}
                setSearch={setSearch}
                Category={Category}
                setCategory={setCategory}
                brand={brand}
                setbrand={setBrand}
                priceRange={priceRange}
                setpriceRange={setpriceRange}
              />

              {filteredData?.length > 0 ? (
                <div className="flex flex-col justify-center items-center">
                  {" "}
                  <div className="grid grid-cols-4 gap-7 mt-10">
                    {filteredData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => (
                        <ProductCard key={index} product={product} />
                      ))}
                  </div>
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10"> </div>
              )}

              {/*  Filtered Products */}
            </div>
          </>
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
      <Footer />
    </div>
  );
};

export default Products;
