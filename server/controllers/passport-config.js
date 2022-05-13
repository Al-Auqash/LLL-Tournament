const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const authenticationModel = require("../models/authentication");

module.exports = (passport) => {
   passport.use(
      new LocalStrategy((email, password, done) => {
         authenticationModel.findOne({ email: email }, function (err, user) {
            if (err) return done(err);
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
               if (err) throw err;
               if (result === true) {
                  return done(null, user);
               } else {
                  return done(null, false);
               }
            });
         });
      })
   );
   passport.serializeUser((user, done) => done(null, user.id));
   passport.deserializeUser((_id, done) => {
      authenticationModel.findOne({ _id: id }, (err, user) => {
         const userInformation = {
            email: user.email,
         };
         done(err, userInformation);
      });
   });
};
