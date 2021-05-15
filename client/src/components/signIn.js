import React from "react";
import logo from "../img/LLL logo.png";

const signIn = () => {
  return (
    <div id="signIn">
      <img className="logo" src={logo}></img>
      <h1>SIGN IN</h1>
      <h3>to Continue to LLL</h3>
      <form>
          <label>EMAIL</label>
          <input type="text">name</input>
          <label>PASSWORD</label>
          <input type="password">password</input>
          <button type="submit" name="signIn"></button>
          <a>forgot password?</a>
          <p></p>
      </form>
      <a><button></button></a>
      <p>or sign in using</p>
      <div className="mediaSignIn"></div>
    </div>
  );
};

export default signIn;
