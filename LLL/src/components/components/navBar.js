import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import logoGCC from './../img/GCC logo.png'

const navBar = () => {
    return (
        <section id="navBar">
            <img src={logoGCC}></img>
            <div className="navPosition">
                <Link to="/" className="navText">
                    Home
                </Link>
                <Link to="/guide" className="navText">
                    Guide
                </Link>
                <Link to="/tournament" className="navText">
                    Tournament
                </Link>
                {/* <Link to="/signIn" className="btnPosition">
                    <button className="signIn">
                        <p className="btnText">Sign In</p>
                    </button>
                </Link>
                <p className="navText">or</p> */}
                <Link to="/signUp" className="btnPosition">
                    <button className="signUp">
                        <p className="btnText">Sign Up</p>
                    </button>
                </Link>

                {/* <button className="signUp">
          <a href="#" className="navText">Sign Up</a>
        </button> */}
            </div>
        </section>
    );
};

export default navBar;
