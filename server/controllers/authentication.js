const express = require("express");
const authenticationModel = require("../models/authentication.js");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

const initializePassport = require("./passport-config");
initializePassport(passport);

//---------------------------------------- END OF MIDDLEWARE ----------------------------------------//

const login = () => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signIn",
    failureFlash: true,
  });
};

const register = (req, res) => {
  authenticationModel.findOne(
    { username: req.body.username },
    async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new authenticationModel({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role,
        });
        await newUser.save();
        res.send("User Created");
      }
    }
  );

  // try {
  //   const hashedPassword = await bcrypt.hash(req.body.password, 10);
  //   authenticationModel.push({
  //     username: req.body.username,
  //     email: req.body.email,
  //     role: req.body.role,
  //     password: hashedPassword,
  //   });
  //   res.redirect("/signIn");
  // } catch {
  //   res.redirect("http://localhost:3000/signUp");
  // }
};

const logout = (req, res) => {
  req.logOut();
  res.redirect("/signIn");
};

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/signIn");
};

const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
};

exports.login = login;
exports.register = register;
exports.logout = logout;
exports.checkAuthenticated = checkAuthenticated;
exports.checkNotAuthenticated = checkNotAuthenticated;
