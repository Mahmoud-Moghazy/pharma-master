import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SunOil from "../../Assets/img/sunOil.png";
import { motion } from "framer-motion";
import "./Clock.css";
const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const countDown = () => {
    const destination = new Date("June 16, 2024").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) {
        clearInterval(interval.current); // Clears the interval if the destination time is in the past
      } else {
        // Updates the state variables for days, hours, minutes, and seconds
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  });
  return (
    <div className="container">
      <Row className="clock">
        <Col lg="6" md="6" sm="12" className="clock__content">
          <div className="clock__top__content">
            <h4>Limited Offers</h4>
            <p>
              Get the Sun Tan Bronze Oil now for only{" "}
              <motion.span whileHover={{ color: "red" }}>300 £</motion.span>
            </p>
          </div>
          <div className="clock_wrapper d-flex align-items-center gap-3 ">
            <div className="clock__data d-flex align-items-center gap-3">
              <div className="text-center">
                <h1 className="text-black fs-3 mb-2">{days}</h1>
                <h5 className="text-black fs-5 ">Days</h5>
              </div>
              <span>:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
              <div className="text-center">
                <h1 className="text-black fs-3 mb-2">{hours}</h1>
                <h5 className="text-black fs-5 ">Hours</h5>
              </div>
              <span>:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
              <div className="text-center">
                <h1 className="text-black fs-3 mb-2">{minutes}</h1>
                <h5 className="text-black fs-5 ">Minutes</h5>
              </div>
              <span>:</span>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
              <div className="text-center">
                <h1 className="text-black fs-3 mb-2">{seconds}</h1>
                <h5 className="text-black fs-5 ">Seconds</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="6" md="6" sm="12" className="sunImage text-end">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={SunOil}
            alt="Sun Tan Bronze Oil"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Clock;
