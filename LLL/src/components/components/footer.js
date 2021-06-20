import React from "react";
import "./footer.css";
import twitches from "../img/twitches.png";
import instagram from "../img/instagram.png";
import twitters from "../img/twitters.png";
// import steam from "../img/steam.png";

const footer = () => {
    return (
        <section id="footer">
            <div className="footerContent">
                <ul>
                    <li className="contactUs">CONTACT US!</li>
                    <a
                        href="https://www.instagram.com/ilham_tawakhal/"
                        className="contactItem"
                    >
                        <img src={instagram}></img>
                        <li>Instagram</li>
                    </a>
                    <a
                        href="https://twitter.com/Ilham_tawakhal"
                        className="contactItem"
                    >
                        <img src={twitters}></img>
                        <li>Twitter</li>
                    </a>
                    <a
                        href="https://www.twitch.tv/itash__"
                        className="contactItem"
                    >
                        <img src={twitches}></img>
                        <li>Twitch</li>
                    </a>
                </ul>
            </div>
            <div className="footerContent">
                <a href="/login">uwu @2021</a>
            </div>
            <div className="footerContent">
                <ul>
                    <li>CONTACT US!</li>
                    <a
                        href="https://www.instagram.com/ilham_tawakhal/"
                        className="contactItem"
                    >
                        <img src={instagram}></img>
                        <li>Instagram</li>
                    </a>
                    <a
                        href="https://twitter.com/Ilham_tawakhal"
                        className="contactItem"
                    >
                        <img src={twitters}></img>
                        <li>Twitter</li>
                    </a>
                    <a
                        href="https://www.twitch.tv/itash__"
                        className="contactItem"
                    >
                        <img src={twitches}></img>
                        <li>Twitch</li>
                    </a>
                </ul>
            </div>
        </section>
    );
};

export default footer;
