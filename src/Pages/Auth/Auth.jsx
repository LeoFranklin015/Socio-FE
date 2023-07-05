import React, { useState } from "react";
import LOGO from "../../Assets/icon.png";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/AuthAction.js";
const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignedup, setIsSignedup] = useState(false);
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const [pass, setPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignedup) {
      data.password !== data.confirmpass
        ? setPass(false)
        : dispatch(signUp(data));
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setPass(true);
    setData({
      email: "",
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={LOGO} alt="" />
        <div className="Info">
          <h1>Socio</h1>
          <h6>A perfect place to share your day to day moments!</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignedup ? "Log In" : "Sign up"}</h3>
          {isSignedup ? (
            <></>
          ) : (
            <>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="infoInput"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="infoInput"
                  name="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                />
              </div>
            </>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignedup ? (
              <></>
            ) : (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: pass ? "none" : "block",
              color: "red",
              marginLeft: "5px",
              fontSize: "12px",
              alignSelf: "flex-end",
            }}
          >
            *Confirm password doesnt match...
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignedup(!isSignedup);
                resetForm();
              }}
            >
              {isSignedup
                ? "Dont have an account ? SignUp"
                : "Already have an account. Login!"}
            </span>
          </div>
          <button className="share-btn" type="submit" disabled={loading}>
            {loading ? "Loading... " : isSignedup ? "Login" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
