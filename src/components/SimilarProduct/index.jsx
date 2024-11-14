import { useCallback, useEffect, useState } from "react";
import Products from "../Products";

const SimilarProducts = ({ originProduct }) => {
  const [products, setProducts] = useState([]);
  const fetchProduct = useCallback(async () => {
    if (originProduct.category) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${originProduct.category}`
      );
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      setProducts(jsonResponse.products);
    }
  }, [originProduct.category]);
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
    fetchProduct();
  }, [fetchProduct]);
  return (
    <div>
      <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
        <div className="sm:flex items-center justify-between">
          <h2 className="text-4xl font-medium font-lora dark:text-white">
            Similar Products
          </h2>
        </div>
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
          data-test="product-list-container"
        >
          {/* Single Product */}
          {products
            .filter((p) => p.id !== originProduct.id)
            .map((p) => (
              <Products key={p.id} ProductInfo={p} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
