import React from "react";
import hamed from "../../Assets/img/hamed.jpg";
import ahmed from "../../Assets/img/ahmed.jpg";
import "./OurTeam.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faHtml5,
  faCss3,
  faSquareJs,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";
const OurTeam = () => {
  return (
    <div className="container overflow-hidden pb-5 ">
      <Row>
        <Col className="text-center">
          <h2 className="section-title mb-5 ">The Team Behind PharmacyHub </h2>
        </Col>
      </Row>
      <Row
        id="team"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Col lg="6" sm="12">
          <div className="team-item">
            <img src={hamed} alt="hamedImage" className="team-img" />
            <h3>Hamed Al-Shahawy</h3>
            <div className="team-info">
              <p>Front-end developer</p>
              <p>skills</p>
              <div className="skills">
                <span>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{
                      background: "#e34f26",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  HTML
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCss3}
                    style={{
                      background: "#264de4",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  CSS
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    style={{
                      background: "#f7df1e",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  JS
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    style={{
                      background: "#9461fb",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  Bootstrap
                </span>
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{
                      background: "#00d8ff",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  React
                </span>
              </div>
              <ul className="team-icon">
                <li>
                  <Link href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="gitHub">
                    <FontAwesomeIcon icon={faGithub} />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg="4" sm="12">
          <div className="team-item">
            <img src={ahmed} alt="hamedImage" className="team-img" />
            <h3>Ahmed said</h3>
            <div className="team-info">
              <p>Front-end developer</p>
              <p>skills</p>
              <div className="skills">
                <span>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{
                      background: "#e34f26",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  HTML
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCss3}
                    style={{
                      background: "#264de4",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  CSS
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    style={{
                      background: "#f7df1e",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  JS
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    style={{
                      background: "#9461fb",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  Bootstrap
                </span>
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{
                      background: "#00d8ff",
                      widows: "15px",
                      height: "15px",
                      lineHeight: "20px",
                      padding: "10px",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  />
                  React
                </span>
              </div>

              <ul className="team-icon">
                <li>
                  <Link className="twitter" href="#">
                    <FontAwesomeIcon icon={faTwitter} className="twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="gitHub">
                    <FontAwesomeIcon icon={faGithub} />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurTeam;
