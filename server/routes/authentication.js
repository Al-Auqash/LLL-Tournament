const express = require("express");
const authentication = require("../controllers/authentication.js");
const router = express.Router();

// router.get("/login", checkNotAuthenticated, (req, res) => {
//   return res.redirect("/login")
// });

router.post(
  "/signIn",
  authentication.checkNotAuthenticated,
  authentication.login
);
// router.post('/signIn', checkNotAuthenticated, passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/signIn',
//     failureFlash: true
//   }))

// router.post("/signUp", authentication.checkNotAuthenticated, authentication.register);
router.post("/signUp", authentication.register);
router.delete("/signOut", authentication.logout);

module.exports = router;
