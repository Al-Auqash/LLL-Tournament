const express = require("express");
const authentication = require("../controllers/authentication.js");
const router = express.Router();
// const passport = require("./passport");
const app = express();

// router.get("/login", checkNotAuthenticated, (req, res) => {
//   return res.redirect("/login")
// }); 

// From official doc - https://github.com/jaredhanson/passport#middleware - To use Passport in an Express or Connect-based application, configure it with the required passport.initialize() middleware. If your application uses persistent login sessions (recommended, but not required), passport.session() middleware must also be used.
// app.use(passport.initialize());
// app.use(passport.session());

// router.post(
//    "/signIn",
//    (req, res, next) => {
//       console.log("routes/user.js, login, the value of req.body is: "); // line only for debugging for me
//       console.log(req.body);
//       next();
//    },
//    passport.authenticate("local"),
//    authentication.login
// );

// router.post('/signIn', checkNotAuthenticated, passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/signIn',
//     failureFlash: true
//   }))

// router.post("/signUp", authentication.checkNotAuthenticated, authentication.register);
router.post("/signUp", authentication.register);
router.delete("/signOut", authentication.logout);

module.exports = router;
