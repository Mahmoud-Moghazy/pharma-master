import React from "react";
import { google, apple, phone } from "../../Assets/img/index";
import { Col, Row } from "react-bootstrap";
import "./Frames.scss";
const Frames = () => {
  return (
    <div className="container" id="frames">
      <Row>
        <Col sm="12" lg="6">
          <h2 className="text-one">Download Pharmacy Hub App</h2>
          <p className="text-two">
            Unlock the ease of buying medicines and medical equipment with
            Pharmacy Hub's mobile app. Embrace a smarter and efficient way to
            manage your health needs. <span>Download the app today!</span>
          </p>
          <button>
            <a href="#Home">
              <img src={apple} alt="apple" />
            </a>
          </button>
          <button>
            <a href="#Home">
              <img src={google} alt="google" />
            </a>
          </button>
        </Col>
        <Col lg="6" id="phone">
          <img src={phone} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Frames;
