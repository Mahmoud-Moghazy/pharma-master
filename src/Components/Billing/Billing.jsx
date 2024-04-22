import React, { useState } from "react";
import { Row, Col, Form, FormGroup } from "react-bootstrap";
import Helmet from "../Helmet/Helmet";
import "./Billing.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Billing = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const isFormFilled = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    if (!isFormFilled()) {
      alert("Please fill in all fields."); // Replace with your modal or custom message
    } else {
      // Proceed with checkout
    }
  };

  return (
    <Helmet title="Billing">
      <div className="container">
        <Row>
          <Col lg="8" sm="12">
            <h6>Billing Information</h6>
            <Form className="billing__form">
              <motion.div
                whileHover={{ scale: "1.1" }}
                className="box__details"
              >
                <h5>
                  Subtotal: <span>{totalAmount} £</span>
                </h5>
                <h5>
                  Quantity: <span>{totalQuantity}</span>
                </h5>
              </motion.div>
              <FormGroup className="form__group">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="text"
                  placeholder="Street address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="text"
                  placeholder="Postal code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <div className="fill d-flex align-items-center">
                <Link to="/checkout">
                  <motion.button
                    whileHover={{ scale: "1.1" }}
                    className="buy__btn auth__btn"
                    disabled={!isFormFilled()}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </motion.button>
                </Link>
                {!isFormFilled() && (
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "red",
                      pointerEvents: "none",
                      paddingBottom: "20px", // جعل العنصر غير قابل للنقر
                    }}
                  >
                    Please fill in all fields
                  </span>
                )}
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Helmet>
  );
};

export default Billing;
