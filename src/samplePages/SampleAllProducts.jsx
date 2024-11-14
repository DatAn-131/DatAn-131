import { AiOutlineShoppingCart } from "react-icons/ai";
import RatingStar from "../components/RatingStart";
import { BsSearch } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const SampleAllProducts = () => {
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
                <div
                  className="border border-gray-200 font-lato"
                  data-test="product-card"
                >
                  <div className="text-center border-b border-gray-200">
                    <a>
                      <img
                        src={
                          "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                        }
                        className="inline-block h-60 transition-transform duration-200 hover:scale-110"
                      />
                    </a>
                  </div>
                  <div className="px-8 pt-4">
                    <p className="text-gray-500 text-[14px] font-medium dark:text-white">
                      beauty
                    </p>
                    <a className="font-semibold hover:underline dark:text-white">
                      Essence Mascara Lash Princess
                    </a>
                  </div>
                  <div className="px-8">
                    <RatingStar rating={2.5} />
                  </div>
                  <div className="flex items-center justify-between px-8 pb-4">
                    <div className="leading-3">
                      <h2 className="font-medium text-blue-500 text-xl">
                        ${(99.99).toFixed(2)}
                      </h2>
                      <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                        ${99}
                      </span>
                      <span className="text-sm font-semibold dark:text-white">
                        -{10}%
                      </span>
                    </div>
                    <button
                      type="button"
                      className="flex items-center space-x-2 hover:bg-blue-500 text-white py-2 px-4 rounded bg-pink-500"
                      data-test="add-cart-btn"
                    >
                      <AiOutlineShoppingCart />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

export default SampleAllProducts;
