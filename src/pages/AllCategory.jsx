import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category-list`
    );
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    setCategories(jsonResponse);
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
    fetchCategories();
  }, [fetchCategories]);
  return (
    <div>
      {/* Nav bar */}

      {/* Main */}
      <div className="container mx-auto min-h-[83vh] p-4 font-karla">
        <span className="text-lg dark:text-white">Categories</span>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 my-2">
          {categories.map((c) => (
            <div
              key={c}
              className="bg-gray-100 dark:bg-slate-600 dark:text-white px-4 py-4 font-karla mr-2 mb-2"
            >
              <div className="text-lg capitalize">{c}</div>
              <Link
                to={`/Category/${c}`}
                className="hover:underline text-blue-500"
              >
                View products
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default AllCategory;
