const url = () => {
   if (process.env.NODE_ENV !== "production") {
      return "https://lll-tournament.herokuapp.com/";
   } else {
      return "http://localhost:5000/";
   }
};

module.exports = url;