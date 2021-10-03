import React, { Component } from "react";
import logo from "../img/LLL logo.png";
import line from "../img/Line.png";
import twitch from "../img/twitch.png";
import google from "../img/google.png";
import twitter from "../img/twitter.png";
import steam from "../img/steam.png";
import "./signIn.css";
import { Link, Redirect } from "react-router-dom";

class signIn extends Component {

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
                    <form className="formSignIn" onSubmit>
                        <div className="formSection space">
                            <label className="formText">EMAIL</label>
                            <input
                                className="formInput"
                                type="text"
                                name="name"
                            />
                        </div>
                        <div className="formSection space">
                            <label className="formText">PASSWORD</label>
                            <input
                                className="formInput"
                                type="password"
                                name="password"
                            />
                        </div>
                        <button
                            className="formButton"
                            type="submit"
                            name="signIn"
                        >
                            SIGN IN
                        </button>
                        <Link to="/forgotPassword"><a>forgot password?</a></Link>
                        <img src={line} className="formSeparation"></img>
                    </form>
                    <Link to="/signUp" className="signUpSize">
                        <button className="signUpButton">
                            CREATE FREE ACCOUNT
                        </button>
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
