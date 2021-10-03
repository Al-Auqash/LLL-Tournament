const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const authenticationModel = require("../models/authentication");

const initialize = (passport) => {
  // const authenticateUser = async (email, password, done) => {
  //   const user = getUserByEmail(email);
  //   if (user == null) {
  //     return done(null, false, { message: "No user with that email" });
  //   }

  //   try {
  //     if (await bcrypt.compare(password, user.password)) {
  //       return done(null, user);
  //     } else {
  //       return done(null, false, { message: "Password incorrect" });
  //     }
  //   } catch (e) {
  //     return done(e);
  //   }
  // };

  passport.use(
    new localStrategy((username, password, done) => {
      authenticationModel.findOne({ username: username }, (err, user) => {
        if (err) throw err;
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

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    authenticationModel.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });

  // passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  // passport.serializeUser((user, done) => done(null, user.id));
  // passport.deserializeUser((id, done) => {
  //   return done(null, getUserById(id));
  // });
};

module.exports = initialize;
