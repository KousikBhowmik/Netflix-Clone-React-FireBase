import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets.js";
import {logIn, signUp, auth} from '../../firebase.js'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loding, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(signState === "Sign In"){
      await logIn(email, password);
    }else{
      await signUp(name, email, password);
    }
    setLoading(false)
  }


  return (loding?
  <div className="loading-spinner">
    <img src={assets.netflix_spinner}  />
  </div>:
    <div className="login">
      <img src={assets.logo} className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : null}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={userAuth} type="submit" >{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
