import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../../css/Cares.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slice/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const VitaminsProduct = (props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        id: props.id,
        productName: props.productName,
        image: props.image,
        price: props.prices,
        quantities: props.quantities,
        pharmacy: props.pharmacy,
      })
    );
    toast.success("Product added Successfully");
  };

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div className="container">
        <Row>
          <Col>
            <Card
              style={{
                height: "450px",
              }}
              id="card-one"
            >
              <div className="card-body">
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className="iconCarts"
                    onClick={addToCart}
                  />
                </div>
                <div className="img">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={props.image}
                    alt="CaresImage"
                    className="cardImage"
                  />
                </div>
                <h3>{props.productName}</h3>
                <p>{props.prices} £</p>
                {/* Add the button to toggle details */}
                <Link to={`/product/${props.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={toggleDetails}
                    className="showDetails"
                  >
                    {showDetails ? "Hide Details" : "Show Details"}
                  </motion.button>
                </Link>
                {/* Show details if 'showDetails' is true */}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VitaminsProduct;
