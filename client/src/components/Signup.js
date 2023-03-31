import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setSignup, loginSuccess } from "../redux/slice";
import { TextField, Button } from "@material-ui/core";
import { useApp } from "../redux/useApp";

export const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    if (password !== confirmPassword) {
      setIsError(true);
      setErrorMessage("Passwords do not match");
      setIsLoading(false);
      return;
    }
    fetch("http://localhost:8000/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
        phone: "1234567890",
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Kaydol Başarılı");
        dispatch(loginSuccess({ name, username, password, isLoggedIn: true }));
      } else {
        alert("Kaydol Başarısız");
      }
    });
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form className="signup__form" onSubmit={handleSignup}>
        <div className="font-bold text-xl mb-3 text-black flex flex-col space-y-4">
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </div>
      </form>
      {isError && <p className="signup__error">{errorMessage}</p>}
    </div>
  );
};
