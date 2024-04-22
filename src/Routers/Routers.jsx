import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../Components/header/Header";
import Footer from "../Components/Footer/Footer";
import Cares from "../Pages/Cares/Cares";
import Medicine from "../Pages/Medicine/Medicine";
import Vitamins from "../Pages/Vitamins/Vitamins";
import Equipments from "../Pages/Equipments/Equipments";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Home from "../Pages/Home/Home";
import Carts from "../Pages/Carts/Carts";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Billing from "../Components/Billing/Billing";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails"; // New component for product details
import Checkout from "../Pages/Checkout/Checkout";
import Dashboard from "../admin/Dashboard";
import AllProduct from "../admin/AllProduct";
import OurTeam from "../Pages/OurTeam/OurTeam";
import Profile from "../Pages/Profile/Profile";
import Order from "../Pages/Order/Order";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Routers = () => {
  const stripePromise = loadStripe(
    "pk_test_51P7Xe8BBKa1VzXFU3i19vX9KEyJDQ8aeoqHkR5eowRNGpJXlsqMWqgyf83pKSlsMv6ZnYQctL9mfgFsjYL3n1G2W00MQFT6IpQ"
  );
  return (
    <Routes>
      {/* Redirect from root to /home */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="header" element={<Header />} />
      <Route path="footer" element={<Footer />} />
      <Route path="cares" element={<Cares />} />
      <Route path="medicine" element={<Medicine />} />
      <Route path="vitamins" element={<Vitamins />} />
      <Route path="equipments" element={<Equipments />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="logIn" element={<LogIn />} />
      <Route path="carts" element={<Carts />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="billing" element={<Billing />} />
      <Route
        path="/checkout"
        element={
          <>
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          </>
        }
      />
      <Route path="order" element={<Order />} />
      <Route path="product/:id" element={<ProductsDetails />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/allProduct" element={<AllProduct />} />
      <Route path="ourTeam" element={<OurTeam />} />
      <Route path="profile" element={<Profile />} />
      {/* New route for product details */}
    </Routes>
  );
};

export default Routers;
