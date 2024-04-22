import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HeaderBottom.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const nav__bottom__link = [
  {
    paths: "cares",
    displayText: "Cares",
    iconImg: faHeart,
  },
  {
    paths: "medicine",
    displayText: "Medicine",
    iconImg: faPills,
  },
  {
    paths: "vitamins",
    displayText: "Vitamins",
    iconImg: faCarrot,
  },
  {
    paths: "equipments",
    displayText: "Equipments",
    iconImg: faStethoscope,
  },
];
const HeaderBottom = () => {
  return (
    <div id="cont">
      <Row id="ROW">
        <Col sm="12" lg="12" id="COL">
          {nav__bottom__link.map((item, index) => (
            <motion.div whileHover={{ scale: 1.1 }} key={index}>
              <NavLink
                to={item.paths}
                className={(navClass) =>
                  navClass.isActive ? "nav__bottom__active" : ""
                }
              >
                <FontAwesomeIcon icon={item.iconImg} className="iconCarts" />
                {item.displayText}
              </NavLink>
            </motion.div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default HeaderBottom;
