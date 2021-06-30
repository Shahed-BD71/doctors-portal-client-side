import React from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto fw-bolder">
          <li className="nav-item">
            <Link className="nav-link ms-5 active" aria-current="page" to="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-5 text-dark" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-5 text-dark" to="dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-5 text-dark" to="#">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-5 text-dark" href="#">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-5 text-dark me-5" href="#">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
