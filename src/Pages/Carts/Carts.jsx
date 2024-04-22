import React, { useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import Search from "../../Components/Search/Search";
import { Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../Redux/Slice/CartSlice";
import UseAuth from "../../Custom-hooks/UseAuth";
import LogIn from "../../Pages/LogIn/LogIn";
import "../../css/Carts.css";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Carts = () => {
  const dispatch = useDispatch();
  const currentUser = UseAuth();
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteProduct = (id) => {
    dispatch(deleteItem(id));
  };

  if (!currentUser) {
    return (
      <div className="container">
        <LogIn />
      </div>
    );
  }

  const isCartEmpty = cartItem.length === 0;

  const handleCompleteOrder = () => {
    if (isCartEmpty) {
      setIsModalOpen(true); // Open the React Modal
    } else {
      // Proceed to billing page
    }
  };

  return (
    <Helmet title="Carts">
      <div className="container">
        <Search />
        <Row>
          <h2 className="about mt-5">My Carts</h2>
        </Row>
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {cartItem.length === 0 ? (
            <h2 className="fs-4 text-center">no item added to the cart</h2>
          ) : (
            <>
              {cartItem.map((item) => (
                <Card
                  key={item.id}
                  id="card-one"
                  style={{
                    marginBottom: "50px",
                    width: "300px", // Adjust card width as needed
                  }}
                >
                  <div className="card-body">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="iconCarts"
                        onClick={() => deleteProduct(item.id)}
                      />
                    </div>
                    <div className="img">
                      <motion.img
                        whileHover={{ scale: "1.1" }}
                        src={item.image}
                        alt="CaresImage"
                        className="cardImage"
                      />
                    </div>
                    <h3>{item.productName}</h3>
                    <p>{item.prices} £</p>

                    <h4>Available in:</h4>
                    <div className="available">
                      {item.pharmacy?.map((pharmacy, index) => (
                        <span key={index}>⚕ {pharmacy}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </>
          )}
        </Row>
        <Row>
          <div id="order">
            <div>
              <h5>
                Subtotal: <span>{totalAmount} £</span>
              </h5>
            </div>
            <div>
              {isCartEmpty ? (
                <button className="buy__btn" onClick={handleCompleteOrder}>
                  Complete Order
                </button>
              ) : (
                <button className="buy__btn">
                  <Link to="/billing">Complete Order</Link>
                </button>
              )}
              <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Empty Cart Message"
                style={{
                  overlay: {
                    zIndex: 9999, // Higher z-index to make it above other elements
                  },
                  content: {
                    color: "#fff", // White color for text
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "500px",
                    padding: "20px",
                    backgroundColor: "#13a03bd6", // Dark background color for modal
                    borderRadius: "8px",
                    textAlign: "center",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <button
                    style={{
                      background: "black",
                      width: "30px",
                      height: "30px",
                      color: "#fff",
                      borderRadius: "50%",
                      border: "1px solid black",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="close-button"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <h3 className="mt-5 ">Please add products to continue.</h3>
              </ReactModal>
            </div>
          </div>
        </Row>
      </div>
    </Helmet>
  );
};

export default Carts;
