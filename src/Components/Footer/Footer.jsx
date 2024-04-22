import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  appstore,
  googleplay,
  logo,
  faceBook,
  Google,
  x,
} from "../../Assets/img/index";
import "./Footer.scss";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <Row id="footer-row">
        <Col lg="4" sm="12" id="first-col">
          <Link to="home">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/home">Home</Link>
          <Link to="/cares">Cares</Link>
          <Link to="/medicine">Medicine</Link>
          <Link to="/Vitamins">Vitamins</Link>
        </Col>
        <Col lg="4" sm="12" id="third-col">
          <h3>Need Help?</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/ourTeam">Our Team</Link>
          <Link to="/about">About Us</Link>
          <Link to="/equipments">Equipments</Link>
        </Col>
        <Col lg="4" sm="12" id="last-col">
          <a href="/">
            <img src={appstore} alt="appstore" />
          </a>
          <Link href="/">
            {" "}
            <img src={googleplay} alt="googleplay" />
          </Link>
          <div>
            <Link href="/">
              <img src={faceBook} alt="Face" />
            </Link>
            <Link href="/">
              <img src={x} alt="x" />
            </Link>
            <Link href="/">
              {" "}
              <img src={Google} alt="Google" />
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="divider">
        <p></p>
      </Row>
      <Row id="footer-row-bottom">
        <div>
          <p>
            <span>Call Us:</span> 17622 Cost Of Regular Call{" "}
          </p>
          <p>
            <span>Address:</span> 15 Ahmed Shawky st. El tahrir square
          </p>
          <p>
            <span>Mail Us:</span> Info@pharmacyhub.com
          </p>
        </div>
      </Row>
      <Row className="divider">
        <p></p>
      </Row>
      <Row>
        <p className="footer__copyRight">
          CopyRight <span>{year}</span> developed by <span>spider Team </span>
          All rights reversed.
        </p>
      </Row>
    </div>
  );
};

export default Footer;
