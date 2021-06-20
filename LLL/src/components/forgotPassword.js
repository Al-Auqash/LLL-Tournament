import React from "react";

const forgotPassword = () => {
  const forgotPassword = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#28283b",
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
    backgroundColor: "#14141f",
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
        password is a credential variable for us. try to remember what password
        were you using. this is why you should not use random things as your
        important variable of your account's password
      </h3>

      <a style={goBack} href="/signIn">
        {" "}
        Go Back
      </a>
    </div>
  );
};

export default forgotPassword;
