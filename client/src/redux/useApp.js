import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./slice";

export function useApp() {
  const user = useSelector((state) => state.app.user);
  const isLoggedIn = useSelector((state) => state.app.isLoggedIn);
  const products = useSelector((state) => state.app.products);
  const loginError = useSelector((state) => state.app.login.errorMessage);
  const signup = useSelector((state) => state.app.signup);
  const dispatch = useDispatch();

  const handleLogin = (username, password) => {
    dispatch(login(username, password));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    isLoggedIn,
    products,
    handleLogin,
    handleLogout,
    loginError,
    signup,
  };
}
