import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import RatingStar from "../components/RatingStart";
import { FaHandHoldingDollar } from "react-icons/fa6";
import Reviews from "../components/Reviews";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimilarProducts from "../components/SimilarProduct";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../store/Slices/commonSlices";
import { addItemsToCar } from "../store/Slices/carSlice";
const lorem =
  "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.";

const ProductDetail = () => {
  const [product, setProductInfo] = useState({
    images: [],
  });
  const dispatch = useDispatch();

  const { id } = useParams();
  const fetchProductInfo = useCallback(async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    setProductInfo(jsonResponse);
  }, [id]);
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

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
    fetchProductInfo();
  }, [fetchProductInfo]);
  const addToCart = () => {
    if (isLoggedIn) {
      //add current items to cart
      console.log("add to cart");
      dispatch(addItemsToCar(product));
    } else {
      dispatch(openLoginModal());
      //show login
    }
  };

  // const product = {
  //   id: 6,
  //   title: "Calvin Klein CK One",
  //   description:
  //     "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
  //   category: "fragrances",
  //   price: 49.99,
  //   discountPercentage: 0.32,
  //   rating: 4.85,
  //   stock: 17,
  //   tags: ["fragrances", "perfumes"],
  //   brand: "Calvin Klein",
  //   sku: "DZM2JQZE",
  //   weight: 5,
  //   dimensions: {
  //     width: 11.53,
  //     height: 14.44,
  //     depth: 6.81,
  //   },
  //   warrantyInformation: "5 year warranty",
  //   shippingInformation: "Ships overnight",
  //   availabilityStatus: "In Stock",
  //   reviews: [
  //     {
  //       rating: 5,
  //       comment: "Great value for money!",
  //       date: "2024-05-23T08:56:21.619Z",
  //       reviewerName: "Sophia Brown",
  //       reviewerEmail: "sophia.brown@x.dummyjson.com",
  //     },
  //     {
  //       rating: 3,
  //       comment: "Very disappointed!",
  //       date: "2024-05-23T08:56:21.619Z",
  //       reviewerName: "Madison Collins",
  //       reviewerEmail: "madison.collins@x.dummyjson.com",
  //     },
  //     {
  //       rating: 1,
  //       comment: "Poor quality!",
  //       date: "2024-05-23T08:56:21.619Z",
  //       reviewerName: "Maya Reed",
  //       reviewerEmail: "maya.reed@x.dummyjson.com",
  //     },
  //   ],
  //   returnPolicy: "No return policy",
  //   minimumOrderQuantity: 20,
  //   meta: {
  //     createdAt: "2024-05-23T08:56:21.619Z",
  //     updatedAt: "2024-05-23T08:56:21.619Z",
  //     barcode: "2210136215089",
  //     qrCode: "https://assets.dummyjson.com/public/qr-code.png",
  //   },
  //   images: [
  //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
  //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
  //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
  //   ],
  //   thumbnail:
  //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  // };
  return (
    <div>
      {/* Nav bar */}

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
                  ${(product.price / product.discountPercentage).toFixed(2)}
                </h2>
                <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-sm font-semibold dark:text-white">
                  -{product.discountPercentage}%
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
                onClick={addToCart}
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
        <SimilarProducts originProduct={product} />
        <br />
      </div>
      {/* Footer */}
    </div>
  );
};

export default ProductDetail;
