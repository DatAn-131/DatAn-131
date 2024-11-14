import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const { CategoryType } = useParams();
  const fetchProduct = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${CategoryType}`
    );
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    setProducts(jsonResponse.products);
  }, [CategoryType]);
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
      {/* Nav bar */}

      {/* Main */}
      <div className="container mx-auto min-h-[83vh] p-4 font-karla">
        <div className="flex items-center space-x-2 text-lg dark:text-white">
          <span>Categories</span>
          <span> {">"} </span>
          <span className="font-bold">{CategoryType}</span>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-2">
          {/* Single Product */}
          {products.map((p) => (
            <Products key={p.id} ProductInfo={p} />
          ))}
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default CategoryProducts;
