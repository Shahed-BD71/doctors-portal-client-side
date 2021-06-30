import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import './LoginForm.css'
import { useHistory, useLocation, Link } from "react-router-dom";
import loginPageImage from '../../../images/login-bg-image.png';
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./LoginManager";
import Footer from "../../Shared/Footer/Footer";


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: '',
    success: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
      setLoggedInUser(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  return (
    <section className="m-2">
      <div className="container mt-5">
        <div className="row align-items-center d-flex">
          <div className="p-5 col-md-6">
            <div className="md-float-material form-material">
              <div className="auth-box card">
                <div className="login-area card-block">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center heading">
                        Sign Up or Registration
                      </h3>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group form-primary">
                      <input
                        onChange={() => setNewUser(!newUser)}
                        name="name"
                        type="text"
                        onBlur={handleBlur}
                        placeholder="Your name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group form-primary">
                      <input
                        onChange={() => setNewUser(!newUser)}
                        type="text"
                        name="email"
                        onBlur={handleBlur}
                        placeholder="Your Email address"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group form-primary">
                      <input
                        onChange={() => setNewUser(!newUser)}
                        type="password"
                        name="password"
                        onBlur={handleBlur}
                        placeholder="Your Password"
                        required
                        className="form-control"
                      />
                    </div>
                    <div class="row">
                      <div class="col-md-12 d-flex pt-3 justify-content-center">
                        <button
                          class="btn btn-brand"
                          type="submit"
                          value={newUser ? "Sign up" : "Sign in"}
                        >
                          Sign Up
                        </button>
                        <p style={{ color: "red" }}>{user.error}</p>
                        {user.success && (
                          <p style={{ color: "green" }}>
                            User {newUser ? "created" : "Logged In"}{" "}
                            successfully
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
                  <div class="or-container">
                    <div class="line-separator"></div>
                    <div class="or-label">or</div>
                    <div class="line-separator"></div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex pb-3 justify-content-center">
                      {" "}
                      <button
                        className="btn btn-lg btn-google fw-bold btn-block btn-outline"
                        onClick={googleSignIn}
                      >
                        <img
                          className="me-2"
                          src="https://img.icons8.com/color/16/000000/google-logo.png"
                          alt=""
                        />
                        Continue With Google
                      </button>
                    </div>
                  </div>
                  <p class="text-inverse text-center">
                    Already have an account?
                    <Link>
                      {() => handleSubmit()}
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-5">
            <img src={loginPageImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Login;
