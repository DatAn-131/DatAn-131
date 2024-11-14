import { useState } from "react";
import {
  MdFavoriteBorder,
  MdOutlineAccountCircle,
  MdOutlineLogout,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/Slices/authSlice";

const AccountDropdown = () => {
  const [isVisible, setVisible] = useState(false);
  const userName = useSelector((state) => state.authSlice.useName);
  const dispatch = useDispatch();
  const handlePopup = () => {
    setVisible((v) => !v);
  };

  const handleLogout = () => {
    hidePopup();
    dispatch(logout());
  };

  const hidePopup = () => {
    setVisible(false);
  };

  return (
    <div className="relative font-karla">
      <div
        className="inline-block cursor-pointer hover:opacity-85 dark:text-white"
        onClick={handlePopup}
        data-test="username-popup"
      >
        {userName}
      </div>
      {isVisible && (
        <div
          className="absolute p-4 left-[-50px] w-40 z-50 mt-2 rounded-md shadow-2xl bg-white ring-1 transition-all ring-black ring-opacity-5 focus:outline-none dark:bg-slate-600 dark:text-white"
          data-test="popup-content-list"
        >
          <table>
            <tbody>
              <tr>
                <td className="text-center">
                  <MdOutlineAccountCircle />
                </td>
                <td className="hover:underline cursor-pointer text-lg pl-2">
                  <Link to="/account" onClick={hidePopup}>
                    Account
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <MdFavoriteBorder />
                </td>
                <td
                  className="hover:underline cursor-pointer text-lg pl-2"
                  data-test="wishlist-container"
                >
                  <Link to="/wishlist" onClick={hidePopup}>
                    Wishlist
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <MdOutlineLogout />
                </td>
                <td
                  className="hover:underline cursor-pointer text-lg pl-2"
                  onClick={handleLogout}
                  data-test="logout-btn"
                >
                  Logout
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
