import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import logoLLL from './../img/LLL logo.png'

const navBar = () => {
    return (
        <section id="navBar">
            <img src={logoLLL}></img>
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
                <Link to="/signIn" className="btnPosition">
                    <button className="signIn">
                        <p className="btnText">SIGN IN</p>
                    </button>
                </Link>
                <p className="navText">or</p>
                <Link to="/signUp" className="btnPosition">
                    <button className="signUp">
                        <p className="btnText">SIGN UP</p>
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
