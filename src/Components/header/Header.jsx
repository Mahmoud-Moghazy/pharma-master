import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Header.css";
import { logo } from "../../Assets/img/index"; // Importing logo image
import userIcon from "../../Assets/img/user-icon-1024x1024-dtzturco.png"; // Importing user icon image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component
import { useSelector } from "react-redux"; // Importing useSelector hook from Redux
import UseAuth from "../../Custom-hooks/UseAuth"; // Importing custom authentication hook
import HeaderBottom from "./HeaderBottom"; // Importing HeaderBottom component
import { nav__link, nav__mobile__link } from "../../data/navData"; // Importing navigation data
import { motion } from "framer-motion"; // Importing motion for animations
import { signOut } from "firebase/auth"; // Importing signOut function from firebase auth
import { auth } from "../../Firebase.config"; // Importing firebase auth configuration
import { toast } from "react-toastify"; // Importing toast notification library
import CircleIndicator from "../CircleIndicator/CircleIndicator"; // Importing CircleIndicator component

const Header = () => {
  const navigate = useNavigate(); // Initializing navigate function for programmatic navigation

  const currentUser = UseAuth(); // Getting current user using custom authentication hook
  const [clicked, setClicked] = useState(false); // State for mobile navigation menu
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Selecting total quantity from Redux store

  // Function to handle user logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("logged out"); // Showing success message on logout
        navigate("/home"); // Redirecting to home page after successful logout
      })
      .catch((err) => {
        toast.error("error.message"); // Showing error message if logout fails
      });
  };

  // Function to handle click event for mobile navigation menu
  const handleClick = () => {
    setClicked(!clicked); // Toggling mobile navigation menu
  };

  return (
    <>
      {/* Progress Indicator */}
      <CircleIndicator />

      {/* Start of header for big and medium screens */}
      <header className="main-header">
        <div className="header-content">
          <div className="left">
            {/* Logo */}
            <NavLink to="/home">
              <motion.img
                whileTap={{ scale: 1.1 }}
                className="logo"
                src={logo}
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="right">
            {/* Navigation Links */}
            <ul>
              {nav__link.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    <FontAwesomeIcon icon={item.imgNav} className="iconCarts" />
                    {item.display}
                    {item.path === "carts" && (
                      <span className="badge">{totalQuantity}</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="user">
            {/* User Actions */}
            {currentUser ? (
              <div className="user__actions">
                <div className="actions">
                  <select
                    onChange={(e) => {
                      const selectedOption = e.target.value;
                      if (selectedOption === "Logout") {
                        logout();
                      } else {
                        navigate(selectedOption);
                      }
                    }}
                  >
                    <option value="/dashboard">Dashboard</option>
                    <option value="/profile">Profile</option>
                    <option value="Logout">Logout</option>
                  </select>
                </div>
                {/* User Details */}
                <div className="user_details">
                  <img
                    src={
                      currentUser && currentUser.photoURL
                        ? currentUser.photoURL
                        : userIcon
                    }
                    alt="userIcon"
                    className="user__image"
                  />
                  <p>{currentUser.displayName}</p>
                </div>
              </div>
            ) : (
              <div className="user__actions">
                <div className="actions">
                  <select
                    onChange={(e) => {
                      const selectedOption = e.target.value;
                      navigate(selectedOption);
                    }}
                  >
                    <option value="/signUp">Sign Up</option>
                    <option value="/login">Login</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div id="open" onClick={handleClick}>
            <i
              id="bar"
              className={clicked ? "bx bx-menu" : "bx bxs-x-circle"}
            ></i>
          </div>
        </div>
      </header>
      {/* End of header for big and medium screens */}

      {/* HeaderBottom Component */}
      <HeaderBottom />

      {/* Mobile Navigation */}
      <div id="mobile-nav" className={clicked ? "active" : ""}>
        <ul>
          <div className="user-mobile">
            {/* User Image */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
              className="userImage"
            >
              <img
                src={
                  currentUser && currentUser.photoURL
                    ? currentUser.photoURL
                    : userIcon
                }
                alt="userIcon"
              />
              <p
                style={{
                  paddingTop: "15px",
                  color: "#f8f8f8",
                }}
              >
                {currentUser ? currentUser.displayName : "Guest"}
              </p>{" "}
            </div>
            {/* User Actions */}
            {currentUser ? (
              <div className="user__actions">
                <span onClick={logout}>Logout</span>
                <i></i>
                <Link to="dashboard">Dashboard</Link>
                {/* Displaying user's display name */}
              </div>
            ) : (
              <div className="user__actions">
                <div>{/* Links for sign up and login here */}</div>
              </div>
            )}
          </div>
          {/* Rendering Navigation Links */}
          {nav__link.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>
                <FontAwesomeIcon icon={item.imgNav} className="iconCarts" />
                {item.display}
                {item.path === "carts" && (
                  <span className="badge">{totalQuantity}</span>
                )}
              </NavLink>
            </li>
          ))}
          {/* Rendering additional mobile-only navigation links */}
          {nav__mobile__link.map((item) => (
            <li key={item.paths}>
              <NavLink to={item.paths}>
                <FontAwesomeIcon icon={item.iconImg} className="iconCarts" />
                {item.displayText}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* End of Mobile Navigation */}
    </>
  );
};

export default Header;
