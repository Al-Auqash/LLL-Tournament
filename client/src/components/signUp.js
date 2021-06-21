import React, { Component } from "react";
import logo from "../img/GCC logo.png";
import line from "../img/Line.png";
// import twitch from "../img/twitch.png";
// import google from "../img/google.png";
// import twitter from "../img/twitter.png";
// import steam from "../img/steam.png";
import "./signUp.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class signUp extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            team: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
        };

        this.createPlayer = this.createPlayer.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    createPlayer(event) {
        event.preventDefault();

        // const player = {
        //     name: this.state.name,
        //     team: this.state.team,
        //     username: this.state.username,
        //     email: this.state.email,
        //     password: this.state.password,
        // };
        axios
            .post("/api/signUp", {
                name: this.state.name,
                team: this.state.team,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
            })
            .then((response) => {
                console.log(response);
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(error);
            });

        this.setState({
            name: "",
            team: "",
            username: "",
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
            <div id="signUp">
                <div className="backgroundSignIn">
                    <img className="logo" src={logo}></img>
                    <h1>SIGN UP</h1>
                    <h3>to Continue to LLL</h3>
                    <form className="formSignUp" onSubmit={this.createPlayer}>
                        <div className="formSection space">
                            <label className="formText">NAME</label>
                            <input
                                className="formInput"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div className="formSection space">
                            <label className="formText">TEAM</label>
                            <input
                                className="formInput"
                                type="text"
                                name="team"
                                value={this.state.team}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div className="formSection space">
                            <label className="formText">USERNAME</label>
                            <input
                                className="formInput"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div className="formSection space">
                            <label className="formText">EMAIL</label>
                            <input
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
                                className="formInput"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <div className="formSection space">
                            <label className="formText">PASSWORD</label>
                            <input
                                className="formInput"
                                type="password"
                                name="password_confirmation"
                                value={this.state.password_confirmation}
                                onChange={this.handleFieldChange}
                            />
                        </div>
                        <button
                            className="formButton"
                            type="submit"
                            name="signUp"
                        >
                            SIGN UP
                        </button>
                        {/* <Link to="/signIn">
                            <p>have an account? Sign In here</p>
                        </Link>
                        <img src={line} className="formSeparation"></img> */}
                    </form>
                </div>
            </div>
        );
    }
}

export default signUp;
