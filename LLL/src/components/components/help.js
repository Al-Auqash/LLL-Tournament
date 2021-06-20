import React from "react";
import { Link } from "react-router-dom";
import background from "../img/background.png";

const help = () => {
    const forgotPassword = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#10131c",
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    const forgotPasswordText = {
        width: "50%",
        height: "auto",
        wordWrap: "break-word",
        fontFamily: "Righteous",
        color: "#ffffff",
        backgroundColor: "#1e3044",
        textAlign: "center",
        alignContent: "center",
        fontWeight: "lighter",
        borderRadius: "20%",
        padding: "5%",
    };

    const goBack = {
        color: "#e41376",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "bold",
    };

    return (
        <div style={forgotPassword}>
            <h3 style={forgotPasswordText}>
                HELLO! We're happy that you are that excited to join us! but
                we're sorry to inform you that this webpage is under
                maintenance, for more further registration please contact us.
                Best Regards!
            </h3>

            <Link style={goBack} to="/tournament">
                {" "}
                Go Back
            </Link>
        </div>
    );
};

export default help;
