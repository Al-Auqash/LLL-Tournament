const isAdmin = () => {
   const role = localStorage.getItem("role");
   if (role == "admin") {
      return true;
   } else {
      return false;
   }
};

module.exports = isAdmin;
