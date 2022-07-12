import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import LoggedIn from "./../authentication/LoggedIn";

const Navbar = () => {
   const signOut = () => {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios
         .post("/authentication/signOut")
         .then(() => {
            localStorage.removeItem("token");
            localStorage.clear();
            window.location.href = "/";
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   };
   return (
      <nav
         id="navBar"
         className="navbar sticky-top navbar-expand-md navbar-dark bg-base-background shadow-sm"
      >
         <div className="container-fluid d-flex flex-row justify-content-space-between m-0">
            <a className="navbar-brand" href="{{ url('/') }}">
               <img src="/images/LLL logo.png" width="75"></img>
            </a>
            <a className="navbar-brand" href="{{ url('/') }}">
               LLL Tournament
            </a>
            <div
               className="collapse navbar-collapse w-100"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                     <NavLink
                        exact
                        to="/"
                        className="navText nav-link px-4 mx-2"
                        activeClassName="active"
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        to="/guide"
                        className="navText nav-link px-4 mx-2"
                        activeClassName="active"
                     >
                        Guide
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        to="/tournament"
                        className="navText nav-link px-4 mx-2"
                        activeClassName="active"
                     >
                        Tournament
                     </NavLink>
                  </li>
                  {LoggedIn() ? (
                     <>
                        <li className="nav-item dropdown">
                           <a
                              id="navbarDropdown"
                              className="nav-link dropdown-toggle px-4 mx-2"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              User
                           </a>

                           <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="navbarDropdown"
                           >
                              <a
                                 className="dropdown-item btnNav"
                                 onClick={signOut}
                              >
                                 Sign Out
                              </a>
                           </div>
                        </li>
                     </>
                  ) : (
                     <>
                        <li className="nav-item">
                           <Link to="/signIn" className="btn px-5 mx-2 signIn">
                              SIGN IN
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/signUp" className="btn px-5 mx-2 signUp">
                              SIGN UP
                           </Link>
                        </li>
                     </>
                  )}
               </ul>
            </div>

            {/* <button className="signUp">
          <a href="#" className="navText navbar-brand">Sign Up</a>
        </button> */}
         </div>
      </nav>
   );
};

export default Navbar;
