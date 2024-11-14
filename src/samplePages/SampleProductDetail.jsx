import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  MdFavoriteBorder,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import RatingStar from "../components/RatingStart";
import { FaHandHoldingDollar } from "react-icons/fa6";
import Reviews from "../components/Reviews";
const lorem =
  "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.";

const SampleProductDetail = () => {
  const product = {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    discountPercentage: 0.32,
    rating: 4.85,
    stock: 17,
    tags: ["fragrances", "perfumes"],
    brand: "Calvin Klein",
    sku: "DZM2JQZE",
    weight: 5,
    dimensions: {
      width: 11.53,
      height: 14.44,
      depth: 6.81,
    },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Sophia Brown",
        reviewerEmail: "sophia.brown@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Very disappointed!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Madison Collins",
        reviewerEmail: "madison.collins@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Poor quality!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Maya Reed",
        reviewerEmail: "maya.reed@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 20,
    meta: {
      createdAt: "2024-05-23T08:56:21.619Z",
      updatedAt: "2024-05-23T08:56:21.619Z",
      barcode: "2210136215089",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  };
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
      <div className="container mx-auto pt-8 dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 font-karla">
          <div className="space-y-2">
            <img src={product.images[0]} alt="selected" className="h-80" />
            <div className="flex space-x-1 items-center">
              {product.images.map((_img, index) => (
                <img
                  src={_img}
                  key={_img}
                  alt="thumb"
                  className={`w-12 cursor-pointer hover:border-2 hover:border-black ${
                    index === 0 ? "border-2 border-black" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="px-2">
            <h2 className="text-2xl">{product?.title}</h2>
            {product?.rating && <RatingStar rating={product?.rating} />}
            <div className="mt-1">
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
            </div>
            <table className="mt-2">
              <tbody>
                <tr>
                  <td className="pr-2 font-bold">Brand</td>
                  <td>{product?.brand}</td>
                </tr>
                <tr>
                  <td className="pr-2 font-bold">Category</td>
                  <td>{product?.category}</td>
                </tr>
                <tr>
                  <td className="pr-2 font-bold">Stock</td>
                  <td>{product?.stock}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2">
              <h2 className="font-bold">About the product</h2>
              <p className="leading-5">
                {product?.description} {lorem}
              </p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 hover:bg-pink-700 text-white p-2 rounded bg-pink-500"
              >
                <AiOutlineShoppingCart />
                <span>ADD TO CART</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                <FaHandHoldingDollar />
                <span>BUY NOW</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
              >
                <MdFavoriteBorder />
                <span>ADD TO WISHLIST</span>
              </button>
            </div>
          </div>
          {product && <Reviews />}
        </div>
        <hr className="mt-4" />
        {/* Similar Products */}
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
        <br />
      </div>
      {/* Footer */}
      <div className="bg-blue-500 text-white p-4 text-center mt-auto">
        <div>&copy; Copyright | All Rights Reserved</div>
      </div>
    </div>
  );
};

export default SampleProductDetail;
