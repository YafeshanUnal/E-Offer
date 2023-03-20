import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Yafeshan",
    email: "Ünal",
    token: "",
  },
  isLoggedIn: false,
  login: {
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  products: [
    {
      id: 1,
      name: "Samsung Galaxy S21",
      price: 1000,
      image: "samsung",
    },
    {
      id: 2,
      name: "Iphone 12",
      price: 1000,
      image: "iphone",
    },
    {
      id: 3,
      name: "Huawei P40",
      price: 1000,
      image: "huawei",
    },
  ],
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
    loginLoading: (state) => {
      state.login.isLoading = true;
      state.login.isError = false;
      state.login.errorMessage = "";
    },
    loginSuccess: (state, { payload }) => {
      state.login.isLoading = false;
      state.login.isError = false;
      state.login.errorMessage = "";
      state.user = payload;
      state.isLoggedIn = true;
    },
    loginError: (state, { payload }) => {
      state.login.isLoading = false;
      state.login.isError = true;
      state.login.errorMessage = payload;
    },
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    clearProducts: (state) => {
      state.products = initialState.products;
    },
  },
});

export const {
  setUser,
  clearUser,
  loginLoading,
  loginSuccess,
  loginError,
  setProducts,
  clearProducts,
} = appSlice.actions;

export default appSlice.reducer;

export const login = (username, password) => async (dispatch) => {
  dispatch(loginLoading());
  try {
    const response = await fetch("http://localhost:8000/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.error) {
      dispatch(loginError(data.error));
    } else {
      dispatch(loginSuccess(data));
      document.cookie = `token=${data.token}`;
    }
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(clearUser());
};

export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    console.log(error);
  }
};
