import Products from "../components/Products";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=16&skip=10`
    );
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    setProducts(jsonResponse.products);
  }, []);
  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch(
    //     `https://dummyjson.com/products?limit=16&skip=10`
    //   );
    //   const jsonResponse = await response.json();
    //   // console.log(jsonResponse);
    //   setProducts(jsonResponse.products);
    // };

    // fetchData();
    fetchProducts();
  }, [fetchProducts]);
  // console.log(products);
  return (
    <div>
      {/* Nav bar */}

      {/* Main */}
      <div className="dark:bg-slate-800 pb-5">
        {/* Hero  */}
        <Hero />
        {/* Features */}
        <Features />
        {/* Product list 1 */}

        <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
          <div className="sm:flex items-center justify-between">
            <h2 className="text-4xl font-medium font-lora dark:text-white">
              Trending Products
            </h2>
          </div>
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
            data-test="product-list-container"
          >
            {products.slice(0, 8).map((p) => (
              <Products key={p.id} ProductInfo={p} />
            ))}
          </div>
        </div>
        {/* Banner */}
        <div className="container mt-8 mx-auto px-4 md:flex font-lora">
          <img src="/banner.jpg" alt="banner" className="md:w-1/2" />
          <div className="bg-[#e3edf6] dark:bg-slate-600 dark:text-white md:w-1/2 flex flex-col items-center text-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-1">
              Don&apos;t miss the offer
            </h1>
            <h2 className="text-3xl font-semibold mb-4">Grab it now</h2>
            <a
              to="/product/4"
              className="inline-block bg-white dark:bg-slate-800 rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
              data-test="banner-btn"
            >
              Shop Now
            </a>
          </div>
        </div>
        {/* Product list 2 */}
        <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
          <div className="sm:flex items-center justify-between">
            <h2 className="text-4xl font-medium font-lora dark:text-white">
              New Arrivals
            </h2>
          </div>
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
            data-test="product-list-container"
          >
            {/* Single Product */}
            {products.slice(8, 16).map((p) => (
              <Products key={p.id} ProductInfo={p} />
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};
export default Home;
