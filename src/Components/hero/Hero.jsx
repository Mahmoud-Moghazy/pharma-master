import React from "react";
import { Container, Row } from "react-bootstrap";
import { Ads } from "../../Assets/img/index";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="container">
      <Row>
        <img src={Ads} alt=""></img>
      </Row>
    </div>
  );
};

export default Hero;
