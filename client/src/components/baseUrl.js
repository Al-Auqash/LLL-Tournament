const baseUrl = () => {
   var url = "";
   if (process.env.NODE_ENV !== "production") {
      url = "https://lll-tournament.herokuapp.com/";
   } else {
      url = "http://localhost:5000/";
   }
   return url;
};

module.exports = baseUrl;
