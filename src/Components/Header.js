import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="MainPage">
      <header className="fixed-top header">
        {/* top header */}
        <div className="top-header py-2 bg-light">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-4 text-center text-lg-left">
                <Link className="text-color mr-3" to="">
                  <strong>Call</strong> +92 333 4741711
                </Link>
                <ul className="list-inline d-inline">
                  <li className="list-inline-item mx-0">
                    <Link
                      className="d-inline-block p-2 text-color"
                      to="https://www.facebook.com/rabeelwakeel"
                    >
                      <i className="ti-facebook" />
                    </Link>
                  </li>
                  <li className="list-inline-item mx-0">
                    <Link
                      className="d-inline-block p-2 text-color"
                      to="https://twitter.com/RajputRabeel"
                    >
                      <i className="ti-twitter-alt" />
                    </Link>
                  </li>
                  <li className="list-inline-item mx-0">
                    <Link
                      className="d-inline-block p-2 text-color"
                      to="https://github.com/rabeelwakeel"
                    >
                      <i className="ti-github" />
                    </Link>
                  </li>
                  <li className="list-inline-item mx    -0">
                    <Link
                      className="d-inline-block p-2 text-color"
                      to="https://www.instagram.com/rabeelwakeel_/?hl=en"
                    >
                      <i className="ti-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 text-center text-lg-right">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      to="Gallery"
                    >
                      Gallery
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      to="/login "
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      login
                    </Link>
                  </li>
                  {/* <li className="list-inline-item">
                    <Link
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      to="#signupModal"
                      data-toggle="modal"
                      data-target="#signupModal"
                    >
                      register
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* navbar */}
        <div className="navigation w-100">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark p-0">
              <Link className="navbar-brand" to="index.html">
                <img src="images/favicon.png" alt="logo" />
              </Link>
              <button
                className="navbar-toggler rounded-0"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ml-auto text-center">
                  <li className="nav-item active">
                    <Link className="nav-link" to="Header.js">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item @@about">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item @@courses">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item @@events">
                    <Link className="nav-link" to="/trainer">
                      Trainers
                    </Link>
                  </li>
                  <li className="nav-item @@blog">
                    <Link className="nav-link" to="/cards">
                      Cards
                    </Link>
                  </li>

                  <li className="nav-item @@contact">
                    <Link className="nav-link" to="">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div>
        <div
          className="modal fade"
          id="signupModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content rounded-0 border-0 p-4">
              <div className="modal-header border-0">
                <h3>Register</h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="login">
                  <form action="#" className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="signupPhone"
                        name="signupPhone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="signupName"
                        name="signupName"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control mb-3"
                        id="signupEmail"
                        name="signupEmail"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="password"
                        className="form-control mb-3"
                        id="signupPassword"
                        name="signupPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* hero slider */}
        <section
          className="hero-section overlay bg-cover"
          data-background="images/teacher.jpg"
        >
          <div className="container">
            <div className="hero-slider">
              {/* slider item */}
              {/* slider item */}
              {/* slider item */}
              <div className="hero-slider-item">
                <div className="row">
                  <div className="col-md-8">
                    <h1
                      className="text-white"
                      data-animation-out="fadeOutDown"
                      data-delay-out={5}
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".1"
                    >
                      GYM
                    </h1>
                    <p
                      className="text-muted mb-4"
                      data-animation-out="fadeOutDown"
                      data-delay-out={5}
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".4"
                    >
                      “Dance until you shatter yourself.”
                    </p>
                    <Link
                      to="signup"
                      className="btn btn-primary"
                      data-animation-out="fadeOutDown"
                      data-delay-out={5}
                      data-duration-in=".3"
                      data-animation-in="zoomIn"
                      data-delay-in=".7"
                    >
                      Enroll now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /hero slider */}
      </div>
    </div>
  );
}

export default Header;
