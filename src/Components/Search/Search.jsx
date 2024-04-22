import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
// import { Prescription, Upload } from "../../Assets/img/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slice/CartSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Search.css";
import { motion } from "framer-motion";

const Search = (props) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(
      addItem({
        id: product.idProduct,
        productName: product.nameProduct,
        image: product.imgProduct,
        price: product.priceProduct,
        quantities: product.quantityProduct,
        pharmacy: product.pharmaciesType,
      })
    );
    toast.success("Product added Successfully");
  };
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchDataHandler();
    } else {
      setProducts([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  async function fetchDataHandler() {
    try {
      const response = await fetch(
        `http://e-pharmacy.runasp.net/api/product?search=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      console.log("Response from API:", responseData); // Log raw response data
      const ProductData = responseData.data.map((item) => ({
        idProduct: item.id,
        nameProduct: item.name,
        imgProduct: item.pictureUrl,
        pharmaciesType: item.pharmacies,
        priceProduct: item.price,
        quantityProduct: item.quantity,
      }));
      setProducts(ProductData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container id="searchPage">
      <Row className="d-flex align-items-center justify-between">
        <Col sm="12" lg="9">
          <Form className="hh d-flex ">
            <Form.Control
              type="search"
              placeholder="Search for medicine & wellness products"
              id="searchBar"
              aria-label="Search"
              style={{ height: "50px" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Form>
        </Col>
        {/* <Col className="custom mt-5">
          <a href="/">
            <img src={Prescription} alt="Prescription" />
          </a>
          <p>By Prescription</p>
        </Col>
        <Col className="custom mt-5">
          <a href="/">
            <img src={Upload} alt="Upload" />
          </a>
          <p>Upload product</p>
        </Col> */}
      </Row>

      {/* Display filtered products only if there's a search query */}
      {searchQuery.trim() !== "" && (
        <Row
          style={{
            marginTop: "50px",
          }}
        >
          {products.map((product) => (
            <Col key={product.idProduct} sm={6} md={4} lg={3} className="mb-4">
              <Card id="card-one" style={{ height: "550px" }}>
                <div className="card-body">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="iconCarts"
                      onClick={() => addToCart(product)}
                    />
                  </div>
                  <div className="img">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={product.imgProduct}
                      alt="CaresImage"
                      className="cardImage"
                    />
                  </div>
                  <h3>{product.nameProduct}</h3>
                  <p>{product.priceProduct} £</p>
                  {/* Add the button to toggle details */}
                  <h4>Available in:</h4>
                  <div className="available">
                    {product.pharmaciesType?.map((pharmacy, index) => (
                      <span key={index}>⚕ {pharmacy}</span>
                    ))}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Search;
