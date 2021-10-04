import React, { Component } from "react";
import logo from "../img/LLL logo.png";
import line from "../img/Line.png";
import "./signIn.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class signIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.signInUser = this.signInUser.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  signInUser(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/auth/signIn", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      email: "",
      password: "",
    });
  }
  render() {
    const twitchClick = () => {
      window.location.href = "https://twitch.com";
    };

    const gooogleClick = () => {
      window.location.href = "https://google.com";
    };

    const twitterClick = () => {
      window.location.href = "https://twitter.com";
    };

    const steamClick = () => {
      window.location.href = "https://store.steampowered.com/";
    };
    return (
      <div id="signIn">
        <div className="backgroundSignIn">
          <img className="logo" src={logo}></img>
          <h1>SIGN IN</h1>
          <h3>to Continue to LLL</h3>
          <form className="formSignIn" onSubmit={this.signInUser}>
            <div className="formSection space">
              <label className="formText">EMAIL</label>
              <input
                autoComplete="off"
                className="formInput"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleFieldChange}
              />
            </div>
            <div className="formSection space">
              <label className="formText">PASSWORD</label>
              <input
                autoComplete="off"
                className="formInput"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleFieldChange}
              />
            </div>
            <button className="formButton" type="submit" name="signIn">
              SIGN IN
            </button>
            <Link to="/forgotPassword">
              <a>forgot password?</a>
            </Link>
            <img src={line} className="formSeparation"></img>
          </form>
          <Link to="/signUp" className="signUpSize">
            <button className="signUpButton">CREATE FREE ACCOUNT</button>
          </Link>
          {/* <p>or sign in using</p>
                    <div className="mediaSignIn">
                        <img
                            src={twitch}
                            onClick={twitchClick}
                            className="mediaImg"
                        />
                        <img
                            src={google}
                            onClick={gooogleClick}
                            className="mediaImg"
                        />
                        <img
                            src={twitter}
                            onClick={twitterClick}
                            className="mediaImg"
                        />
                        <img
                            src={steam}
                            onClick={steamClick}
                            className="mediaImg"
                        />
                    </div> */}
        </div>
      </div>
    );
  }
}

export default signIn;
