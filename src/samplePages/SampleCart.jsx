import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const SampleCart = () => {
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
      {/* Side bar card */}
      <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
        <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla dark:bg-slate-600 dark:text-white">
          <h1 className="font-bold text-xl mb-1">Checkout</h1>
          <p className="leading-4 mb-3">
            Welcome to the checkout section. This is being a development
            project, I haven&apos;t implemented any payment related task. If you
            click the cancel button you&apos;ll go back to the cart segment.
            Clicking confirm button will consider your order confirmed, payment
            done & also order delivered successfully. Another thing to mention,
            order history hasn&apos;t been developed due to not having a proper
            backend api.
          </p>
          <div className="flex items-center space-x-2">
            <span className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1">
              Cancel
            </span>
            <span
              className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1"
              data-test="confirm-order-btn"
            >
              Confirm
            </span>
          </div>
        </div>
        <div
          className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla dark:bg-slate-600 dark:text-white"
          data-test="cart-container"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-2xl">Your Cart</h3>
            <RxCross1
              className="text-[24px] cursor-pointer hover:opacity-70"
              data-test="cart-close"
            />
          </div>
          <div className="mt-6 space-y-2">
            <div className="grid grid-cols-7 gap-3 border items-center">
              <img
                src={
                  "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png"
                }
                alt="thumbnail"
                className="h-20 col-span-2"
              />
              <div className="col-span-3">
                <h3 className="font-bold leading-4">Name</h3>
                <div className="flex space-x-2 items-center">
                  <h3 className="font-semibold">${123}</h3>
                  <span className="text-xs">-{90}%</span>
                </div>

                <div className="flex items-center space-x-1">
                  <IoIosRemoveCircleOutline
                    className="cursor-pointer hover:opacity-80"
                    data-test="cart-reduce-btn"
                  />
                  <span data-test="cart-item-quantity">{9}</span>
                  <IoIosAddCircleOutline
                    className="cursor-pointer hover:opacity-80"
                    data-test="cart-increase-btn"
                  />
                </div>
              </div>
              <div className="font-bold col-span-2">
                <span data-test="cart-item-price">${(1000).toFixed(2)}</span>
                <RiDeleteBin6Line
                  className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
                  data-test="cart-remove-btn"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
              <img src="/emptyCart.jpg" alt="empty" className="w-40" />
              <p className="text-center text-xl my-2">Your cart is empty</p>
            </div>
          </div>
          <>
            <div className="flex items-center justify-between p-2">
              <h2 className="font-bold text-2xl">Total</h2>
              <h2 className="font-bold text-2xl">${10000}</h2>
            </div>
            <button
              type="button"
              data-test="checkout-btn"
              className="w-full text-center text-white bg-blue-500 py-2 my-4 rounded font-bold text-xl hover:bg-blue-700"
            >
              CHECKOUT
            </button>
          </>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-500 text-white p-4 text-center mt-auto">
        <div>&copy; Copyright | All Rights Reserved</div>
      </div>
    </div>
  );
};

export default SampleCart;
