import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const SampleAllCategory = () => {
  return (
    <div>
      {/* Nav bar */}
      <div className="py-4 bg-white dark:bg-slate-800 top-0 sticky z-10 shadow-lg font-karla">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a
              className="text-4xl font-bold dark:text-white"
              data-test="main-logo"
            >
              Shopify
            </a>
            <div className="lg:flex hidden w-full max-w-[500px]">
              <input
                type="text"
                placeholder="Search for a product..."
                className="border-2 border-blue-500 px-6 py-2 w-full dark:text-white dark:bg-slate-800"
              />
              <div className="bg-blue-500 text-white text-[26px] grid place-items-center px-4">
                <BsSearch />
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 items-center dark:text-white">
              <a className="text-xl font-bold" data-test="main-products">
                Products
              </a>
              <a className="text-xl font-bold" data-test="main-categories">
                Categories
              </a>
              <div className="flex items-center gap-2">
                <img
                  src="https://robohash.org/Terry.png?set=set4"
                  alt="avatar"
                  className="w-6"
                />
                <FaUser className="text-gray-500 text-2xl dark:text-white" />
                <div className="text-gray-500 text-2xl">
                  <span
                    className="cursor-pointer hover:opacity-85 dark:text-white"
                    data-test="login-btn"
                  >
                    Login
                  </span>
                </div>
              </div>
              <div
                className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
                data-test="cart-btn"
              >
                <AiOutlineShoppingCart className="dark:text-white" />
                <div
                  className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                  data-test="cart-item-count"
                >
                  {999}
                </div>
              </div>
              <div className="flex">
                <MdOutlineLightMode className="cursor-pointer" size={30} />
                <MdOutlineDarkMode className="cursor-pointer" size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main */}
      <div className="container mx-auto min-h-[83vh] p-4 font-karla">
        <span className="text-lg dark:text-white">Categories</span>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 my-2">
          <div className="bg-gray-100 dark:bg-slate-600 dark:text-white px-4 py-4 font-karla mr-2 mb-2">
            <div className="text-lg">{"Category 1"}</div>
            <a className="hover:underline text-blue-500">View products</a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-blue-500 text-white p-4 text-center mt-auto">
        <div>&copy; Copyright | All Rights Reserved</div>
      </div>
    </div>
  );
};

export default SampleAllCategory;
