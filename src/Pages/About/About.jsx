import React from "react";
import { Row } from "react-bootstrap";
import "../../css/About.css";
import Helmet from "../../Components/Helmet/Helmet";

const About = () => {
  return (
    <Helmet title="About Us">
      <div className="container">
        <Row>
          <h2 className="about">About Us</h2>
        </Row>
        <Row id="text">
          <blockquote>
            "We are the first online platform for a group of pharmacies ,as a
            customer, you can find your requirements as in{" "}
            <span className="span-one">
              {" "}
              Medication, Skin & hair care, Medical Equipment, Mom &Baby
              products, a Vitamins & Supplements
            </span>{" "}
            and we inform you where it found ,So you can find your medication by
            just one click although you can order and we deliver to you, If it’s
            not found ask for alternatives or similarities and you can upload
            your prescription or your product picture and we will help you find
            your product ,As a pharmacy you can be a member in our group,
            contact us: <span className="span-two">Info@pharmacyhub.com</span>"
          </blockquote>
        </Row>
      </div>
    </Helmet>
  );
};

export default About;
