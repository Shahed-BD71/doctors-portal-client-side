import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav
      style={{ backgroundColor: "rgb(36, 154, 156)" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-3" to="#">
          Doctors Portal
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul
            style={{ marginRight: "10px", marginLeft: "10px" }}
            className="navbar-nav ms-auto text-info hover-nav fw-bolder"
          >
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" exact to="/appointment">
                Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" exact to="dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" exact to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" exact to="contact">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/login">
                {loggedInUser.name ? (
                  loggedInUser.name
                ) : (
                  <span>Registration</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;