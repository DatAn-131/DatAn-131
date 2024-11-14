import { Outlet } from "react-router-dom";
import Navbar from "../NabBar";
import Footer from "../Footer";
import Cart from "../../pages/Cart";
import LoginModal from "../../pages/LoginModal";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Cart />
      <LoginModal />
    </div>
  );
};

export default Layout;
