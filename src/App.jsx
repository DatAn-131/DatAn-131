import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import AllCategory from "./pages/AllCategory";
import SampleAllCategory from "./samplePages/SampleAllCategory";
import SampleAllProducts from "./samplePages/SampleAllProducts";
import SampleCart from "./samplePages/SampleCart";
import SampleCategoryProducts from "./samplePages/SampleCategoryProducts";
import SampleHome from "./samplePages/SampleHome";
import SampleLoginModal from "./samplePages/SampleLoginModal";
import SampleProductDetail from "./samplePages/SampleProductDetail";
import SampleProfile from "./samplePages/SampleProfile";
import SampleWishList from "./samplePages/SampleWishList";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import LoginModal from "./pages/LoginModal";
import WishList from "./pages/WishList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <AllProducts />,
      },
      {
        path: "/Products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/Category",
        element: <AllCategory />,
      },
      {
        path: "/Category/:CategoryType",
        element: <CategoryProducts />,
      },
      {
        path: "/account",
        element: <Profile />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <SampleAllProducts /> */}
        {/* <SampleAllCategory /> */}
        {/* <SampleProductDetail /> */}
        {/* <SampleCategoryProducts /> */}
        {/* <SampleWishList /> */}
        {/* <SampleProfile /> */}
        {/* <SampleCart /> */}
        {/* <SampleLoginModal /> */}

        {/* <Home /> */}
        {/* <AllCategory /> */}
        {/* <AllProducts /> */}
        {/* <Cart /> */}
        {/* <CategoryProducts /> */}
        {/* <ProductDetail /> */}
        {/* <Profile /> */}
        {/* <LoginModal /> */}
        {/* <WishList /> */}

        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
