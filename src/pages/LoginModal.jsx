import { FaUnlock } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal } from "../store/Slices/commonSlices";
import { useState } from "react";
import { login } from "../store/Slices/authSlice";

const LoginModal = () => {
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const isModalOpen = useSelector(
    (state) => state.commonSlice.isModalLoginOpen
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeLoginModal());
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.userName === "_an.tdat_" && formData.passWord === "1312003") {
      alert("login success");
      dispatch(login(formData.userName));
      dispatch(closeLoginModal());
      setFormData({
        userName: "",
        passWord: "",
      });
      //login success
    } else {
      alert("login error");
      // login error
    }
  };

  // const isOpenLogin = false;
  if (isModalOpen) {
    return (
      <div>
        {/* Nav bar */}

        {/* Main */}
        {/*Login Modal */}

        <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center font-karla">
          <div
            className="relative border shadow rounded p-8 bg-white max-w-md w-full z-40 dark:bg-slate-800 dark:text-white"
            data-test="login-container"
          >
            <RxCross1
              onClick={handleClick}
              className="absolute cursor-pointer right-5 top-5 hover:opacity-85"
            />
            {/* Register */}
            {isRegister ? (
              <>
                {" "}
                <div className="flex mb-2 space-x-2 justify-center items-center">
                  <GiArchiveRegister />
                  <h3 className="font-bold text-center text-xl">Register</h3>
                  <GiArchiveRegister />
                </div>
                <p className="leading-4">
                  This is a hobby project for development purpose only. No well
                  suited backend has been used here. Please use <b>_an.tdat_</b>{" "}
                  as username & <b>1312003</b> as password. You can find these
                  credentials in the placeholder also.{" "}
                  <span
                    onClick={() => setIsRegister(false)}
                    className="text-blue-500 cursor-pointer hover:underline"
                  >
                    Go to login
                  </span>
                </p>
              </>
            ) : (
              <>
                {" "}
                <div className="flex mb-2 space-x-2 justify-center items-center">
                  <FaUnlock />
                  <h3 className="font-bold text-center text-2xl">Login</h3>
                  <FaUnlock />
                </div>
                <form
                  className="flex flex-col space-y-3"
                  onSubmit={handleSubmit}
                >
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={formData.userName}
                      name="userName"
                      data-test="input-username"
                      type="text"
                      placeholder="Your username here... (_an.tdat_)"
                      className="border w-full border-black py-2 px-8 rounded dark:bg-slate-600"
                    />
                    <RiUser3Fill className="absolute top-3 left-2 text-lg" />
                  </div>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={formData.passWord}
                      name="passWord"
                      data-test="input-password"
                      type="password"
                      placeholder="Your password here... (1312003
                      )"
                      className="border w-full border-black py-2 px-8 rounded dark:bg-slate-600"
                    />
                    <RiLockPasswordFill className="absolute top-3 left-2 text-lg" />
                  </div>
                  <input
                    data-test="input-submit"
                    type="submit"
                    value="Submit"
                    className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 cursor-pointer"
                  />
                </form>
                <p className="text-center mt-1">
                  No Account?{" "}
                  <span
                    onClick={() => setIsRegister(true)}
                    className="text-blue-500 cursor-pointer"
                  >
                    Register
                  </span>
                </p>
              </>
            )}
            {/* login */}
          </div>
        </div>

        {/* Footer */}
      </div>
    );
  }
  return null;
};

export default LoginModal;
