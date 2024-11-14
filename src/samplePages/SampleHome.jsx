import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdSupportAgent,
} from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import RatingStar from "../components/RatingStart";

const SampleHome = () => {
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
        {/* Hero  */}
        <div className="bg-[#e3edf6] dark:bg-slate-600 font-lora">
          <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
            <div className="flex items-center">
              <div className="max-w-[450px] space-y-4">
                <p className="text-black dark:text-white">
                  Starting At <span className="font-bold">$999</span>
                </p>
                <h2 className="text-black font-bold text-4xl md:text-5xl dark:text-white">
                  The best notebook collection 2024
                </h2>
                <h3 className="text-2xl dark:text-white">
                  Exclusive offer <span className="text-red-600">-10%</span> off
                  this week
                </h3>
                <a
                  data-test="hero-btn"
                  className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div>
              <img src="/hero.png" alt="hero" className="ml-auto" />
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
          <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
            <TbTruckDelivery className="text-4xl dark:text-white" />
            <div>
              <h2 className="font-medium text-xl dark:text-white">
                Free Delivery
              </h2>
              <p className="text-gray-600 dark:text-white">
                Orders from all item
              </p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
            <RiRefund2Fill className="text-4xl dark:text-white" />
            <div>
              <h2 className="font-medium text-xl dark:text-white">
                Return & Refund
              </h2>
              <p className="text-gray-600 dark:text-white">
                Money back guarantee
              </p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
            <TbDiscount className="text-4xl dark:text-white" />
            <div>
              <h2 className="font-medium text-xl dark:text-white">
                Member Discount
              </h2>
              <p className="text-gray-600 dark:text-white">On order over $99</p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
            <MdSupportAgent className="text-4xl dark:text-white" />
            <div>
              <h2 className="font-medium text-xl dark:text-white">
                Support 24/7
              </h2>
              <p className="text-gray-600 dark:text-white">
                Contact us 24 hours a day
              </p>
            </div>
          </div>
        </div>
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
      {/* Footer */}
      <div className="bg-blue-500 text-white p-4 text-center mt-auto">
        <div>&copy; Copyright | All Rights Reserved</div>
      </div>
    </div>
  );
};

export default SampleHome;
