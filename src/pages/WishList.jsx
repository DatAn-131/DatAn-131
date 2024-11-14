import { AiOutlineShoppingCart } from "react-icons/ai";
import RatingStar from "../components/RatingStart";

const WishList = () => {
  return (
    <div>
      {/* Nav bar */}

      {/* Main */}
      <div className="container mx-auto font-karla min-h-[83vh]">
        <div className="flex flex-col justify-center items-center p-8">
          <img src="/emptyCart.jpg" className="w-60" alt="empty" />
          <p className="text-center text-xl font-semibold my-2 dark:text-white">
            Your wishlist is empty
          </p>
        </div>
        <hr />
        <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
          <div className="sm:flex items-center justify-between">
            <h2 className="text-4xl font-medium font-lora dark:text-white">
              Your Wishlist
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
    </div>
  );
};

export default WishList;
