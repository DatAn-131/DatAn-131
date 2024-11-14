import Products from "../components/Products";
import { useCallback, useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProductInfo] = useState([]);

  const fetchProducts = useCallback(async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    setProductInfo(jsonResponse.products);
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
  return (
    <div>
      {/* Nav bar */}

      {/* Main */}
      <div className="dark:bg-slate-800 pb-5">
        <div className="container mx-auto min-h-[83vh] p-4 font-karla">
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg dark:text-white">Products</span>
                <select className="border border-black dark:border-white rounded p-1 dark:text-white dark:bg-slate-600">
                  <option value="default">Default</option>
                  <option value="asc">Price (low to high)</option>
                  <option value="desc">Price (high to low)</option>
                </select>
              </div>
              <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {/* Single product */}
                {products.map((p) => (
                  <Products key={p.id} ProductInfo={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default AllProducts;
