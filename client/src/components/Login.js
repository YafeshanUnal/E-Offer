import { useState } from "react";
import { useApp } from "../redux/useApp";
import { EyeIcon } from "../assets/icons/EyeIcon";
export const Login = () => {
  const { handleLogin } = useApp();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="">
      <form className="flex flex-col items-center space-y-10 text-white bg-primary-black h-full p-10">
        <h1 className="text-5xl font-bold">
          If you want to see the products, please login
        </h1>
        <label className="text-2xl font-bold">
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-300 p-2 mt-2 rounded-lg w-full ml-4 text-black"
          />
        </label>
        <label className="text-2xl font-bold relative">
          Password
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 p-2 mt-2 rounded-lg w-full ml-4 text-black"
          />
          {/* içine göz ikonu koy ve şifreyi görünür kıl */}
          <button
            className="absolute right-0 bottom-3 text-black "
            onClick={(e) => handleShowPassword(e)}
          >
            <EyeIcon />
          </button>
        </label>
        <button
          type="submit"
          className="text-white font-bold text-2xl px-4 py-2 rounded-3xl mt-4"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
